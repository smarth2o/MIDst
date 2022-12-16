import {
  Search,
  SearchbarWrapper,
  SearchButton,
  SearchImg,
} from "../../styles/search/Search.styled";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as Api from "../../api";
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { Searchword, SearchResults } from "../../stores/SearchAtom";
import { ShowState } from "../../stores/FilterAtom";

const SearchBar = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchword, setSearchword] = useState("");
  const setSearchWord = useSetRecoilState(Searchword);
  const setResults = useSetRecoilState(SearchResults);
  const resetResults = useResetRecoilState(SearchResults);
  const show = useRecoilValue(ShowState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchword(event.target.value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    let friendsList: any[] = [];
    let harryList: any[] = [];
    let friends = false;
    let harry = false;
    const friendsNames: any[] = [];
    const harryNames: any[] = [];

    const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
      "input[type=checkbox]"
    );
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        if (checkbox.name === "name" && checkbox.id === "Friends") {
          friendsList.push(checkbox.value);
          friendsNames.push(checkbox.value);
        } else if (checkbox.name === "name" && checkbox.id === "Harry") {
          harryList.push(checkbox.value);
          harryNames.push(checkbox.value);
        } else if (checkbox.name === "title" && checkbox.id === "Friends") {
          friends = true;
        } else if (checkbox.name === "title" && checkbox.id === "Harry") {
          harry = true;
        }
      } else if (checkbox.name === "name" && checkbox.id === "Friends") {
        friendsNames.push(checkbox.value);
      } else if (checkbox.name === "name" && checkbox.id === "Harry") {
        harryNames.push(checkbox.value);
      }
    });

    try {
      resetResults();
      const res = await Api.get(`main/showSearch/${searchword}`);

      let results = res.data;
      results = String(results).split("(");

      for (var result of results) {
        result = String(result);

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

        if (
          !show ||
          (friendsList.length === 0 &&
            harryList.length === 0 &&
            !harry &&
            !friends) ||
          (friendsList.length === 6 &&
            harryList.length === 7 &&
            harry &&
            friends) ||
          (title === "Harry Potter" && !harry && harryList.includes(name)) ||
          (title === "Friends" && !friends && friendsList.includes(name)) ||
          (title === "Harry Potter" &&
            harry &&
            (harryList.includes(name) || !harryNames.includes(name))) ||
          (title === "Friends" &&
            friends &&
            (friendsList.includes(name) || !friendsNames.includes(name)))
        ) {
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
      }

      setSearchWord(searchword); // search results
      // console.log("검색 성공");
      navigate("/search");
    } catch (err) {
      // console.log("검색 실패");
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
