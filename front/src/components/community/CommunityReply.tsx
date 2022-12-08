import axios from "axios";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { replyState, ReplyType } from "../../stores/ReplyAtom";
import { CommentAlignStyled } from "../../styles/community/CommunityComment";

const backPort = "8080";
const autoBaseUrl = window.location.hostname;
const serverUrl = `http://${autoBaseUrl}:${backPort}/`;

const CommunityReply = (): JSX.Element => {
  const replys = useRecoilValue(replyState);

  const sendRequest = async () => {
    const response = await axios.get("http://localhost:8080");
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
              <ul>
                <li>
                  <p>{userId}</p>
                </li>
                <li>{createdAt}</li>
                <li>{description}</li>
              </ul>
            </>
          );
        })}
      </CommentAlignStyled>
    </>
  );
};

export default CommunityReply;
