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
import { Link } from "react-router-dom";
import { ROUTES } from "../../enum/routes";
import PBCardData, { PBCardDataType } from "./personalData";

export const PersonalTopCard = (): JSX.Element => {
  const [expressionsCount, setExpressionCount] = useState(0);
  const [diaryCount, setDiaryCount] = useState(0);
  const [items, setItems] = useState<PBCardDataType>(PBCardData);
  useEffect(() => {
    const getExpressionsCount = async () => {
      const response = await Api.get(`main/getCountSearch`);
      if (response.status !== 200) {
      } else {
        setExpressionCount(response.data);
      }
    };
    const getDiaryCount = async () => {
      const response = await Api.get(`diaries`);
      if (response.status !== 200) {
      } else {
        setDiaryCount(response.data.data.count);
      }
    };
    getExpressionsCount();
    getDiaryCount();
  }, []);

  useEffect(() => {
    const getPersonalData = async () => {
      const response = await Api.get(`main/getSearch`);
      if (response.status !== 200) {
      } else {
        setItems(response.data);
      }
    };
    getPersonalData();
  }, []);

  const wordsFiler = items.reduce(function (item: any[], current) {
    if (
      item.findIndex(({ searchWord }) => searchWord === current.searchWord) ===
      -1
    ) {
      item.push(current);
    }
    return item;
  }, []);

  const wordcount = wordsFiler.length;

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
                Write an English diary,
                <br /> study expressions,
                <br /> and study English steadily.
              </h3>
            </li>
            <li>
              <PTBtnStyled>
                <Link to={ROUTES.DIARY.ROOT}>
                  <button>
                    Check your attendance
                    <br /> by writing today’s journal
                    <ArrowRightOutlined />
                  </button>
                </Link>
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
              <h3>Search for {wordcount} words</h3>
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
              <h3>Wrote {diaryCount} diaries</h3>
              <li>
                <button className="btn-go-search">
                  <a href="/diary">
                    Saved Expressions <ArrowRightOutlined />
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
