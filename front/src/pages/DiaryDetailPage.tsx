import React from "react";
import DiaryBottom from "../components/diary/DiaryBottom";
import DiaryCreate from "../components/diary/DiaryCreate";
import { DiarySide } from "../components/diary/DiarySide";
import {
  AllBackGroundStyled,
  DiaryAlignStyled,
  DiaryMainStyled,
} from "../styles/diary/DiaryCreatePage";

const DiaryDetailPage = (): JSX.Element => {
  return (
    <div className="DiaryDetailPage">
      <AllBackGroundStyled>
        <DiaryAlignStyled>
          <DiarySide />
          <DiaryMainStyled>
            <DiaryCreate />
            <DiaryBottom />
          </DiaryMainStyled>
        </DiaryAlignStyled>
      </AllBackGroundStyled>
    </div>
  );
};

export default DiaryDetailPage;
