import React from "react";
import DiaryBottom from "../components/diary/DiaryBottom";
import DiaryCreate from "../components/diary/DiaryCreate";
import { DiarySide } from "../components/diary/DiarySide";
import {
  AllBackGround,
  DiaryAlign,
  DiaryMain,
} from "../styles/diary/DiaryCreatePage";

const DiaryDetailPage = (): JSX.Element => {
  return (
    <div className="DiaryDetailPage">
      <AllBackGround>
        <DiaryAlign>
          <DiarySide />
          <DiaryMain>
            <DiaryCreate />
            <DiaryBottom />
          </DiaryMain>
        </DiaryAlign>
      </AllBackGround>
    </div>
  );
};

export default DiaryDetailPage;
