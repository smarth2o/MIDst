import {
  SearchResultBox,
  SearchResultSort,
  SearchResult,
  Button,
} from "../../styles/search/Search.styled";
import { DownIcon, UpIcon } from "../../styles/search/Filter.styled";
import React, { useState, useEffect } from "react";
import { CloudEmp, CloudFull } from "../../assets/index";
import { useRecoilValue } from "recoil";
import { Searchword, SearchResults } from "../../stores/SearchAtom";
import * as Api from "../../api";

const SearchResultCard = ({ name, script }: any): JSX.Element => {
  const [cloud, setCloud] = useState(false);
  const [translate, setTranslate] = useState(false);
  const searchword = useRecoilValue(Searchword);

  const handleSaveSearch = async () => {
    let searchId = "";
    try {
      const my = await Api.get("main/getSearch");
      my.data.forEach((data: any) => {
        console.log(data);
        if (data.description === script) {
          setCloud(true);
          searchId = data.searchId;
        }
      });

      if (!cloud) {
        try {
          const res = await Api.post("main/saveSearch", {
            searchword: searchword,
            searchSentence: script,
          });
          console.log(res.data);
        } catch (err) {
          console.log("저장 실패");
        }
      } else {
        try {
          console.log(searchId);
          const res = await Api.put("main/deleteSearch", searchId);
          console.log(res);
        } catch (err) {
          console.log("삭제 실패");
        }
      }
      setCloud(!cloud);
    } catch (err) {
      console.log("가져오기 실패");
    }
  };

  const getSearch = async (script: any) => {
    try {
      const res = await Api.get("main/getSearch");
      res.data.forEach((data: any) => {
        if (data.description === script) {
          setCloud(true);
        }
      });
    } catch (err) {
      console.log("가져오기 실패");
    }
  };

  getSearch(script);

  return (
    <SearchResult onClick={() => setTranslate(!translate)}>
      <p>
        {name}: {script}
      </p>
      <button onClick={handleSaveSearch}>
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

const SearchResultsCard = (): JSX.Element => {
  const searchword = useRecoilValue(Searchword);
  const viewResult = useRecoilValue(SearchResults);
  const [isSearch, setIsSearch] = useState<boolean>(true);

  // useEffect(() => {
  //   setIsSearch(viewResult[2].script ? true : false);
  // }, [viewResult]);

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
