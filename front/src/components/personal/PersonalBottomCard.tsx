import { ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  PBCardAlignStyled,
  PBCardItemStyled,
  PBCardTabStyled,
  PBCardWordAlignStyled,
  PBCWordItemStyled,
} from "../../styles/personal/PersonalBottomCardStyled";
import PBCardData, { PBCardDataType } from "./personalData";
import { CloudEmp, CloudFull } from "../../assets/index";
import * as Api from "../../api";
import { BackBtnStyled } from "../../styles/common/CommonBtn";
import { DiaryDetailBtn } from "../../styles/diary/DiaryDetailCard";
import { useNavigate } from "react-router";

export interface PBCardItemType {
  userId: number;
  description: { expression: string[]; res: boolean };
  searchWord: string[];
  grammar: string[];
}

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
        console.log(response);
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

  const handleDelete = async (props: any, cloud: boolean) => {
    console.log(cloud);
    if (cloud) {
      if (window.confirm("삭제하시겠습니까")) {
        try {
          const res = await Api.delete(`main/deleteSearch/${props}`);
          console.log("삭제 성공");
          navigator(`/personal`);
        } catch (err) {
          console.log("삭제 실패");
        }
      }
    }
  };

  const expressionItem = () => {
    const expression = items.map((res: any) => {
      // setSearchId(res.searchId);
      return (
        <>
          <PBCardItemStyled>
            {res.description}
            <button
              onClick={() => {
                handleDelete(res.searchId, true);
              }}
            >
              {cloud ? <img src={CloudEmp} /> : <img src={CloudFull} />}
            </button>
          </PBCardItemStyled>
        </>
      );
    });
    return <PBCardWordAlignStyled>{expression}</PBCardWordAlignStyled>;
  };
  const wordsItem = () => {
    const wordsFiler = items.reduce(function (item: any[], current) {
      if (
        item.findIndex(
          ({ searchWord }) => searchWord === current.searchWord
        ) === -1
      ) {
        item.push(current);
      }
      return item;
    }, []);
    const wordsItem = wordsFiler.map((res: any) => {
      return (
        <>
          <PBCardItemStyled>
            {res.searchWord}
            <button
              onClick={() => {
                handleDelete(res.searchId, true);
              }}
            >
              {cloud ? <img src={CloudEmp} /> : <img src={CloudFull} />}
            </button>
          </PBCardItemStyled>
        </>
      );
    });

    return <PBCardWordAlignStyled>{wordsItem}</PBCardWordAlignStyled>;
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tabClickHandler(0)}
        >
          Expressions
        </li>
      ),
      tabCont: <div>{expressionItem()}</div>,
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tabClickHandler(1)}
        >
          Words
        </li>
      ),
      tabCont: <div>{wordsItem()} </div>,
    },
  ];

  return (
    <>
      <PBCardAlignStyled>
        <div>
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
                <a href="/">
                  Go Search <ArrowRightOutlined />
                </a>
              </button>
            </ul>
          </PBCardTabStyled>

          <div>{tabContArr[activeIndex].tabCont}</div>
        </div>
      </PBCardAlignStyled>
    </>
  );
};

export default PersonalBottomCard;
