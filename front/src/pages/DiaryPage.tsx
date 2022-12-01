import React from "react";
import {
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import DiaryBottom from "../components/diary/DiaryBottom";
import DiaryDetail from "../components/diary/DiaryDetail";
import { DiarySide } from "../components/diary/DiarySide";
import { diaryState, DiaryTypes } from "../stores/DiaryAtom";

import {
  AllBackGroundStyled,
  DiaryAlignStyled,
  DiaryMainStyled,
} from "../styles/diary/DiaryCreatePage";

export interface DiaryValueType {
  diarys: DiaryTypes[];
  setDiarys: SetterOrUpdater<DiaryTypes[]>;
}

const DiaryPage = (): JSX.Element => {
  const diarys = useRecoilValue<DiaryTypes[]>(diaryState);
  const setDiarys = useSetRecoilState<DiaryTypes[]>(diaryState);
  return (
    <AllBackGroundStyled>
      <DiaryAlignStyled>
        <DiarySide diarys={diarys} setDiarys={setDiarys} />
        <DiaryMainStyled>
          <DiaryDetail diarys={diarys} setDiarys={setDiarys} />
          <DiaryBottom />
        </DiaryMainStyled>
      </DiaryAlignStyled>
    </AllBackGroundStyled>
  );
};

export default DiaryPage;
