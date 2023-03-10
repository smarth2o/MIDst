import { ArrowRightOutlined } from "@ant-design/icons";
import axios from "axios";
import { useState } from "react";
import {
  PBCardAlign,
  PBCardItemStyled,
  PBCardTab,
} from "../../styles/personal/PersonalBottomCardStyled";
import PBCardData, { PBCardDataType } from "./personalData";

export interface PBCardItemType {
  user_id: number;
  expressions: string[];
  words: string[];
  grammar: string[];
}


const PBCExpressionItem = ({ expressions, user_id }: PBCardItemType) => {

  return <>{expressions}</>;
};

const PBCWordItem = ({words}:PBCardItemType)=>{
  return <>{words}</>
}

const PersonalBottomCard = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expressions, setExpressions] = useState<PBCardDataType>(PBCardData);
  const [words, setWords] = useState<PBCardDataType>(PBCardData);
  const [grammar, setGrammar] = useState<PBCardDataType>(PBCardData);

  const tabClickHandler = (index: any) => {
    setActiveIndex(index);
  };

  const onClick = () => {
    axios.get("./personData.tsx").then((res: any) => {
      setExpressions(res.data);
    });
  };
  const expressionItem = () => {
    const expressionsList = expressions.map((res: any) => (
      <PBCExpressionItem
        expressions={res.expressions}
        user_id={res.user_id}
        words={res.words}
        grammar={res.grammar}
        key={res.user_id}
      />
    ));

    return (
      <ul>
        <PBCardItemStyled>{expressionsList}</PBCardItemStyled>
      </ul>
    );
  };
  const wordsItem = ()=>{
    const wordsList = words.map((res:any)=>(
      <PBCWordItem
      expressions={res.expressions}
      user_id={res.user_id}
      words={res.words}
      grammar={res.grammar}
      />
    ))
    return (
      <ul>
        <PBCardItemStyled>{wordsList}</PBCardItemStyled>
      </ul>
    );
  }


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
      tabCont: <div> ???3 ?????? </div>,
    },
  ];

  return (
    <>
      <PBCardAlign>
        <div>
          <PBCardTab>
            <ul className="tabs is-boxed">
              {tabContArr.map((section, index) => {
                return section.tabTitle;
              })}
            </ul>
            <ul>
              <button className="btn-go-search">
                <a href="/">
                  Go Search <ArrowRightOutlined />
                </a>
              </button>
            </ul>
          </PBCardTab>

          <div>{tabContArr[activeIndex].tabCont}</div>
        </div>
      </PBCardAlign>
    </>
  );
};

export default PersonalBottomCard;
