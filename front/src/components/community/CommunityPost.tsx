import {
  ClockCircleOutlined,
  HeartOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router";
import { ROUTES } from "../../enum/routes";
import { UserProfileStyled } from "../../styles/common/UserProfile";
import { CommunityCreateBtnAlignStyled } from "../../styles/community/CommunityCreate";
import {
  CommunityPostAlignStyled,
  CommunityPostBtn,
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
  author,
  reply,
  like,
}: CommunityPropsType): JSX.Element => {
  const postCreatedAt = dayjs(createdAt);
  const { communityDetail } = useParams();
  const navigate = useNavigate();
  const onCancel = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      navigate(ROUTES.COMMUNITY.ROOT);
    }
  };
  const onEdit = () => {
    navigate(`/community/${communityDetail}/edit`);
  };

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
                {like}
              </li>
              <li className="postInfo">
                <MessageOutlined />
                {reply}
              </li>
            </CPTopInfoAlign>
            <UserProfileStyled>
              <li className="profile-align">
                <UserProfile />
                <h3>{author}</h3>
              </li>
            </UserProfileStyled>
          </CPTopAlignStyled>

          <li>
            <h3 className="CPContent-title">{title}</h3>
          </li>
          <p>{description}</p>
          <CommunityCreateBtnAlignStyled>
            <CommunityPostBtn>
              <button onClick={onCancel} className="delete">
                삭제
              </button>
              <button type="submit" onClick={onEdit}>
                수정
              </button>
            </CommunityPostBtn>
          </CommunityCreateBtnAlignStyled>
        </CPContentStyled>
      </CommunityPostAlignStyled>
    </>
  );
};

export default CommunityPost;
