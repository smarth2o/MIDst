import { ArrowRightOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  DBCEmotionBtn,
  DBCGrammarBtn,
  DiaryBottomCard,
  DiaryBottomOpenCard,
} from "../../styles/diary/DiaryBottomCard";
import DiaryEmotion from "./DiaryEmotion";
import DiaryEmotionInfoModal from "./DiaryEmotionInfoModal";
import DiaryGrammarCheckCard from "./DiaryGrammarCheckCard";
import * as Api from "../../api";

type ClickHandler = (props: boolean) => (e: React.MouseEvent) => void;

const DiaryEmotionCard = (): JSX.Element => {
  const [isToggle, isSetToggle] = useState(false);
  const [modal, setModal] = useState(false);
  const [emotion, setEmotion] = useState("");
  const { detail } = useParams();
  const [description, setDescription] = useState();

  useEffect(() => {
    const getDetailPost = async () => {
      const response = await Api.get(`diaries/${detail}`);
      if (response.status !== 200) {
        console.log("연결실패");
      } else {
        setDescription(response.data.data.description);
        setEmotion(response.data.data.emotion);
      }
    };
    getDetailPost();
  }, [detail]);

  const ClickHandler: ClickHandler = (props) => (e) => {
    e.preventDefault();
    isSetToggle(!props);
    onPostEmotion();
    // if (isEdit) {
    // 백엔드로 연결하기
    // }
  };

  const onPostEmotion = async () => {
    const emotionsPost = await Api.post(`diaries/${detail}/emotions`, {
      description: description,
    });
    if (emotionsPost.status !== 200) {
      console.log(emotionsPost);
    } else {
      console.log("연결성공", description);
    }
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
          <div className="DBOC-bottom">
            {isToggle === true ? (
              <>
                <h1>{emotion}</h1>
              </>
            ) : null}
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
    </>
  );
};

export default DiaryBottom;
