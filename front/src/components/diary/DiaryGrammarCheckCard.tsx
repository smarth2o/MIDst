import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import {
  DBCGrammarBtn,
  DiaryBottomCard,
} from "../../styles/diary/DiaryBottomCard";

type ClickHandler = (props: boolean) => (e: React.MouseEvent) => void;

const DiaryGrammarCheckCard = (): JSX.Element => {
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
          <h3>Grammar Check !</h3>
          <DBCGrammarBtn onClick={ClickHandler(isToggle)}>
            <p>Start</p> <ArrowRightOutlined />
          </DBCGrammarBtn>
        </DiaryBottomCard>
      </>
    );
  } else {
    return (
      <>
        <DiaryBottomCard>
          <h3>Grammar Check !</h3>
          <DBCGrammarBtn onClick={ClickHandler(isToggle)}>
            <p>Close</p> <ArrowRightOutlined />
          </DBCGrammarBtn>
        </DiaryBottomCard>
      </>
    );
  }
};

export default DiaryGrammarCheckCard;
