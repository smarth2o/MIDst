import {
  SearchLayout,
  SearchPageLayout,
  SearchWrapper,
} from "../styles/Search.styled";
import FilterCard from "../components/search/FilterCard";
import SearchBar from "../components/search/SearchBar";
import SearchResultsCard from "../components/search/SearchResultsCard";

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
