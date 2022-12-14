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
  const [translate, setTranslate] = useState(false);

  const tabList = ["Expressions", "Words", "Grammar"];

  const tabClickHandler = (index: any) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const getPersonalData = async () => {
      const response = await Api.get(`main/getSearch`);
      if (response.status !== 200) {
        console.log(response);
      } else {
        console.log(response.data);
        setItems(response.data);
      }
    };
    getPersonalData();
  }, []);
  const expressionItem = () => {
    const expression = items.map((res) => {
      return (
        <>
          <PBCardItemStyled onClick={() => setTranslate(!translate)}>
            {res.description}
            <button onClick={() => setCloud(!cloud)}>
              <img src={cloud ? CloudFull : CloudEmp} alt="cloud" />
            </button>
          </PBCardItemStyled>
        </>
      );
    });
    // res.description.map((expression) => (
    // console.log(expression)
    // <PBCardItemStyled onClick={() => setTranslate(!translate)}>
    //   {expression}
    //   <button onClick={() => setCloud(!cloud)}>
    //     <img src={cloud ? CloudFull : CloudEmp} alt="cloud" />
    //   </button>
    // </PBCardItemStyled>
    // ))
    return <PBCardWordAlignStyled>{expression}</PBCardWordAlignStyled>;
  };
  const wordsItem = () => {
    const wordsList = items.map((res) => (
      <PBCWordItemStyled>
        {res.searchWord}
        <button onClick={() => setCloud(!cloud)}>
          <img src={cloud ? CloudFull : CloudEmp} alt="cloud" />
        </button>
      </PBCWordItemStyled>
    ));

    return <PBCardWordAlignStyled>{wordsList}</PBCardWordAlignStyled>;
  };

  const grammarItem = () => {
    const grammarList = items.map((res) => (
      <PBCardItemStyled>
        {res.grammar}
        <button onClick={() => setCloud(!cloud)}>
          <img src={cloud ? CloudFull : CloudEmp} alt="cloud" />
        </button>
      </PBCardItemStyled>
    ));

    return <ul>{grammarList}</ul>;
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
    {
      tabTitle: (
        <li
          className={activeIndex === 2 ? "is-active" : ""}
          onClick={() => tabClickHandler(2)}
        >
          Grammar
        </li>
      ),
      tabCont: <div> {grammarItem()}</div>,
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
