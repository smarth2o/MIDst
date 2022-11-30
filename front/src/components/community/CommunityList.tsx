import {
  ClockCircleOutlined,
  DownOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import {
  CommunityAllAlignStyled,
  CommunityCardAlignStyled,
  CommunityInfo,
  CommunityListAlignStyled,
  CommunitySortBtnStyled,
  CommunityWriteBtnStyled,
} from "../../styles/community/CommunityList";
import dayjs from "dayjs";
import UserProfile from "../common/UserProfile";

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
        <UserProfile />
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
      <CommunityAllAlignStyled>
        <CommunitySortBtnStyled>
          <button>
            <p>
              좋아요 순 <DownOutlined />
            </p>
          </button>
          <button>
            <p>
              최신 순 <DownOutlined />
            </p>
          </button>
        </CommunitySortBtnStyled>
        <CommunityListAlignStyled>
          <CommunityCard />
        </CommunityListAlignStyled>
        <CommunityWriteBtnStyled>
          <a href="/community/communityCreate">
            <button>Write</button>
          </a>
        </CommunityWriteBtnStyled>
      </CommunityAllAlignStyled>
    </>
  );
};

export default CommunityList;
