import {
  SearchLayout,
  SearchPageLayout,
  SearchWrapper,
} from "../styles/search/Search.styled";
import FilterCard from "../components/search/FilterCard";
import SearchBar from "../components/search/SearchBar";
import SearchResultsCard from "../components/search/SearchResultsCard";
// import { useState, useEffect } from "react";
// import SearchResults from "../stores/FilterAtom";
// import { useRecoilValue } from "recoil";

const SearchPage = (): JSX.Element => {
  // const viewResult = useRecoilValue(SearchResults);
  // const [isSearch, setIsSearch] = useState<boolean>(false);

  // useEffect(() => {
  //   const isSearching = viewResult[2].script ? true : false; // 마지막 대사 있으면 true
  //   setIsSearch(isSearching);
  // }, [viewResult]);

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
