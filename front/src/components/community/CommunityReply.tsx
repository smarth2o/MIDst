import React from "react";
import { useRecoilValue } from "recoil";
import { replyState, ReplyType } from "../../stores/ReplyAtom";
import { CommentAlignStyled } from "../../styles/community/CommunityComment";
import CommunityReplyCreate from "./CommunityReplyCreate";
import CommunityReplyItem from "./CommunityReplyItem";
import * as Api from "../../api";
import { useEffect } from "react";

const CommunityReply = (): JSX.Element => {
  const replys = useRecoilValue(replyState);

  useEffect(() => {
    const sendRequest = async () => {
      const response = await Api.get(`replies/${0}/all`);
      console.log("댓글:", response.data);
    };

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
