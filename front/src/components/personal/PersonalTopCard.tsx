import React, { useState } from "react";
import {
  PTBtn,
  PTCalendar,
  PTCardAlign,
  PTCardContainer,
} from "../../styles/personal/PersonalTopCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ArrowRightOutlined } from "@ant-design/icons";

export const CalendarContainer = (): JSX.Element => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <PTCalendar>
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) =>
            date.toLocaleString("en", { day: "numeric" })
          }
        />
      </PTCalendar>
    </>
  );
};

export const PersonalTopCard = (): JSX.Element => {
  return (
    <>
      <PTCardContainer>
        <PTCardAlign>test1</PTCardAlign>
        <PTCardAlign>
          <CalendarContainer />
        </PTCardAlign>

        <PTCardAlign>
          <ul className="PTItem2">
            <li>
              <h3>
                Studied for 500 days
                <br />
                (17 days straight)
              </h3>
            </li>
            <li>
              <PTBtn>
                <button>
                  Check your attendance
                  <br /> by writing today’s journal
                  <ArrowRightOutlined />
                </button>
              </PTBtn>
            </li>
          </ul>
        </PTCardAlign>

        <PTCardAlign>
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
        </PTCardAlign>

        <PTCardAlign>
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
        </PTCardAlign>
      </PTCardContainer>
    </>
  );
};
