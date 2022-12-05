import {
  SearchWrapper,
  Suggestions,
  Search,
  SearchbarWrapper,
  SearchButton,
  SearchIcon,
} from "../styles/Search.styled";
import { useNavigate } from "react-router";

interface SearchBarProps {
  children?: React.ReactNode;
  primary?: boolean;
}

const SearchBar = ({ children, primary }: SearchBarProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <SearchWrapper>
      {children && <Suggestions>{children}</Suggestions>}
      <SearchbarWrapper>
        <Search
          type="text"
          placeholder="Search for expressions or words you're curious about!"
        ></Search>
        <SearchButton type="submit" onClick={() => navigate("/search")}>
          <SearchIcon />
        </SearchButton>
      </SearchbarWrapper>
    </SearchWrapper>
  );
};

export default SearchBar;
