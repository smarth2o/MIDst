import {
  FilterBox,
  FilterWrapper,
  SearchLayout,
  SearchPageLayout,
  SearchWrapper,
  Suggestions,
  Suggest,
  Search,
  SearchResultBox,
  SearchResultSort,
  SearchResults,
  SearchResult,
} from "../styles/Search.styled";
import cloudEmp from "../assets/cloudEmp.png";
import arrowUp from "../assets/arrowUp.svg";
import arrowDown from "../assets/arrowDown.svg";
import search from "../assets/search.svg";

const SearchPage = (): JSX.Element => {
  return (
    <SearchPageLayout>
      <FilterWrapper>
        <h2>Filters</h2>
        <FilterBox>
          <h3>Media</h3>
          <img src={arrowUp} alt="arrowUp" />
          <ul>
            <li>
              <input type="checkbox"></input>Friends
            </li>
            <li>
              <input type="checkbox"></input>Harry Potter
            </li>
          </ul>
        </FilterBox>
        <FilterBox>
          <h3>Emotion</h3>
          <img src={arrowDown} alt="arrowDown" />
        </FilterBox>
      </FilterWrapper>
      <SearchLayout>
        <SearchWrapper>
          <Suggestions>
            <Suggest>
              <p>hello hello hello</p>
            </Suggest>
            <Suggest>
              <p>happy</p>
            </Suggest>
          </Suggestions>
          <Search>
            <img src={search} alt="search"></img>
            <p>Search for expressions or words you're curious about!</p>
          </Search>
        </SearchWrapper>
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
      </SearchLayout>
    </SearchPageLayout>
  );
};

export default SearchPage;
