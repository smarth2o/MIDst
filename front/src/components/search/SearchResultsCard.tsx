import {
  SearchResultBox,
  SearchResultSort,
  SearchResult,
  Button,
} from "../../styles/search/Search.styled";
import { DownIcon, UpIcon } from "../../styles/search/Filter.styled";
import { useState } from "react";
import { CloudEmp, CloudFull } from "../../assets/index";
import { useRecoilValue } from "recoil";
import { SearchResults } from "../../stores/FilterAtom";
import { Searchword } from "../../stores/SearchAtom";

const SearchResultCard = ({ name, script }: any): JSX.Element => {
  const [cloud, setCloud] = useState(false);
  const [translate, setTranslate] = useState(false);

  return (
    <SearchResult onClick={() => setTranslate(!translate)}>
      <p>
        {name}: {script}
      </p>
      <button onClick={() => setCloud(!cloud)}>
        <img src={cloud ? CloudFull : CloudEmp} alt="cloud" />
      </button>
    </SearchResult>
  );
};

const SearchResultsList = ({ title }: any): JSX.Element => {
  const viewResult = useRecoilValue(SearchResults);
  const titleRelated = viewResult.filter((result) => result.title === title);
  // const count = titleRelated.length as Number;
  // if (title === "Friends") {
  //   setSearchCount((searchCount) => (searchCount.Friends = count));
  // } else {
  //   setSearchCount((searchCount) => (searchCount.Harrypotter = count));
  // }

  const isNotRelated: boolean =
    Array.isArray(titleRelated) && titleRelated.length === 0;

  return (
    <>
      {!isNotRelated && (
        <>
          <p className="title">{title}</p>
          {titleRelated.map((result) => (
            <SearchResultCard
              key={result.id}
              name={result.name}
              script={result.script}
            ></SearchResultCard>
          ))}
        </>
      )}
    </>
  );
};

const SearchResultsCard = ({ isSearch }: any): JSX.Element => {
  const searchword = useRecoilValue(Searchword);
  // const [searchCount, setSearchCount] = useState({
  //   Friends: 0,
  //   Harrypotter: 0,
  // });
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  const handleSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSortAsc((prev) => !prev);
  };

  return (
    <SearchResultBox>
      {/* <p>{searchCount} search results</p> */}
      <p>'{searchword}' search results</p>
      <SearchResultSort>
        <span>정확도 순</span>
        <Button onClick={handleSort}>
          {sortAsc ? <DownIcon /> : <UpIcon />}
        </Button>
      </SearchResultSort>
      {isSearch ? (
        <>
          <SearchResultsList title="Friends"></SearchResultsList>
          <SearchResultsList title="Harry Potter"></SearchResultsList>
        </>
      ) : (
        <></>
      )}
    </SearchResultBox>
  );
};

export default SearchResultsCard;
