import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useOutletContext, useParams } from "react-router";
import * as Api from "../../api";
import { BackBtnAlignStyled } from "../../styles/common/CommonBtn";
import {
  CommunityCommentStyled,
  CommunityDetaillAllStyled,
  CommunityPostBoxStyled,
} from "../../styles/community/CommunityDetailPost";
import CommunityPost from "./CommunityPost";
import CommunityReply from "./CommunityReply";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { communityState } from "../../stores/CommunityAtom";

const CommunityDetail = (): JSX.Element => {
  const [communityItems, setCommunityItems] = useRecoilState(communityState);
  const { communityDetail } = useParams();
  const [id, setId] = useState(0);
  const [like, setLike] = useState(0);
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [reply, setReply] = useState(0);
  const [title, setTitle] = useState("");

  const navigator = useNavigate();

  const backtohome = () => {
    navigator(`/community`);
  };

  useEffect(() => {
    const currentCommunityItem = async () => {
      const currentCommunityGet = await Api.get(`posts/${communityDetail}`);
      if (currentCommunityGet.status !== 200) {
      } else {
        setId(currentCommunityGet.data.data.id);
        setLike(currentCommunityGet.data.data._count.like);
        setAuthor(currentCommunityGet.data.data.author);
        setDescription(currentCommunityGet.data.data.description);
        setCreatedAt(currentCommunityGet.data.data.createdAt);
        setReply(currentCommunityGet.data.data.reply);
        setTitle(currentCommunityGet.data.data.title);
      }
    };
    currentCommunityItem();
  }, []);

  return (
    <>
      <CommunityDetaillAllStyled>
        <div className="community-detail-align">
          <BackBtnAlignStyled>
            <button className="back-btn" onClick={backtohome}>
              <ArrowLeftOutlined />
              돌아가기
            </button>
          </BackBtnAlignStyled>
          <CommunityPostBoxStyled>
            <CommunityPost
              id={id}
              title={title}
              description={description}
              createdAt={createdAt}
              author={author}
              reply={reply}
              like={like}
              communityItems={communityItems}
            />
          </CommunityPostBoxStyled>
          <CommunityCommentStyled>
            <CommunityReply />
          </CommunityCommentStyled>
        </div>
      </CommunityDetaillAllStyled>
    </>
  );
};

export default CommunityDetail;
