import { ArrowRightOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DBCEmotionBtn,
  DBCGrammarBtn,
  DiaryBottomCard,
  DiaryBottomOpenCard,
} from "../../styles/diary/DiaryBottomCard";
import DiaryEmotionInfoModal from "./DiaryEmotionInfoModal";
import DiaryGrammarCheckCard from "./DiaryGrammarCheckCard";

type ClickHandler = (props: boolean) => (e: React.MouseEvent) => void;

const DiaryEmotionCard = (): JSX.Element => {
  const [isToggle, isSetToggle] = useState(false);
  const [modal, setModal] = useState(false);

  const ClickHandler: ClickHandler = (props) => (e) => {
    e.preventDefault();
    isSetToggle(!props);
    // if (isEdit) {
    // 백엔드로 연결하기
    // }
  };

  if (!isToggle) {
    return (
      <>
        <DiaryBottomCard>
          <h3>Emotion Recognition</h3>
          <DBCEmotionBtn onClick={ClickHandler(isToggle)}>
            <p>Start</p> <ArrowRightOutlined />
          </DBCEmotionBtn>
        </DiaryBottomCard>
      </>
    );
  } else {
    return (
      <>
        <DiaryBottomOpenCard>
          <div className="DBOC-top">
            <h3>Emotion Recognition</h3>
            <InfoCircleOutlined
              onClick={() => {
                setModal(!modal);
              }}
            />
            {modal === true ? <DiaryEmotionInfoModal /> : null}
          </div>
          <DBCEmotionBtn onClick={ClickHandler(isToggle)}>
            <p>Close</p> <ArrowRightOutlined />
          </DBCEmotionBtn>
        </DiaryBottomOpenCard>
      </>
    );
  }
};

const DiaryBottom = (): JSX.Element => {
  return (
    <>
      <DiaryEmotionCard />
      <DiaryGrammarCheckCard />
    </>
  );
};

export default DiaryBottom;
