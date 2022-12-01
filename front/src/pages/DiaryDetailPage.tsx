import { useRecoilValue, useSetRecoilState } from "recoil";
import DiaryBottom from "../components/diary/DiaryBottom";
import DiaryDetail from "../components/diary/DiaryDetail";
import { DiarySide } from "../components/diary/DiarySide";
import { diaryState, DiaryTypes } from "../stores/DiaryAtom";
import {
  AllBackGroundStyled,
  DiaryAlignStyled,
  DiaryMainStyled,
} from "../styles/diary/DiaryCreatePage";

const DiaryDetailPage = (): JSX.Element => {
  const diarys = useRecoilValue<DiaryTypes[]>(diaryState);
  const setDiarys = useSetRecoilState<DiaryTypes[]>(diaryState);
  return (
    <div className="DiaryDetailPage">
      <AllBackGroundStyled>
        <DiaryAlignStyled>
          <DiarySide diarys={diarys} setDiarys={setDiarys} />
          <DiaryMainStyled>
            <DiaryDetail diarys={diarys} setDiarys={setDiarys} />
            <DiaryBottom />
          </DiaryMainStyled>
        </DiaryAlignStyled>
      </AllBackGroundStyled>
    </div>
  );
};

export default DiaryDetailPage;
