import axios from "axios";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { replyState, ReplyType } from "../../stores/ReplyAtom";
import { CommentAlignStyled } from "../../styles/community/CommunityComment";
import CommunityReplyCreate from "./CommunityReplyCreate";
import CommunityReplyItem from "./CommunityReplyItem";

const backPort = "8080";
const autoBaseUrl = window.location.hostname;
const serverUrl = `http://${autoBaseUrl}:${backPort}`;

const CommunityReply = (): JSX.Element => {
  const replys = useRecoilValue(replyState);

  const sendRequest = async () => {
    const response = await axios.get(`${serverUrl}/replies/${0}/all`);
    console.log(response);
    console.log(response.data);
  };

  useEffect(() => {
    sendRequest();
  });

  return (
    <>
      <CommentAlignStyled>
        {replys.map((reply: ReplyType) => {
          const { id, userId, postId, description, createdAt, updatedAt } =
            reply;
          return (
            <>
              <CommunityReplyItem
                key={id}
                id={id}
                postId={postId}
                description={description}
                createdAt={createdAt}
                userId={userId}
                updatedAt={updatedAt}
              />
            </>
          );
        })}
        <CommunityReplyCreate />
      </CommentAlignStyled>
    </>
  );
};

export default CommunityReply;
