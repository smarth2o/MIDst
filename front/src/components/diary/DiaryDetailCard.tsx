import { useState } from "react";
import { SetterOrUpdater } from "recoil";
import { DiaryTypes } from "../../stores/DiaryAtom";
import {
  DiaryDetailBtn,
  DiaryDetailCardAlignStyled,
  DiaryDetailText,
} from "../../styles/diary/DiaryDetailCard";
import DiaryEditCard from "./DiaryEditCard";

export interface DiaryPropsTypes {
  id: number;
  title: string;
  description: string;
  date: string;
  diarys: DiaryTypes[];
  setDiarys: SetterOrUpdater<DiaryTypes[]>;
}

//const onClickEdit = (props) => {};

const DiaryDetailCard = ({
  id,
  date,
  title,
  description,
  diarys,
  setDiarys,
}: DiaryPropsTypes): JSX.Element => {
  const [isEdit, setIsEdit] = useState(false);
  //if (isEdit) {
  return (
    <>
      <DiaryDetailCardAlignStyled>
        <DiaryDetailText>
          <p>{date}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </DiaryDetailText>

        <DiaryDetailBtn>
          <button className="gray-btn">DELETE</button>
          <button className="gray-btn">EDIT</button>
        </DiaryDetailBtn>
      </DiaryDetailCardAlignStyled>
    </>
  );
  // } else {
  //   return (
  //     <>
  //       <DiaryDetailCardAlignStyled>
  //         <DiaryEditCard></DiaryEditCard>

  //         <DiaryDetailBtn>
  //           <button className="gray-btn">DELETE</button>
  //           <button className="gray-btn"onClick={onClickEdit(isEdit,)}>SAVE</button>
  //         </DiaryDetailBtn>
  //       </DiaryDetailCardAlignStyled>
  //       ;
  //     </>
  //   );
  //}
};

export default DiaryDetailCard;
