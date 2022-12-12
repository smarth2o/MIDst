import React from "react";
import {
  ClockCircleOutlined,
  DownOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import {
  CommunityAllAlignStyled,
  CommunityCardAlignStyled,
  CommunityInfo,
  CommunityListAlignStyled,
  CommunityListStyled,
  CommunitySortBtnStyled,
  CommunityWriteBtnStyled,
} from "../../styles/community/CommunityList";
import dayjs from "dayjs";
import { UserProfileStyled } from "../../styles/common/UserProfile";
import { communityState, CommunityType } from "../../stores/CommunityAtom";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { ROUTES } from "../../enum/routes";
import { useEffect } from "react";
import * as Api from "../../api";
import { Profile } from "../../assets";

export interface CommunityPropsType {
  id: number;
  author: string;
  title: string;
  createdAt: string;
  description: string;
  reply: number;
  like: number;
  communityItems: CommunityType[];
  setCommunityItems: SetterOrUpdater<CommunityType[]>;
}

const CommunityItem = ({
  id,
  title,
  author,
  createdAt,
  description,
  reply,
  like,
}: CommunityPropsType): JSX.Element => {
  const writingTime = dayjs(createdAt);
  const nowTime = dayjs();

  return (
    <>
      <CommunityCardAlignStyled>
        <div>
          <UserProfileStyled>
            <li>
              <h3>{title}</h3>
            </li>
            <li className="profile-align ">
              <img src={Profile} />
              <h4>{author}</h4>
            </li>
          </UserProfileStyled>
          <CommunityInfo>
            <ul>
              <li>
                <ClockCircleOutlined /> {nowTime.diff(writingTime, "h")}시간 전
              </li>
              <li>
                <HeartOutlined /> {like}
              </li>
              <li>
                <MessageOutlined /> {reply}
              </li>
            </ul>
          </CommunityInfo>
        </div>
      </CommunityCardAlignStyled>
    </>
  );
};

const CommunityList = (): JSX.Element => {
  const [communityItems, setCommunityItems] = useRecoilState(communityState);

  const newest = `newest`;
  useEffect(() => {
    const CommunityData = async () => {
      const response = await Api.get(`posts/all/${newest}`);
      if (response.status !== 200) {
        return console.log(response);
      } else {
        setCommunityItems(response.data.data);
        console.log("성공:", communityItems);
        console.log(response.data.data);
      }
    };
    CommunityData();
  }, []);

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
          <CommunityListStyled>
            <div>
              {communityItems.map((communityItem: CommunityType) => {
                const { id, title, createdAt, author, description, _count } =
                  communityItem;
                return (
                  <Link
                    key={id}
                    to={`/community/${communityItem.id}`}
                    className="community-link"
                  >
                    <CommunityItem
                      id={id}
                      author={author}
                      title={title}
                      createdAt={createdAt}
                      description={description}
                      reply={_count.reply}
                      like={_count.like}
                      communityItems={communityItems}
                      setCommunityItems={setCommunityItems}
                    />
                  </Link>
                );
              })}
            </div>
          </CommunityListStyled>
        </CommunityListAlignStyled>

        <CommunityWriteBtnStyled>
          <Link to={ROUTES.COMMUNITY.CREATE}>
            <button>Write</button>
          </Link>
        </CommunityWriteBtnStyled>
      </CommunityAllAlignStyled>
    </>
  );
};

export default CommunityList;
