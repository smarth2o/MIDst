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

export interface DiaryValueType {
  diarys: DiaryTypes[];
  setDiarys: SetterOrUpdater<DiaryTypes[]>;
}

const DiaryPage = (): JSX.Element => {
  const [diarys, setDiarys] = useRecoilState(diaryState);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getDiaryData = async () => {
      const response = await Api.get(`diaries`);
      if (response.status !== 200) {
        console.log(response);
      } else {
        setDiarys(response.data.data);
        setCount(response.data);
      }
    };
    getDiaryData();
  }, []);

  useEffect(() => {
    // 가장 최근 일기의 id값을 구해서
    // 'diary/id' 로 보내는 로직
  }, []);

  return (
    <AllBackGroundStyled>
      <DiaryAllAlign>
        <div className="content-cover">
          <div className="diary-align-styled">
            <DiaryAlignStyled>
              <div className="diary-content">
                <DiarySide />
                <DiaryMainStyled>
                  {/* <DiaryList setDiarys={setDiarys} diarys={diarys} /> */}
                  <Outlet context={{ diarys, setDiarys }} />
                  <DiaryBottom />
                </DiaryMainStyled>
              </div>
            </DiaryAlignStyled>
          </div>
        </div>
      </DiaryAllAlign>
    </AllBackGroundStyled>
  );
};

export default DiaryPage;
