import React from "react";
import DiaryBottom from "../components/diary/DiaryBottom";
import { DiarySide } from "../components/diary/DiarySide";
import { DiaryCreateAlign } from "../styles/diary/DiaryCreate";
import {
  AllBackGroundStyled,
  DiaryAlignStyled,
  DiaryMainStyled,
} from "../styles/diary/DiaryCreatePage";
import { CreateDiaryBtn } from "../styles/diary/DiaryPage";

const DiaryPage = (): JSX.Element => {
  return (
    <div className="DiaryPage">
      <AllBackGroundStyled>
        <DiaryAlignStyled>
          <DiarySide />

          <DiaryMainStyled>
            <DiaryCreateAlign></DiaryCreateAlign>
            <DiaryBottom />
          </DiaryMainStyled>
          <CreateDiaryBtn>
            <a href="/diary/diaryCreate">+</a>
          </CreateDiaryBtn>
        </DiaryAlignStyled>
      </AllBackGroundStyled>
    </div>
  );
};

export default DiaryPage;
