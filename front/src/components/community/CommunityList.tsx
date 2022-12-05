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
import { UserProfileStyled } from "../../styles/common/UserProfile";
import { communityState, CommunityType } from "../../stores/CommunityAtom";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { Link } from "react-router-dom";

export interface CommunityPropsTypes {
  id: number,
  title: string,
  createdAt: string,
  description: string,
  count:{
    reply:number,
    like:number,
};
  communityItems: CommunityType[];
  setCommunityItems : SetterOrUpdater<CommunityType[]>;
} 

const CommunityItem = ({id, title, createdAt, description, count}:CommunityPropsTypes): JSX.Element => {
 
  const [heart, setHeart] = useState(11);
  const [messageCount, setMessageCount] = useState(5);
  const userName = "Mary Baker";
  const userProfileImg = require("../../assets/profile.png");
  const writingTime = dayjs(createdAt);
  const nowTime = dayjs();

  return (
    <>
        <CommunityCardAlignStyled>
        <UserProfileStyled>
        <li>
          <h3>{title}</h3>
        </li>
        <UserProfile/>
        </UserProfileStyled>
        <CommunityInfo>
          <ul>
            <li>
              <ClockCircleOutlined /> {nowTime.diff(writingTime, "h")}시간전
            </li>
            <li>
              <HeartOutlined /> {count.like}
            </li>
            <li>
              <MessageOutlined /> {count.reply}
            </li>
          </ul>
        </CommunityInfo>
        </CommunityCardAlignStyled>

    </>
  );
};

const CommunityList = (): JSX.Element => {
  const [communityItems, setCommunityItems] = useRecoilState(communityState);
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

        {communityItems.map((communityItem:CommunityType)=>{
            const {id, title, createdAt, description, count} = communityItem;
            return(
                <Link key={id} to={`/community/${communityItem.id}`} className="community-link">
          <CommunityItem id={id} title={title} createdAt={createdAt} description={description}count= {count} communityItems={communityItems}setCommunityItems={setCommunityItems}/>
          </Link>
            );
        })}

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
