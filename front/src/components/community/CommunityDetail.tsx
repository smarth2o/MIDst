import { CommunityPostBoxStyled } from "../../styles/community/CommunityDetailPost";
import CommunityPost from "./CommunityPost";

const CommunityDetail = (): JSX.Element => {
  return (
    <>
      <CommunityPostBoxStyled>
        <CommunityPost />
      </CommunityPostBoxStyled>
    </>
  );
};

export default CommunityDetail;
