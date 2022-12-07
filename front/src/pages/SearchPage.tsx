import {
  SearchLayout,
  SearchPageLayout,
  SearchWrapper,
} from "../styles/Search.styled";
import FilterCard from "../components/FilterCard";
import SearchBar from "../components/SearchBar";
import SearchResultsCard from "../components/SearchResultsCard";

const SearchPage = (): JSX.Element => {
  return (
    <SearchPageLayout>
      <FilterCard />
      <SearchLayout>
        <SearchWrapper>
          <SearchBar />
        </SearchWrapper>
        <SearchResultsCard />
      </SearchLayout>
    </SearchPageLayout>
  );
};

export default SearchPage;
