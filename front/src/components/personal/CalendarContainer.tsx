import { useState } from "react";
import { Calendar } from "react-calendar";
import { PTCalendarStyled } from "../../styles/personal/PersonalTopCard";

const CalendarContainer = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <PTCalendarStyled>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) =>
            date.toLocaleString("en", { day: "numeric" })
          }
        />
      </PTCalendarStyled>
    </>
  );
};

export default CalendarContainer;
