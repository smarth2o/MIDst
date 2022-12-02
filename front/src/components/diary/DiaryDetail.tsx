import dayjs from "dayjs";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { SetterOrUpdater } from "recoil";
import { DiaryValueType } from "../../pages/DiaryPage";
import { DiaryTypes } from "../../stores/DiaryAtom";
import { DiaryCreateAlign } from "../../styles/diary/DiaryCreate";
import {
  CreateDiaryBtn,
  DiaryDetailAlignStyled,
} from "../../styles/diary/DiaryPage";

const DiaryDetail = ({ diarys, setDiarys }: DiaryValueType): JSX.Element => {
  const nowDate = dayjs();
  const { no } = useParams();

  return (
    <>
      <DiaryDetailAlignStyled>
        <Link to={"/diary/diaryCreate"}>
          <CreateDiaryBtn>+</CreateDiaryBtn>
        </Link>
      </DiaryDetailAlignStyled>

      <DiaryCreateAlign>{no}</DiaryCreateAlign>
    </>
  );
};

export default DiaryDetail;
