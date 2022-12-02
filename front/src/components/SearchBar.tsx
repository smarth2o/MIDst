import {
  SearchWrapper,
  Suggest,
  Suggestions,
  Search,
  SearchbarWrapper,
  SearchButton,
  SearchIcon,
} from "../styles/Search.styled";
import { useNavigate } from "react-router";

const SearchBar = (): JSX.Element => {
  const navigate = useNavigate();

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
        <SearchButton type="submit" onClick={() => navigate("/search")}>
          <SearchIcon></SearchIcon>
        </SearchButton>
      </SearchbarWrapper>
    </SearchWrapper>
  );
};

export default SearchBar;
