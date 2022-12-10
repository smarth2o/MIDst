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
import userProfileImg from "../../assets/profile.png";
import { UserProfileStyled } from "../../styles/common/UserProfile";
import { communityState, CommunityType } from "../../stores/CommunityAtom";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { ROUTES } from "../../enum/routes";

export interface CommunityPropsType {
  id: number;
  userName: string;
  title: string;
  createdAt: string;
  description: string;
  reply: number;
  updatedAt: string;
  like: number;
  communityItems: CommunityType[];
  setCommunityItems: SetterOrUpdater<CommunityType[]>;
}

const CommunityItem = ({
  id,
  title,
  createdAt,
  description,
  userName,
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
              <img src={userProfileImg} />
              <h4>{userName}</h4>
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
                const {
                  id,
                  title,
                  createdAt,
                  updatedAt,
                  userName,
                  description,
                  count,
                } = communityItem;
                return (
                  <Link
                    key={id}
                    to={`/community/${communityItem.id}`}
                    className="community-link"
                  >
                    <CommunityItem
                      id={id}
                      userName={userName}
                      title={title}
                      createdAt={createdAt}
                      updatedAt={updatedAt}
                      description={description}
                      reply={count.reply}
                      like={count.like}
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
