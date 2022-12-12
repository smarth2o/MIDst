import {
  SearchResultBox,
  SearchResultSort,
  SearchResults,
  SearchResult,
  Button,
} from "../../styles/search/Search.styled";
import { DownIcon, UpIcon } from "../../styles/search/Filter.styled";
import { useState } from "react";
import { CloudEmp, CloudFull } from "../../assets/index";

interface SearchResultCardProps {
  children: React.ReactNode;
}

const SearchResultCard = ({ children }: SearchResultCardProps): JSX.Element => {
  const [cloud, setCloud] = useState(false);
  const [translate, setTranslate] = useState(false);

  return (
    <SearchResult onClick={() => setTranslate(!translate)}>
      <p>{children}</p>
      <button onClick={() => setCloud(!cloud)}>
        <img src={cloud ? CloudFull : CloudEmp} alt="cloud" />
      </button>
    </SearchResult>
  );
};

const SearchResultsCard = (): JSX.Element => {
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSortAsc((prev) => !prev);
  };

  return (
    <SearchResultBox>
      <h3>Results</h3>
      <p>About 35 search results</p>
      <SearchResultSort>
        <span>저장 많은 순</span>
        <Button onClick={handleSort}>
          {sortAsc ? <DownIcon /> : <UpIcon />}
        </Button>
      </SearchResultSort>
      <SearchResults>
        <SearchResultCard>
          I had a good time and I <b>feel good</b>.
        </SearchResultCard>
        <SearchResultCard>I had a good time and I feel good.</SearchResultCard>
        <SearchResultCard>I had a good time and I feel good.</SearchResultCard>
      </SearchResults>
    </SearchResultBox>
  );
};

export default SearchResultsCard;
