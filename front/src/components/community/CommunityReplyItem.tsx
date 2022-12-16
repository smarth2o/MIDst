import dayjs from "dayjs";
import { useRecoilState } from "recoil";
import { ReplyType, replyState } from "../../stores/ReplyAtom";
import { CommunityCreateBtnAlignStyled } from "../../styles/community/CommunityCreate";
import { ReplyLiStyled } from "../../styles/community/CommunityReplyItem";
import * as Api from "../../api";
import { useEffect, useState } from "react";
import { ReplyStyled } from "../../styles/community/CommunityReplyCreate";
import { useNavigate, useParams } from "react-router";

const CommunityReplyItem = ({
  id,
  author,
  userId,
  createdAt,
  description,
}: ReplyType): JSX.Element => {
  const [communityDescription, setCommunityDescription] = useState(description);
  const [isToggle, setisToggle] = useState(false);
  const replyCreatedAt = dayjs(createdAt);
  const [currentUser, setCurrentUser] = useState("");
  const { communityDetail } = useParams();
  const [replys, setReplys] = useRecoilState(replyState);

  const navigator = useNavigate();

  const onDelete = async () => {
    const response = await Api.delete(`replies/${id}`);
    if (response.status !== 200) {
      console.log(response);
    } else {
      const response = await Api.get(`replies/${communityDetail}/all`);
      setReplys(response.data.data);
      // navigator(`/community/${communityDetail}`);
    }
  };

  const onPut = async () => {
    const response = await Api.put(`replies/${id}`, {
      description: communityDescription,
    });
    if (response.status !== 200) {
      console.log(response);
    } else {
    }
  };
  useEffect(() => {
    const onUserCheck = async () => {
      try {
        const res = await Api.get(`user/currentUser`);
        setCurrentUser(res.data[0].name);
      } catch {}
    };
    onUserCheck();
  }, []);

  if (!isToggle) {
    return (
      <>
        <ReplyLiStyled>
          <ul>
            <div className="reply-user-info">
              <li className="userId">{author}</li>
              <li className="createdAt">
                {replyCreatedAt.format("YYYY-MM-DD H시간전")}
              </li>
            </div>
            <p>{communityDescription}</p>
          </ul>
          <ul>
            {currentUser === author ? (
              <CommunityCreateBtnAlignStyled>
                <button type="submit" onClick={() => setisToggle(!isToggle)}>
                  수정
                </button>
                <button type="button" className="delete" onClick={onDelete}>
                  삭제
                </button>
              </CommunityCreateBtnAlignStyled>
            ) : null}
          </ul>
        </ReplyLiStyled>
      </>
    );
  } else {
    return (
      <>
        <div>
          <ReplyStyled>
            <form onSubmit={onPut} className="reply-input-box">
              <input
                placeholder="댓글을 입력해주세요."
                value={communityDescription}
                onChange={(e) => setCommunityDescription(e.target.value)}
              />
              <button
                type="submit"
                value="Submit"
                onClick={() => setisToggle(!isToggle)}
              >
                작성
              </button>
            </form>
          </ReplyStyled>
        </div>
      </>
    );
  }
};
export default CommunityReplyItem;
