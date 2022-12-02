import React, { useState } from "react";
import {
  PTBtnStyled,
  PTCalendarStyled,
  PTCardAlignStyled,
  PTCardContainerStyled,
} from "../../styles/personal/PersonalTopCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ArrowRightOutlined } from "@ant-design/icons";

export const CalendarContainer = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <PTCalendarStyled>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) =>
            date.toLocaleString("en", { day: "numeric" })
          }
        />
      </PTCalendarStyled>
    </>
  );
};

export const PersonalTopCard = (): JSX.Element => {
  return (
    <>
      <PTCardContainerStyled>
        <PTCardAlignStyled>test1</PTCardAlignStyled>
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
