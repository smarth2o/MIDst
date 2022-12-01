import { SearchLayout, SearchPageLayout } from "../styles/Search.styled";
import FilterCard from "../components/FilterCard";
import SearchBar from "../components/SearchBar";
import SearchResultsCard from "../components/SearchResultsCard";

const SearchPage = (): JSX.Element => {
  return (
    <SearchPageLayout>
      <FilterCard></FilterCard>
      <SearchLayout>
        <SearchBar></SearchBar>
        <SearchResultsCard></SearchResultsCard>
      </SearchLayout>
    </SearchPageLayout>
  );
};

export default SearchPage;
