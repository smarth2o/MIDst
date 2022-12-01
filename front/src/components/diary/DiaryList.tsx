import { Link } from "react-router-dom";
import { DiaryValueType } from "../../pages/DiaryPage";
import { DiaryTypes } from "../../stores/DiaryAtom";
import { DiaryListAlign } from "../../styles/diary/DiarySide";

import DiaryItem from "./DiaryItem";

const DiaryList = ({ diarys }: DiaryValueType): JSX.Element => {
  return (
    <>
      <DiaryListAlign>
        {diarys.map((diary: DiaryTypes) => {
          const { id, title, date, description } = diary;
          return (
            <>
              <a href={`/diary/diaryDetail/${diary.id}`}>
                <DiaryItem
                  key={id}
                  id={id}
                  date={date}
                  title={title}
                  description={description}
                />
              </a>
            </>
          );
        })}
      </DiaryListAlign>
    </>
  );
};

export default DiaryList;
