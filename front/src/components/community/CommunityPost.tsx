import { CommunityPostAlignStyled } from "../../styles/community/CommunityPost";
import { CommunityPropsType } from "./CommunityList";

const CommunityPost = ({
  id,
  title,
  description,
  createdAt,
  updatedAt,
  reply,
  like,
}: CommunityPropsType): JSX.Element => {
  const userProfileImg = require("../../assets/profile.png");

  return (
    <>
      <CommunityPostAlignStyled>
        <p>{createdAt}</p>
        <img src={userProfileImg} />
        <h3>{title}</h3>
        <p>{description}</p>
      </CommunityPostAlignStyled>
    </>
  );
};

export default CommunityPost;
