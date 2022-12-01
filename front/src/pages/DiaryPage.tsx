import React from "react";
import DiaryBottom from "../components/diary/DiaryBottom";
import DiaryDetail from "../components/diary/DiaryDetail";
import { DiarySide } from "../components/diary/DiarySide";

import {
  AllBackGroundStyled,
  DiaryAlignStyled,
  DiaryMainStyled,
} from "../styles/diary/DiaryCreatePage";

const DiaryPage = (): JSX.Element => {
  return (
    <AllBackGroundStyled>
      <DiaryAlignStyled>
        <DiarySide />
        <DiaryMainStyled>
          <DiaryDetail />
          <DiaryBottom />
        </DiaryMainStyled>
      </DiaryAlignStyled>
    </AllBackGroundStyled>
  );
};

export default DiaryPage;
