import { ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  PBCardAlignStyled,
  PBCardItemStyled,
  PBCardTabStyled,
  PBCardWordAlignStyled,
} from "../../styles/personal/PersonalBottomCardStyled";
import PBCardData, { PBCardDataType } from "./personalData";
import { CloudEmp, CloudFull } from "../../assets/index";
import * as Api from "../../api";
import { useNavigate } from "react-router";

export interface PBCardItemType {
  userId: number;
  description: { expression: string[]; res: boolean };
  searchWord: string[];
  grammar: string[];
}

const Item = ({ searchId, subject, type }: any): JSX.Element => {
  const [cloud, setCloud] = useState(false);
  const [translate, setTranslate] = useState("");

  const handleTranslate = async () => {
    if (!translate) {
      try {
        const res = await Api.post("main/translate", {
          searchSentence: subject,
        });
        setTranslate(res.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      setTranslate("");
    }
  };

  const handleDelete = async (props: any, cloud: boolean) => {
    if (cloud) {
      if (window.confirm("삭제하시겠습니까")) {
        try {
          await Api.delete(`main/deleteSearch/${props}`);
          window.location.reload();
        } catch (err) {}
      }
    }
  };

  return (
    <PBCardItemStyled>
      <span onClick={handleTranslate}>{translate ? translate : subject}</span>
      <button
        onClick={() => {
          handleDelete(searchId, true);
        }}
      >
        <img src={cloud ? CloudEmp : CloudFull} alt="cloud" />
      </button>
    </PBCardItemStyled>
  );
};

const PersonalBottomCard = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [items, setItems] = useState<PBCardDataType>(PBCardData);

  const [cloud, setCloud] = useState(false);
  const [id, setId] = useState("");

  const tabList = ["Expressions", "Words"];
  const navigator = useNavigate();

  const tabClickHandler = (index: any) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const getPersonalData = async () => {
      const response = await Api.get(`main/getSearch`);
      if (response.status !== 200) {
      } else {
        setItems(response.data);
      }
    };
    const getId = async () => {
      const response = await Api.get("main/getSearch");
      response.data.forEach((data: any) => {
        setId(data.searchId);
      });
    };
    getId();
    getPersonalData();
  }, [cloud]);

  const wordsFiler = items.reduce(function (item: any[], current) {
    if (
      item.findIndex(({ searchWord }) => searchWord === current.searchWord) ===
      -1
    ) {
      item.push(current);
    }
    return item;
  }, []);

  // const tabContArr = [
  //   {
  //     tabTitle: (
  //       <li
  //         className={activeIndex === 0 ? "is-active" : ""}
  //         onClick={() => tabClickHandler(0)}
  //       >
  //         Expressions
  //       </li>
  //     ),
  //     tabCont: <div>{expressionItem()}</div>,
  //   },
  //   {
  //     tabTitle: (
  //       <li
  //         className={activeIndex === 1 ? "is-active" : ""}
  //         onClick={() => tabClickHandler(1)}
  //       >
  //         Words
  //       </li>
  //     ),
  //     tabCont: <div>{wordsItem()} </div>,
  //   },
  // ];

  return (
    <>
      <PBCardAlignStyled>
        <PBCardTabStyled>
          <ul className="tabs is-boxed">
            {tabList.map((tab, index) => (
              <li
                className={activeIndex === index ? "is-active" : ""}
                onClick={() => tabClickHandler(index)}
              >
                {tab}
              </li>
            ))}
          </ul>
          <ul>
            <button className="btn-go-search">
              <a href="/search">
                Go Search <ArrowRightOutlined />
              </a>
            </button>
          </ul>
        </PBCardTabStyled>
        {/* <div>{tabContArr[activeIndex].tabCont}</div> */}
        <PBCardWordAlignStyled>
          {activeIndex
            ? wordsFiler.map((res: any) => (
                <Item searchId={res.searchId} subject={res.searchWord} />
              ))
            : items.map((res: any) => (
                <Item searchId={res.searchId} subject={res.description} />
              ))}
        </PBCardWordAlignStyled>
      </PBCardAlignStyled>
    </>
  );
};

export default PersonalBottomCard;
