import CommunityComment from "./CommunityComment";
import CommunityDetail from "./CommunityDetail";

const CommunityPost = (): JSX.Element => {
  return (
    <>
      <CommunityDetail />
      <CommunityComment />
    </>
  );
};

export default CommunityPost;
