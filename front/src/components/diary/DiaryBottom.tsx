import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  DBCEmotionBtn,
  DBCGrammarBtn,
  DiaryBottomCard,
} from "../../styles/diary/DiaryBottomCard";

const DiaryEmotionCard = (): JSX.Element => {
  return (
    <>
      <DiaryBottomCard>
        <h3>Emotion Recognition</h3>

        <DBCEmotionBtn>
          <p>Start</p> <ArrowRightOutlined />
        </DBCEmotionBtn>
      </DiaryBottomCard>
    </>
  );
};

const DiaryGrammarCheckCard = (): JSX.Element => {
  return (
    <>
      <DiaryBottomCard>
        <h3>Grammar Check !</h3>
        <DBCGrammarBtn>
          <p>Start</p> <ArrowRightOutlined />
        </DBCGrammarBtn>
      </DiaryBottomCard>
    </>
  );
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
