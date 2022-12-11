import { useState } from "react";
import { SetterOrUpdater } from "recoil";
import { diaryState, DiaryTypes } from "../../stores/DiaryAtom";
import { DiaryForm } from "../../styles/diary/DiaryCreate";
import {
  DiaryDetailBtn,
  DiaryDetailCardAlignStyled,
  DiaryDetailText,
} from "../../styles/diary/DiaryDetailCard";

export interface DiaryPropsTypes {
  id: number;
  title: string;
  description: string;
  date: string;
  diarys: DiaryTypes[];
  setDiarys: SetterOrUpdater<DiaryTypes[]>;
}

export interface booleanProps {
  toggle: boolean;
  toggleHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type ClickHandler = (props: boolean) => (e: React.MouseEvent) => void;

const onSubmitDiary = () => {
  alert("제출이 완료되었습니다.");
};

const DiaryDetailCard = ({
  id,
  date,
  title,
  description,
  diarys,
  setDiarys,
}: DiaryPropsTypes): JSX.Element => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [diaryTitle, setDiaryTitle] = useState(title);
  const [diaryDescription, setDiaryDescription] = useState(description);

  const ClickHandler: ClickHandler = (props) => (e) => {
    e.preventDefault();
    setIsEdit(!props);
    // if (isEdit) {
    // 백엔드로 연결하기
    // }
  };

  if (!isEdit) {
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
            <button className="gray-btn" onClick={ClickHandler(isEdit)}>
              EDIT
            </button>
          </DiaryDetailBtn>
        </DiaryDetailCardAlignStyled>
      </>
    );
  } else {
    return (
      <>
        <DiaryDetailCardAlignStyled>
          <div>
            <DiaryForm onSubmit={onSubmitDiary}>
              <input
                maxLength={20}
                placeholder="Title"
                value={diaryTitle}
                onChange={(e) => {
                  setDiaryTitle(e.target.value);
                }}
              />
              <br />
              <textarea
                placeholder="Write about your day..."
                value={diaryDescription}
                onChange={(e) => {
                  setDiaryDescription(e.target.value);
                }}
              />
            </DiaryForm>
          </div>
          <DiaryDetailBtn>
            <button className="gray-btn">DELETE</button>
            <button className="gray-btn" onClick={ClickHandler(isEdit)}>
              SAVE
            </button>
          </DiaryDetailBtn>
        </DiaryDetailCardAlignStyled>
      </>
    );
  }
};

export default DiaryDetailCard;
