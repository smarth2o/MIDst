import { ReplyType } from "../../stores/ReplyAtom";

const CommunityReplyItem = ({
  id,
  userId,
  createdAt,
  description,
}: ReplyType): JSX.Element => {
  return (
    <>
      <ul>
        <li key={id}>
          <p>{userId}</p>
        </li>
        <li>{createdAt}</li>
        <li>{description}</li>
      </ul>
    </>
  );
};
export default CommunityReplyItem;
