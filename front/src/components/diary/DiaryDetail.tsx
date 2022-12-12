import { Link, useOutletContext, useParams } from "react-router-dom";
import { DiaryValueType } from "../../pages/DiaryPage";
import { DiaryTypes } from "../../stores/DiaryAtom";
import { DiaryCreateAlign } from "../../styles/diary/DiaryCreate";
import {
  CreateDiaryBtn,
  DiaryDetailAlignStyled,
} from "../../styles/diary/DiaryPage";
import DiaryDetailCard from "./DiaryDetailCard";

const DiaryDetail = (): JSX.Element => {
  const { diarys, setDiarys } = useOutletContext<DiaryValueType>();
  const { detail } = useParams();
  const currentIndex = Number(detail ?? 1);
  const currentDiary = diarys.find(
    (diary) => diary.id === currentIndex
  ) as DiaryTypes;

  return (
    <>
      <DiaryDetailAlignStyled>
        <Link to="/diary/create">
          <CreateDiaryBtn>+</CreateDiaryBtn>
        </Link>
      </DiaryDetailAlignStyled>

      <DiaryCreateAlign>
        <DiaryDetailCard
          id={currentIndex}
          title={currentDiary.title}
          description={currentDiary.description}
          date={currentDiary.date}
          diarys={diarys}
          setDiarys={setDiarys}
        />
      </DiaryCreateAlign>
    </>
  );
};

export default DiaryDetail;
