import {
  SearchWrapper,
  Suggest,
  Suggestions,
  Search,
  SearchbarWrapper,
  SearchButton,
  SearchIcon,
} from "../styles/Search.styled";

const SearchBar = (): JSX.Element => {
  return (
    <SearchWrapper>
      <Suggestions>
        <Suggest>
          <p>hello hello hello</p>
        </Suggest>
        <Suggest>
          <p>happy</p>
        </Suggest>
        {/* <Suggest></Suggest>
            <Suggest></Suggest> */}
      </Suggestions>
      <SearchbarWrapper>
        <Search
          type="text"
          placeholder="Search for expressions or words you're curious about!"
        ></Search>
        <SearchButton>
          <SearchIcon></SearchIcon>
        </SearchButton>
      </SearchbarWrapper>
    </SearchWrapper>
  );
};

export default SearchBar;
