import cloudEmp from "../assets/cloudEmp.png";
import {
  SearchResultBox,
  SearchResultSort,
  SearchResults,
  SearchResult,
} from "../styles/Search.styled";

const SearchResultsCard = (): JSX.Element => {
  return (
    <SearchResultBox>
      <h3>Results</h3>
      <p>About 35 search results</p>
      <SearchResultSort></SearchResultSort>
      <SearchResults>
        <SearchResult>
          <p>
            I had a good time and I <b>feel good</b>.
          </p>
          <button>
            <img src={cloudEmp} alt="cloud" />
          </button>
        </SearchResult>
        <SearchResult>
          <p>I had a good time and I feel good.</p>
          <button>
            <img src={cloudEmp} alt="cloud" />
          </button>
        </SearchResult>
        <SearchResult>
          <p>I had a good time and I feel good.</p>
          <button>
            <img src={cloudEmp} alt="cloud" />
          </button>
        </SearchResult>
      </SearchResults>
    </SearchResultBox>
  );
};

export default SearchResultsCard;
