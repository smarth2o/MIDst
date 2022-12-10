import dayjs from "dayjs";
import { ReplyType } from "../../stores/ReplyAtom";
import { ReplyLiStyled } from "../../styles/community/CommunityReplyItem";

const CommunityReplyItem = ({
  id,
  userId,
  createdAt,
  description,
}: ReplyType): JSX.Element => {
  const replyCreatedAt = dayjs(createdAt);

  return (
    <>
      <ReplyLiStyled>
        <ul>
          <li className="reply-user-info">
            <li className="userId">{userId}</li>
            <li className="createdAt">
              {replyCreatedAt.format("YYYY-MM-DD H시간전")}
            </li>
          </li>
          <li>{description}</li>
        </ul>
      </ReplyLiStyled>
    </>
  );
};
export default CommunityReplyItem;
