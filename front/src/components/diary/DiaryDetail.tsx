import { Link } from "react-router-dom";
import { DiaryCreateAlign } from "../../styles/diary/DiaryCreate";
import {
  CreateDiaryBtn,
  DiaryDetailAlignStyled,
} from "../../styles/diary/DiaryPage";

const DiaryDetail = (): JSX.Element => {
  return (
    <>
      <DiaryDetailAlignStyled>
        <Link to="/diary/create">
          <CreateDiaryBtn>+</CreateDiaryBtn>
        </Link>
      </DiaryDetailAlignStyled>

      <DiaryCreateAlign></DiaryCreateAlign>
    </>
  );
};

export default DiaryDetail;
