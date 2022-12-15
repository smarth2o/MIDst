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

  useEffect(() => {
    const getDiaryData = async () => {
      const response = await Api.get(`diaries`);
      if (response.status !== 200) {
        console.log(response);
      } else {
        setDiarys(response.data.data);
        console.log(diarys);
      }
    };
    getDiaryData();
  }, []);

  useEffect(() => {
    const getDiaryDetail = async () => {
      const response = await Api.get(`diaries/${detail}`);
      if (response.status !== 200) {
      } else {
        setDiarys(response.data.data);
        setTitle(response.data.data.title);
        setId(response.data.data.id);
        setDescription(response.data.data.description);
      }
    };
    getDiaryDetail();
  }, []);

  return (
    <>
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
