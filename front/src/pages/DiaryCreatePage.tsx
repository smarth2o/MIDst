import React from "react";
import DiaryBottom from "../components/diary/DiaryBottom";
import DiaryCreate from "../components/diary/DiaryCreate";
import { DiarySide } from "../components/diary/DiarySide";
import {
  AllBackGround,
  DiaryAlign,
  DiaryMain,
} from "../styles/diary/DiaryCreatePage";

const DiaryCreatePage = (): JSX.Element => {
  return (
    <>
      <AllBackGround>
        <DiaryAlign>
          <DiarySide />
          <DiaryMain>
            <DiaryCreate />
            <DiaryBottom />
          </DiaryMain>
        </DiaryAlign>
      </AllBackGround>
    </>
  );
};

export default DiaryCreatePage;
