import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import { SetterOrUpdater, useRecoilState } from "recoil";
import DiaryBottom from "../components/diary/DiaryBottom";
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

  const [diarys, setDiarys] = useRecoilState(diaryState)


  useEffect(() => {
    // 가장 최근 일기의 id값을 구해서
    // 'diary/id' 로 보내는 로직
  }, []);

  return (
    <AllBackGroundStyled>
      <DiaryAlignStyled>
        <DiarySide />
        <DiaryMainStyled>
          <Outlet context={{diarys, setDiarys}}/>
          <DiaryBottom />
        </DiaryMainStyled>
      </DiaryAlignStyled>
    </AllBackGroundStyled>
  );
};

export default DiaryPage;
