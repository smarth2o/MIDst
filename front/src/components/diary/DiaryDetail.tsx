import { DiaryCreateAlign } from "../../styles/diary/DiaryCreate";
import {
  CreateDiaryBtn,
  DiaryDetailAlignStyled,
} from "../../styles/diary/DiaryPage";

const DiaryDetail = (): JSX.Element => {
  return (
    <>
      <DiaryDetailAlignStyled>
        <a href="/diary/diaryCreate">
          <CreateDiaryBtn>+</CreateDiaryBtn>
        </a>
      </DiaryDetailAlignStyled>

      <DiaryCreateAlign></DiaryCreateAlign>
    </>
  );
};

export default DiaryDetail;
