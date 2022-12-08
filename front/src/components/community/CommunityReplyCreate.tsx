import { ReplyStyled } from "../../styles/community/CommunityReplyCreate";

const CommunityReplyCreate = (): JSX.Element => {
  return (
    <>
      <ReplyStyled>
        <div className="reply-input-box">
          <input placeholder="댓글을 입력해주세요." />
          <button>작성</button>
        </div>
      </ReplyStyled>
    </>
  );
};

export default CommunityReplyCreate;
