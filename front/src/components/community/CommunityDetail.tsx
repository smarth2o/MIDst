import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useOutletContext, useParams } from "react-router";
import * as Api from "../../api";
import { BackBtnAlignStyled } from "../../styles/common/CommonBtn";
import {
  CommunityCommentStyled,
  CommunityDetaillAllStyled,
  CommunityPostBoxStyled,
} from "../../styles/community/CommunityDetailPost";
import { CommunityPropsType } from "./CommunityList";
import CommunityPost from "./CommunityPost";
import { ROUTES } from "../../enum/routes";
import CommunityReply from "./CommunityReply";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { communityState } from "../../stores/CommunityAtom";
import { Link } from "react-router-dom";

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

  // const currentCommunityItem = communityItems.find(
  //   (communityItem) => communityItem.id === currentIndex
  // ) as CommunityType;

  useEffect(() => {
    const currentCommunityItem = async () => {
      const currentCommunityGet = await Api.get(`posts/${communityDetail}`);
      if (currentCommunityGet.status !== 200) {
        console.log(currentCommunityGet);
      } else {
        console.log("포스트:", currentCommunityGet.data.data);
        setCommunityItems(currentCommunityGet.data.data);
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

  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <>
      <CommunityDetaillAllStyled>
        <div className="community-detail-align">
          <BackBtnAlignStyled>
            <Link to={ROUTES.COMMUNITY.ROOT}>
              <button className="back-btn">
                <ArrowLeftOutlined />
                돌아가기
              </button>
            </Link>
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
              setCommunityItems={setCommunityItems}
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
