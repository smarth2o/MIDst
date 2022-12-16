import dayjs from "dayjs";
import { UserProfileStyled } from "../../styles/common/UserProfile";
import {
  CommunityCardAlignStyled,
  CommunityInfo,
} from "../../styles/community/CommunityList";
import { CommunityPropsType } from "./CommunityList";
import { Profile } from "../../assets";
import {
  ClockCircleOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";

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
    <CommunityCardAlignStyled>
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
    </CommunityCardAlignStyled>
  );
};

export default CommunityItem;
