import {
  ClockCircleOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { UserProfileStyled } from "../../styles/common/UserProfile";
import {
  CommunityPostAlignStyled,
  CPContentStyled,
  CPTopAlignStyled,
  CPTopInfoAlign,
} from "../../styles/community/CommunityPost";
import UserProfile from "../common/UserProfile";
import { CommunityPropsType } from "./CommunityList";

const CommunityPost = ({
  id,
  title,
  description,
  createdAt,
  userName,
  reply,
  like,
}: CommunityPropsType): JSX.Element => {
  const postCreatedAt = dayjs(createdAt);
  return (
    <>
      <CommunityPostAlignStyled>
        <CPContentStyled>
          <CPTopAlignStyled>
            <CPTopInfoAlign>
              <li className="postInfo">
                <ClockCircleOutlined />
                {postCreatedAt.format("YYYY-MM-DD H시간전")}
              </li>
              <li className="postInfo">
                <HeartOutlined />
                {reply}
              </li>
              <li className="postInfo">
                <MessageOutlined />
                {reply}
              </li>
            </CPTopInfoAlign>
            <UserProfileStyled>
              <li className="profile-align">
                <UserProfile />
                <h3>{userName}</h3>
              </li>
            </UserProfileStyled>
          </CPTopAlignStyled>

          <li>
            <h3>{title}</h3>
          </li>
          <p>{description}</p>
        </CPContentStyled>
      </CommunityPostAlignStyled>
    </>
  );
};

export default CommunityPost;
