import { useState } from "react";
import { DiaryTypes } from "../../stores/DiaryAtom";
import { DiaryItemStyled } from "../../styles/diary/DiarySide";

const DiaryItem = ({ id, date, title }: DiaryTypes): JSX.Element => {
  return (
    <>
      <DiaryItemStyled>
        <b>{date}</b>
        <div>{title}</div>
      </DiaryItemStyled>
    </>
  );
};

export default DiaryItem;
