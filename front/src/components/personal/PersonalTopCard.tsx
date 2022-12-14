import {
  PTBtnStyled,
  PTCardAlignStyled,
  PTCardContainerStyled,
} from "../../styles/personal/PersonalTopCard";
import "react-calendar/dist/Calendar.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import CalendarContainer from "./CalendarContainer";
import UserProfile from "./UserProfile";
import { useEffect, useState } from "react";
import * as Api from "../../api";

export const PersonalTopCard = (): JSX.Element => {
  const [expressionsCount, setExpressionCount] = useState(0);

  useEffect(() => {
    const getExpressionsCount = async () => {
      const response = await Api.get(`main/getCountSearch`);
      if (response.status !== 200) {
        console.log("갯수 저장 실패");
      } else {
        console.log("갯수 저장 성공 : ", response.data);
        setExpressionCount(response.data);
      }
    };
    getExpressionsCount();
  }, []);

  return (
    <>
      <PTCardContainerStyled>
        <PTCardAlignStyled>
          <UserProfile />
        </PTCardAlignStyled>
        <PTCardAlignStyled>
          <CalendarContainer />
        </PTCardAlignStyled>

        <PTCardAlignStyled>
          <ul className="PTItem2">
            <li>
              <h3>
                Studied for 500 days
                <br />
                (17 days straight)
              </h3>
            </li>
            <li>
              <PTBtnStyled>
                <button>
                  Check your attendance
                  <br /> by writing today’s journal
                  <ArrowRightOutlined />
                </button>
              </PTBtnStyled>
            </li>
          </ul>
        </PTCardAlignStyled>

        <PTCardAlignStyled>
          <ul className="card-align-ul">
            <li className="card-align-li">
              <h3>Search for {expressionsCount} expressions</h3>
              <li>
                <button className="btn-go-search">
                  <a href="/">
                    Saved Expressions <ArrowRightOutlined />
                  </a>
                </button>
              </li>
            </li>
            <li className="card-align-li">
              <h3>Search for 145 words</h3>
              <li>
                <button className="btn-go-search">
                  <a href="/">
                    Save Words <ArrowRightOutlined />
                  </a>
                </button>
              </li>
            </li>
          </ul>
        </PTCardAlignStyled>

        <PTCardAlignStyled>
          <ul className="card-align-ul">
            <li className="card-align-li">
              <h3>Search for 327 expressions</h3>
              <li>
                <button className="btn-go-search">
                  <a href="/">
                    Saved Expressions <ArrowRightOutlined />
                  </a>
                </button>
              </li>
            </li>
            <li className="card-align-li">
              <h3>Search for 145 words</h3>
              <li>
                <button className="btn-go-search">
                  <a href="/">
                    Save Words <ArrowRightOutlined />
                  </a>
                </button>
              </li>
            </li>
          </ul>
        </PTCardAlignStyled>
      </PTCardContainerStyled>
    </>
  );
};
