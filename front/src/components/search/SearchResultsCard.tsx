import {
  SearchResultBox,
  SearchResultSort,
  SearchResult,
  Button,
} from "../../styles/search/Search.styled";
import { DownIcon, UpIcon } from "../../styles/search/Filter.styled";
import React, { useState } from "react";
import { CloudEmp, CloudFull } from "../../assets/index";
import { useRecoilValue } from "recoil";
import { Searchword, SearchResults } from "../../stores/SearchAtom";
import * as Api from "../../api";
import { useNavigate } from "react-router";

const SearchResultCard = ({ name, script }: any): JSX.Element => {
  const navigate = useNavigate();
  const [cloud, setCloud] = useState(false);
  const [translate, setTranslate] = useState("");
  const searchword = useRecoilValue(Searchword);

  const handleSaveSearch = async () => {
    let searchId = "";
    try {
      const my = await Api.get("main/getSearch");
      my.data.forEach((data: any) => {
        // console.log(data);
        if (data.description === script) {
          setCloud(true);
          searchId = data.searchId;
        }
      });
      // console.log("가져오기 성공");
      if (!cloud) {
        try {
          await Api.post("main/saveSearch", {
            searchword: searchword,
            searchSentence: script,
          });
          // console.log(res.data);
          // console.log("저장 성공");
        } catch (err) {
          // console.log("저장 실패");
        }
      } else {
        try {
          console.log(searchId);
          await Api.delete(`main/deleteSearch/${searchId}`);
          // console.log(res);
          // console.log("삭제 성공");
        } catch (err) {
          // console.log("삭제 실패");
        }
      }
      setCloud(!cloud);
    } catch (err) {
      // console.log("가져오기 실패");
      if (
        window.confirm("로그인 후 사용하실 수 있습니다. 로그인 하시겠습니까?")
      )
        navigate("/login");
    }
  };

  const handleTranslate = async () => {
    if (!translate) {
      try {
        const res = await Api.post("main/translate", {
          searchSentence: script,
        });
        setTranslate(res.data);
      } catch (err) {
        // console.log("번역 실패");
        // console.log(err);
      }
    } else {
      setTranslate("");
    }
  };

  return (
    <SearchResult>
      {
        <p onClick={handleTranslate}>
          {name} : {translate ? translate : script}
        </p>
      }
      <button onClick={handleSaveSearch}>
        <img src={cloud ? CloudFull : CloudEmp} alt="cloud" />
      </button>
    </SearchResult>
  );
};

const SearchResultsList = ({ title, sort }: any): JSX.Element => {
  const viewResult = useRecoilValue(SearchResults);
  const titleRelated = viewResult.filter((result) => result.title === title);

  const isNotRelated: boolean =
    Array.isArray(titleRelated) && titleRelated.length === 0;

  return (
    <>
      {!isNotRelated && (
        <>
          <p className="title">{title}</p>
          {sort
            ? titleRelated.map((result: any) => (
                <SearchResultCard
                  key={result.id}
                  name={result.name}
                  script={result.script}
                ></SearchResultCard>
              ))
            : titleRelated
                .reverse()
                .map((result: any) => (
                  <SearchResultCard
                    key={result.id}
                    name={result.name}
                    script={result.script}
                  ></SearchResultCard>
                ))}
        </>
      )}
    </>
  );
};

const SearchResultsCard = (): JSX.Element => {
  const searchword = useRecoilValue(Searchword);
  const [sortDesc, setSortDesc] = useState<boolean>(true);

  const handleSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSortDesc((prev) => !prev);
  };

  return (
    <SearchResultBox>
      <p>'{searchword}' search results</p>
      <SearchResultSort>
        <span>정확도 순</span>
        <Button onClick={handleSort}>
          {sortDesc ? <DownIcon /> : <UpIcon />}
        </Button>
      </SearchResultSort>
      <SearchResultsList title="Friends" sort={sortDesc}></SearchResultsList>
      <SearchResultsList
        title="Harry Potter"
        sort={sortDesc}
      ></SearchResultsList>
    </SearchResultBox>
  );
};

export default SearchResultsCard;
