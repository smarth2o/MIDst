import { DiaryValueType } from "../../pages/DiaryPage";
import { DiaryTypes } from "../../stores/DiaryAtom";
import { CalendarAlign, DiarySideAlign } from "../../styles/diary/DiarySide";
import CalendarContainer from "../personal/CalendarContainer";

import DiaryList from "./DiaryList";

export const DiarySide = (): JSX.Element => {
  return (
    <>
      <DiarySideAlign>
        <CalendarAlign>
          <CalendarContainer />
        </CalendarAlign>
        <DiaryList />
      </DiarySideAlign>
    </>
  );
};
