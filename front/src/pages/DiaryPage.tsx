import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { SetterOrUpdater, useRecoilState } from "recoil";
import DiaryBottom from "../components/diary/DiaryBottom";
import { DiarySide } from "../components/diary/DiarySide";
import { diaryState, DiaryTypes } from "../stores/DiaryAtom";
import * as Api from "../api";

import {
  AllBackGroundStyled,
  DiaryAlignStyled,
  DiaryAllAlign,
  DiaryMainStyled,
} from "../styles/diary/DiaryCreatePage";
import {
  CreateDiaryBtn,
  DiaryDetailAlignStyled,
} from "../styles/diary/DiaryPage";
import { Link } from "react-router-dom";
import DiaryGrammerCheckCard from "../components/diary/DiaryGrammarCheckCard";

export interface DiaryValueType {
  diarys: DiaryTypes[];
  setDiarys: SetterOrUpdater<DiaryTypes[]>;
}

const DiaryPage = (): JSX.Element => {
  const [diarys, setDiarys] = useRecoilState(diaryState);

  const [check, setCheck] = useState(-1);

  useEffect(() => {
    const getDiaryData = async () => {
      const response = await Api.get(`diaries`);
      if (response.status !== 200) {
      } else {
        delete response.data.data.count;
        const diaries = Object.values(response.data.data);
        setDiarys(diaries as DiaryTypes[]);

        setCheck(response.data.data);
      }
    };
    getDiaryData();
  }, [setDiarys]);

  return (
    <AllBackGroundStyled>
      <DiaryDetailAlignStyled>
        <Link to="/diary/create">
          <CreateDiaryBtn>+</CreateDiaryBtn>
        </Link>
      </DiaryDetailAlignStyled>
      <DiaryAllAlign>
        <div className="diary-align-styled">
          <DiaryAlignStyled>
            <div className="diary-content">
              <DiarySide />
              <DiaryMainStyled>
                <Outlet context={{ diarys, setDiarys }} />
                <DiaryBottom />
                <DiaryGrammerCheckCard />
              </DiaryMainStyled>
            </div>
          </DiaryAlignStyled>
        </div>
      </DiaryAllAlign>
    </AllBackGroundStyled>
  );
};

export default DiaryPage;
