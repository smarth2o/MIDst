import { DiaryValueType } from "../../pages/DiaryPage";
import { DiaryTypes } from "../../stores/DiaryAtom";
import { CalendarAlign, DiarySideAlign } from "../../styles/diary/DiarySide";
import CalendarContainer from "../personal/CalendarContainer";

import DiaryList from "./DiaryList";

export const DiarySide = ({
  diarys,
  setDiarys,
}: DiaryValueType): JSX.Element => {
  return (
    <>
      <DiarySideAlign>
        <CalendarAlign>
          <CalendarContainer />
        </CalendarAlign>
        <DiaryList diarys={diarys} setDiarys={setDiarys} />
      </DiarySideAlign>
    </>
  );
};
