import cloudEmp from "../assets/cloudEmp.svg";
import cloudFull from "../assets/cloudFull.svg";
import {
  SearchResultBox,
  SearchResultSort,
  SearchResults,
  SearchResult,
} from "../styles/Search.styled";
import { useState } from "react";

interface SearchResultCardProps {
  children: React.ReactNode;
}

const SearchResultCard = ({ children }: SearchResultCardProps): JSX.Element => {
  const [cloud, setCloud] = useState(false);

  return (
    <SearchResult>
      <p>{children}</p>
      <button onClick={() => setCloud(!cloud)}>
        <img src={cloud ? cloudFull : cloudEmp} alt="cloud" />
      </button>
    </SearchResult>
  );
};

const SearchResultsCard = (): JSX.Element => {
  return (
    <SearchResultBox>
      <h3>Results</h3>
      <p>About 35 search results</p>
      <SearchResultSort></SearchResultSort>
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
