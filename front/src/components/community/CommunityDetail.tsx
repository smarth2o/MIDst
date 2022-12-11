import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useOutletContext, useParams } from "react-router";
import { CommunityType } from "../../stores/CommunityAtom";
import { BackBtnAlignStyled } from "../../styles/common/CommonBtn";
import {
  CommunityCommentStyled,
  CommunityDetaillAllStyled,
  CommunityPostBoxStyled,
} from "../../styles/community/CommunityDetailPost";
import CommunityComment from "./CommunityReply";
import { CommunityPropsType } from "./CommunityList";
import CommunityPost from "./CommunityPost";

const CommunityDetail = (): JSX.Element => {
  const { communityItems, setCommunityItems } =
    useOutletContext<CommunityPropsType>();
  const { communityDetail } = useParams();
  const currentIndex = Number(communityDetail ?? 1);
  const currentCommunityItem = communityItems.find(
    (communityItem) => communityItem.id === currentIndex
  ) as CommunityType;
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1);
  };

  return (
    <>
      <CommunityDetaillAllStyled>
        <div className="community-detail-align">
          <BackBtnAlignStyled>
            <button className="back-btn" onClick={onClickBtn}>
              <ArrowLeftOutlined />
              돌아가기
            </button>
          </BackBtnAlignStyled>
          <CommunityPostBoxStyled>
            <CommunityPost
              id={currentIndex}
              userId={currentCommunityItem.userId}
              userName={currentCommunityItem.userName}
              title={currentCommunityItem.title}
              description={currentCommunityItem.description}
              createdAt={currentCommunityItem.createdAt}
              updatedAt={currentCommunityItem.updatedAt}
              reply={currentCommunityItem.count.reply}
              like={currentCommunityItem.count.like}
              communityItems={communityItems}
              setCommunityItems={setCommunityItems}
            />
          </CommunityPostBoxStyled>
          <CommunityCommentStyled>
            <CommunityComment />
          </CommunityCommentStyled>
        </div>
      </CommunityDetaillAllStyled>
    </>
  );
};

export default CommunityDetail;
