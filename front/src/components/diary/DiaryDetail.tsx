import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DiaryCreateAlign } from "../../styles/diary/DiaryCreate";
import DiaryDetailCard from "./DiaryDetailCard";
import * as Api from "../../api";

const DiaryDetail = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const { detail } = useParams();

  useEffect(() => {
    const getDiaryDetail = async () => {
      const response = await Api.get(`diaries/${detail}`);
      if (response.status !== 200) {
      } else {
        setTitle(response.data.data.title);
        setId(response.data.data.id);
        setDescription(response.data.data.description);
      }
    };
    getDiaryDetail();
  }, [description]);

  return (
    <>
      <DiaryCreateAlign>
        <DiaryDetailCard
          id={id}
          title={title}
          description={description}
          date={date}
        />
      </DiaryCreateAlign>
    </>
  );
};

export default DiaryDetail;
