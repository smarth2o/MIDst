import {
  Search,
  SearchbarWrapper,
  SearchButton,
  SearchImg,
} from "../../styles/search/Search.styled";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as Api from "../../api";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { Searchword, SearchResults } from "../../stores/SearchAtom";

const SearchBar = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchword, setSearchword] = useState("");
  const setSearchWord = useSetRecoilState(Searchword);
  const setResults = useSetRecoilState(SearchResults);
  const resetResults = useResetRecoilState(SearchResults);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchword(event.target.value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      resetResults();
      const res = await Api.get(`main/showSearch/${searchword}`);

      let results = res.data;
      results = String(results).split("(");

      for (var result of results) {
        result = String(result);
        // console.log(result);

        let id = result.split(")")[0];
        let title = result.split(")")[1];
        title = String(title).split("-")[0];
        title = title.trim();
        let name = result.split("-")[1];
        name = String(name).split(":")[0];
        name = name.trim();
        let script = result.split(":")[1];
        script = String(script).slice(0, String(script).length - 5);
        script = script.trim();

        const selectedName = document.querySelectorAll(
          'input[name="name"]:checked'
        );

        selectedName.forEach((el) => {
          console.log(el);
          // if (el.value === name) {
          // }
        });

        // useEffect(() => {
        //   const titleresult = results.filter((result) =>
        //     titleFilter.includes(result.title)
        //   );
        //   const nameresult = results.filter((result) =>
        //     nameFilter.includes(result.name)
        //   );
        //   let searchresults = titleresult.concat(nameresult);
        //   searchresults = searchresults.filter(
        //     (item, pos) => searchresults.indexOf(item) === pos
        //   );
        //   setResults(searchresults);
        // }, [nameFilter, results, setResults, titleFilter]);

        setResults((prev) => [
          ...prev,
          {
            id: Number(id),
            title: String(title),
            name: String(name),
            script: String(script),
          },
        ]);
      }
      setSearchWord(searchword); // search results
      console.log("검색 성공");
      navigate("/search");
    } catch (err) {
      console.log("검색 실패");
      console.error(err);
    }
  };

  return (
    <SearchbarWrapper>
      <Search
        type="text"
        name="searchword"
        placeholder="Search for expressions or words you're curious about!"
        value={searchword}
        onChange={handleChange}
      ></Search>
      {searchword ? (
        <SearchButton onClick={handleSubmit}>
          <SearchImg />
        </SearchButton>
      ) : (
        <SearchButton onClick={handleSubmit} disabled>
          <SearchImg />
        </SearchButton>
      )}
    </SearchbarWrapper>
  );
};

export default SearchBar;
