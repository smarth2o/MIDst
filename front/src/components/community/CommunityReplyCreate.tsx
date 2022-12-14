import { ReplyStyled } from "../../styles/community/CommunityReplyCreate";
import * as Api from "../../api";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router";

const CommunityReplyCreate = (): JSX.Element => {
  const [replyContent, setReplyContent] = useState("");
  const [nowAuthorId, setNowAuthorId] = useState("");
  const [id, setId] = useState(0);
  const [currrentName, setCurrentName] = useState("");
  const createdAt = dayjs();
  const { communityDetail } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      const currentUser = await Api.get(`user/currentUser`);
      if (currentUser.status !== 200) {
        console.log(currentUser);
      } else {
        setNowAuthorId(currentUser.data[0].userId);
        setCurrentName(currentUser.data[0].name);
      }
    };
    getUserData();
  }, []);

  const onFinish = async () => {
    const response = await Api.post(`replies/${communityDetail}`, {
      id: id,
      name: currrentName,
      userId: nowAuthorId,
      postId: communityDetail,
      description: replyContent,
      createdAt: createdAt,
      updatedAt: createdAt,
    });
    if (response.status !== 200) {
      console.log(response);
    } else {
      console.log("입력", response.data);
    }
  };

  return (
    <>
      <ReplyStyled>
        <form onSubmit={onFinish} className="reply-input-box">
          <input
            placeholder="댓글을 입력해주세요."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
          />
          <button type="submit" value="Submit">
            작성
          </button>
        </form>
      </ReplyStyled>
    </>
  );
};

export default CommunityReplyCreate;
