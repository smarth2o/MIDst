import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import { diaryState, DiaryTypes } from "../../stores/DiaryAtom";
import { DiaryListAlign } from "../../styles/diary/DiarySide";

import DiaryItem from "./DiaryItem";

const DiaryList = (): JSX.Element => {
  const [diarys, setState] = useRecoilState(diaryState);

  return (
    <>
      <DiaryListAlign>
        {diarys.map((diary: DiaryTypes) => {
          const { id, title, date, description } = diary;
          return (
            <Link key={id} to={`/diary/${diary.id}`}>
              <DiaryItem
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
