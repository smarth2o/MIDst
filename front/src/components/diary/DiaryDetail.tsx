import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { DiaryValueType } from "../../pages/DiaryPage";
import { DiaryTypes } from "../../stores/DiaryAtom";
import { DiaryCreateAlign } from "../../styles/diary/DiaryCreate";
import {
  CreateDiaryBtn,
  DiaryDetailAlignStyled,
} from "../../styles/diary/DiaryPage";
import DiaryDetailCard, { DiaryPropsTypes } from "./DiaryDetailCard";
import * as Api from "../../api";

const DiaryDetail = (): JSX.Element => {
  const { diarys, setDiarys } = useOutletContext<DiaryValueType>();
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const { detail } = useParams();
  const currentIndex = Number(detail ?? 1);
  // const currentDiary = diarys.find(
  //   (diary) => diary.id === currentIndex
  // ) as DiaryTypes;

  {
    /**  const [diarys, setDiarys] = useState([]);
  const { detail } = useParams();
  const currentIndex = Number(detail ?? 1);
*/
  }
  useEffect(() => {
    const getDiaryDetail = async () => {
      const response = await Api.get(`diaries/${detail}`);
      if (response.status !== 200) {
      } else {
        setDiarys(response.data.data);
        setTitle(response.data.data.title);
        setId(response.data.data.id);
        setDescription(response.data.data.description);
        console.log("title", title);
      }
    };
    getDiaryDetail();
  }, []);

  return (
    <>
      <DiaryDetailAlignStyled>
        <Link to="/diary/create">
          <CreateDiaryBtn>+</CreateDiaryBtn>
        </Link>
      </DiaryDetailAlignStyled>

      <DiaryCreateAlign>
        <DiaryDetailCard
          id={id}
          title={title}
          description={description}
          date={date}
          diarys={diarys}
          setDiarys={setDiarys}
        />
      </DiaryCreateAlign>
    </>
  );
};

export default DiaryDetail;
