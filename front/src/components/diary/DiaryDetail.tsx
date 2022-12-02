import { useEffect } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { DiaryValueType } from "../../pages/DiaryPage";
import { DiaryTypes } from "../../stores/DiaryAtom";
import { DiaryCreateAlign } from "../../styles/diary/DiaryCreate";
import {
  CreateDiaryBtn,
  DiaryDetailAlignStyled,
} from "../../styles/diary/DiaryPage";

const DiaryDetail = (): JSX.Element => {

  const {diarys, setDiarys} = useOutletContext<DiaryValueType>();
  const { detail } =useParams();
  const currentIndex =  Number(detail ?? 1);
  const currentDiary = diarys.find((diary)=> diary.id === currentIndex)

console.log("다이어리내용",currentDiary) 
console.log("떠야하는 글 넘버",currentIndex)
console.log("URL 넘버",detail)

  return (
    <>
      <DiaryDetailAlignStyled>
        <Link to="/diary/create">
          <CreateDiaryBtn>+</CreateDiaryBtn>
        </Link>
      </DiaryDetailAlignStyled>

      {/* <DiaryCreateAlign><DiaryDetailCard id={currentIndex} title={currentDiary.title}/></DiaryCreateAlign> */}
    </>
  );
};

export default DiaryDetail;
