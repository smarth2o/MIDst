import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  useState,
} from "react";
import { SetterOrUpdater, useRecoilState, useSetRecoilState } from "recoil";
import { diaryState, DiaryTypes } from "../../stores/DiaryAtom";
import {
  DiaryBtn,
  DiaryCreateAlign,
  DiaryForm,
} from "../../styles/diary/DiaryCreate";
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
  const [, setTitle] = useRecoilState(diaryState);

  const ClickHandler: ClickHandler = (props) => (e) => {
    e.preventDefault();
    setIsEdit(!props);
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
          {/* <DiaryEditCard
            id={id}
            date={date}
            title={title}
            description={description}
            diarys={diarys}
            setDiarys={setDiarys}
          /> */}
          <div>
            <DiaryForm onSubmit={onSubmitDiary}>
              <input
                maxLength={20}
                placeholder="Title"
                value={title}
                // onChange={(e) => { setTitle(e.target.value) }}
              />
              <br />
              <textarea
                placeholder="Write about your day..."
                value={description}
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
