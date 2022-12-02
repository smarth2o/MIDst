import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { SetterOrUpdater } from "recoil";
import DiaryBottom from "../components/diary/DiaryBottom";
import { DiarySide } from "../components/diary/DiarySide";
import { DiaryTypes } from "../stores/DiaryAtom";

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
  useEffect(() => {
    // 가장 최근 일기의 id값을 구해서
    // 'diary/id' 로 보내는 로직
  }, []);

  return (
    <AllBackGroundStyled>
      <DiaryAlignStyled>
        <DiarySide />
        <DiaryMainStyled>
          <Outlet />
          <DiaryBottom />
        </DiaryMainStyled>
      </DiaryAlignStyled>
    </AllBackGroundStyled>
  );
};

export default DiaryPage;
