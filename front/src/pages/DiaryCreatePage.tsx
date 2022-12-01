import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import DiaryBottom from "../components/diary/DiaryBottom";
import DiaryCreate from "../components/diary/DiaryCreate";
import { DiarySide } from "../components/diary/DiarySide";
import { diaryState, DiaryTypes } from "../stores/DiaryAtom";
import {
  AllBackGroundStyled,
  DiaryAlignStyled,
  DiaryMainStyled,
} from "../styles/diary/DiaryCreatePage";

const DiaryCreatePage = (): JSX.Element => {
  const diarys = useRecoilValue<DiaryTypes[]>(diaryState);
  const setDiarys = useSetRecoilState<DiaryTypes[]>(diaryState);
  return (
    <>
      <AllBackGroundStyled>
        <DiaryAlignStyled>
          <DiarySide diarys={diarys} setDiarys={setDiarys} />
          <DiaryMainStyled>
            <DiaryCreate />
            <DiaryBottom />
          </DiaryMainStyled>
        </DiaryAlignStyled>
      </AllBackGroundStyled>
    </>
  );
};

export default DiaryCreatePage;
