import {
  CalendarAlign,
  DiaryListAlign,
  DiarySideAlign,
} from "../../styles/diary/DiarySide";
import CalendarContainer from "../personal/CalendarContainer";

const DiaryList = (): JSX.Element => {
  return (
    <>
      <DiaryListAlign></DiaryListAlign>
    </>
  );
};

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
