import dayjs from "dayjs";
import { useParams } from "react-router";
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
        <a href="/diary/diaryCreate">
          <CreateDiaryBtn>+</CreateDiaryBtn>
        </a>
      </DiaryDetailAlignStyled>

      <DiaryCreateAlign>{no}</DiaryCreateAlign>
    </>
  );
};

export default DiaryDetail;
