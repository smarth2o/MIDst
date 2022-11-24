import React from "react";
import DiaryCreate from "../components/diary/DiaryCreate";
import { DiarySide } from "../components/diary/DiarySide";
import { AllBackGround, DiaryAlign } from "../styles/diary/DiaryCreatePage";

const DiaryCreatePage = (): JSX.Element => {
  return (
    <>
      <AllBackGround>
        <DiaryAlign>
          <DiarySide />
          <DiaryCreate />
        </DiaryAlign>
      </AllBackGround>
    </>
  );
};

export default DiaryCreatePage;
