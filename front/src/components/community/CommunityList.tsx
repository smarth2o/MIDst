import {
  ClockCircleOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import {
  CommunityCardAlignStyled,
  CommunityInfo,
  CommunityListAlignStyled,
} from "../../styles/community/CommunityList";
import dayjs from "dayjs";

const CommunityCard = (): JSX.Element => {
  const [commTitle, setCommTitle] = useState("미드로 영어공부하는 방법 총정리");
  const [heart, setHeart] = useState(11);
  const [messageCount, setMessageCount] = useState(5);
  const userName = "Mary Baker";
  const userProfileImg = require("../../assets/profile.png");
  const writingTime = dayjs("2022-11-30 10:30:25");
  const nowTime = dayjs();

  return (
    <>
      <CommunityCardAlignStyled>
        <ul className="title-profile-align">
          <li>
            <h3>{commTitle}</h3>
          </li>
          <li className="profile-align">
            <img src={userProfileImg} />
            <h3> {userName}</h3>
          </li>
        </ul>
        <CommunityInfo>
          <ul>
            <li>
              <ClockCircleOutlined /> {nowTime.diff(writingTime, "h")}시간전
            </li>
            <li>
              <HeartOutlined /> {heart}
            </li>
            <li>
              <MessageOutlined /> {messageCount}
            </li>
          </ul>
        </CommunityInfo>
      </CommunityCardAlignStyled>
    </>
  );
};

const CommunityList = (): JSX.Element => {
  return (
    <>
      <CommunityListAlignStyled>
        <CommunityCard />
      </CommunityListAlignStyled>
    </>
  );
};

export default CommunityList;
