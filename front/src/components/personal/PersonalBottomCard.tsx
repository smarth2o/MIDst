import { ArrowRightOutlined } from "@ant-design/icons";
import axios from "axios";
import { useState } from "react";
import {
  PBCardAlignStyled,
  PBCardItemStyled,
  PBCardTabStyled,
  PBCardWordAlignStyled,
  PBCWordItemStyled,
} from "../../styles/personal/PersonalBottomCardStyled";
import PBCardData, { PBCardDataType } from "./personalData";
import { CloudEmp, CloudFull } from "../../assets/index";

export interface PBCardItemType {
  user_id: number;
  expressions: { expression: string[]; res: boolean };
  words: string[];
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

  const onClick = () => {
    axios.get("./personData.tsx").then((res) => {
      setItems(res.data);
    });
  };

  const expressionItem = () => {
    const expressionsList = items.map((res) =>
      res.expressions.map((expression) => (
        <PBCardItemStyled onClick={() => setTranslate(!translate)}>
          {expression}
          <button onClick={() => setCloud(!cloud)}>
            <img src={cloud ? CloudFull : CloudEmp} alt="cloud" />
          </button>
        </PBCardItemStyled>
      ))
    );

    return <ul>{expressionsList}</ul>;
  };
  const wordsItem = () => {
    const wordsList = items.map((res) =>
      res.words.map((expression) => (
        <PBCWordItemStyled>
          {expression}
          <button onClick={() => setCloud(!cloud)}>
            <img src={cloud ? CloudFull : CloudEmp} alt="cloud" />
          </button>
        </PBCWordItemStyled>
      ))
    );

    return <PBCardWordAlignStyled>{wordsList}</PBCardWordAlignStyled>;
  };

  const grammarItem = () => {
    const grammarList = items.map((res) =>
      res.grammar.map((grammar) => (
        <PBCardItemStyled>
          {grammar}
          <button onClick={() => setCloud(!cloud)}>
            <img src={cloud ? CloudFull : CloudEmp} alt="cloud" />
          </button>
        </PBCardItemStyled>
      ))
    );

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
