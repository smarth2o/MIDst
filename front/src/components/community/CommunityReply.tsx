import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { replyState, ReplyType } from "../../stores/ReplyAtom";
import { CommentAlignStyled } from "../../styles/community/CommunityComment";
import CommunityReplyCreate from "./CommunityReplyCreate";
import CommunityReplyItem from "./CommunityReplyItem";
import * as Api from "../../api";
import { useEffect } from "react";
import { useParams } from "react-router";

const CommunityReply = (): JSX.Element => {
  const [replys, setReplys] = useRecoilState(replyState);
  const [replysId, setReplysId] = useState("");
  const { communityDetail } = useParams();

  useEffect(() => {
    const sendRequest = async () => {
      const response = await Api.get(`replies/${communityDetail}/all`);
      console.log("댓글:", response.data.data);
      setReplys(response.data.data);
    };

    sendRequest();
  }, []);

  return (
    <>
      <CommentAlignStyled>
        {replys.map((reply: ReplyType) => {
          const {
            id,
            userId,
            author,
            postId,
            description,
            createdAt,
            updatedAt,
          } = reply;
          return (
            <>
              <CommunityReplyItem
                key={id}
                id={id}
                author={author}
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
