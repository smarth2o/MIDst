import { DiaryEditCardalignStyled } from "../../styles/diary/DiaryEditCard";
import { DiaryPropsTypes } from "./DiaryDetailCard";

const DiaryEditCard = ({
  id,
  date,
  title,
  description,
  diarys,
  setDiarys,
}: DiaryPropsTypes): JSX.Element => {
  return (
    <>
      <DiaryEditCardalignStyled></DiaryEditCardalignStyled>
    </>
  );
};

export default DiaryEditCard;
