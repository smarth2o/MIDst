import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DiaryValueType } from "../../pages/DiaryPage";

import { diaryState, DiaryTypes } from "../../stores/DiaryAtom";
import { DiaryListAlign } from "../../styles/diary/DiarySide";
import DiaryItem from "./DiaryItem";
import * as Api from "../../api";
import { useRecoilState } from "recoil";

const DiaryList = (): JSX.Element => {
  const [diarys, setDiarys] = useRecoilState(diaryState);
  const diaryArray = [];
  const { detail } = useParams();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getDiaryData = async () => {
      const response = await Api.get(`diaries`);
      if (response.status !== 200) {
        console.log(response);
      } else {
        setDiarys(response.data.data);
        setCount(response.data.count);
      }
    };
    getDiaryData();
  }, [detail]);

  let n = diarys[0]?.id;

  const iter = diarys;

  for (let i = 0; i < Object.keys(diarys).length - 1; i++) {
    diaryArray[n] = iter[i];
    n++;
  }

  return (
    <>
      <DiaryListAlign>
        {diaryArray.map((diary: DiaryTypes) => {
          const { id, date, title, description } = diary;
          return (
            <Link key={id} to={`/diary/${id}`}>
              <DiaryItem
                key={id}
                id={id}
                date={date}
                title={title}
                description={description}
              />
            </Link>
          );
        })}
      </DiaryListAlign>
    </>
  );
};

export default DiaryList;
