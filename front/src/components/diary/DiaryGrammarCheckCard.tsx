import {
  ArrowRightOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  DBCGrammerBtn,
  DiaryBottomCard,
  DiaryBottomOpenCard,
} from "../../styles/diary/DiaryBottomCard";
import * as Api from "../../api";
import {
  DGCheckCardStyled,
  PBCardItemStyled,
  PBCardWordAlignStyled,
} from "../../styles/personal/PersonalBottomCardStyled";
import { CloudEmp, CloudFull } from "../../assets";

type ClickHandler = (props: boolean) => (e: React.MouseEvent) => void;

const DiaryGrammerCheckCard = (): JSX.Element => {
  const [isToggle, isSetToggle] = useState(false);
  const [before, setBefore] = useState([]);
  const [grammerBetter, setGrammerBetter] = useState("");
  const { detail } = useParams();
  const [description, setDescription] = useState();
  const [cloud, setCloud] = useState(false);

  useEffect(() => {
    const getDetailPost = async () => {
      try {
        const response = await Api.get(`diaries/${detail}`);
        setDescription(response.data.data.description);
      } catch {
        console.log("연결실패");
      }
    };
    getDetailPost();
  }, [detail, isToggle]);

  const ClickHandler: ClickHandler = (props) => (e) => {
    e.preventDefault();
    isSetToggle(!props);
    onPostGrammar();
  };

  const onPostGrammar = async () => {
    try {
      const res = await Api.post(`diaries/grammerCheck`, {
        description: description,
      });
      setBefore(res.data);
      console.log(res.data[0]);
    } catch {
      console.log("문법연결실패");
    }
  };

  if (!isToggle) {
    return (
      <>
        <DiaryBottomCard>
          <h3>Grammar Check !</h3>
          <DBCGrammerBtn onClick={ClickHandler(isToggle)}>
            <p>Start</p> <ArrowRightOutlined />
          </DBCGrammerBtn>
        </DiaryBottomCard>
      </>
    );
  } else {
    return (
      <>
        <DiaryBottomOpenCard>
          <div className="DBOC-top">
            <h3>Emotion Recognition</h3>

            {/* <InfoCircleOutlined
              onClick={() => {
                setModal(!modal);
              }}
            /> */}
            {/* {modal === true ? <DiaryEmotionInfoModa /> : null} */}
          </div>
          <div className="DBOC-bottom">
            {isToggle === true ? (
              <>
                {before.map((b: any) => {
                  console.log(b);
                  return (
                    <DGCheckCardStyled>
                      <ul className="grammer-result">
                        <li>
                          <CheckCircleOutlined />{" "}
                        </li>
                        <li>{b.before}</li>
                        <li className="gt">
                          <ArrowRightOutlined />
                        </li>
                        <li>{b.better}</li>
                      </ul>
                      <p>{b.description.en}</p>
                    </DGCheckCardStyled>
                  );
                })}
              </>
            ) : null}
          </div>

          <DBCGrammerBtn onClick={ClickHandler(isToggle)}>
            <p>Close</p> <ArrowRightOutlined />
          </DBCGrammerBtn>
        </DiaryBottomOpenCard>
      </>
    );
  }
};

export default DiaryGrammerCheckCard;
