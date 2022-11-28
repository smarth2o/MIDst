import {
  CalendarAlign,
  DiaryListAlign,
  DiarySideAlign,
} from "../../styles/diary/DiarySide";
import { CalendarContainer } from "../personal/PersonalTopCard";

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
