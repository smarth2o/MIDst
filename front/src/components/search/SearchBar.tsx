import {
  Search,
  SearchbarWrapper,
  SearchButton,
  SearchImg,
} from "../../styles/search/Search.styled";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import * as Api from "../../api";

// interface SearchData {
//   searchword: string;
//   title?: string;
//   name?: string;
// }

const SearchBar = (): JSX.Element => {
  const navigate = useNavigate();

  // const [search, setSearch] = useState<SearchData>({
  //   searchword: "",
  //   title: "",
  //   name: "",
  // });

  const [search, setSearch] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = event.target;
    // setSearch({ ...search, [name]: value });
    setSearch(event.target.value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(search);
    try {
      const res = await Api.get("main/showSearch", search);
      console.log(res.data);
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
        value={search}
        onChange={handleChange}
      ></Search>
      <SearchButton onClick={handleSubmit}>
        <SearchImg />
      </SearchButton>
    </SearchbarWrapper>
  );
};

export default SearchBar;
