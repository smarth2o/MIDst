import { ArrowRightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
  PBCardAlign,
  PBCardItemStyled,
  PBCardTab,
} from "../../styles/personal/PersonalBottomCardStyled";
import PBCardData from "./personalData";

export interface PBCardItemType {
  user_id: number;
  expressions: string[];
  words: string[];
  grammar: string[];
}

const PBCardItem = ({ expressions }: PBCardItemType): JSX.Element => {
  return (
    <>
      <PBCardItemStyled>{expressions}</PBCardItemStyled>
    </>
  );
};

const PersonalBottomCard = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expressions, setExpressions] = useState<string>(PBCardData);

  const tabClickHandler = (index: any) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    fetch("./personalData.tsx").then((res) => console.log(res));
  }, []);

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
      tabCont: <div>{/* <PBCardItem key={1} expressions={"test"} /> */}</div>,
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
      tabCont: <div> 탭2 내용 </div>,
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
      tabCont: <div> 탭3 내용 </div>,
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
