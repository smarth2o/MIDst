import React from "react";
import DiaryBottom from "../components/diary/DiaryBottom";
import DiaryCreate from "../components/diary/DiaryCreate";
import { DiarySide } from "../components/diary/DiarySide";
import {
  AllBackGroundStyled,
  DiaryAlignStyled,
  DiaryMainStyled,
} from "../styles/diary/DiaryCreatePage";

const DiaryCreatePage = (): JSX.Element => {
  return (
    <>
      <DiaryAlignStyled>
        <DiarySide />
        <DiaryMainStyled>
          <DiaryCreate />
          <DiaryBottom />
        </DiaryMainStyled>
      </DiaryAlignStyled>
    </>
  );
};

export default DiaryCreatePage;
