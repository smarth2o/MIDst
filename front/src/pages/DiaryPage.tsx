import React from "react";
import DiaryBottom from "../components/diary/DiaryBottom";
import DiaryCreate from "../components/diary/DiaryCreate";
import { DiarySide } from "../components/diary/DiarySide";
import { DiaryCreateAlign } from "../styles/diary/DiaryCreate";
import {
  AllBackGround,
  DiaryAlign,
  DiaryMain,
} from "../styles/diary/DiaryCreatePage";

const DiaryPage = (): JSX.Element => {
  return (
    <div className="DiaryPage">
      <AllBackGround>
        <DiaryAlign>
          <DiarySide />
          <DiaryMain>
            <DiaryCreateAlign></DiaryCreateAlign>
            <DiaryBottom />
          </DiaryMain>
        </DiaryAlign>
      </AllBackGround>
    </div>
  );
};

export default DiaryPage;
