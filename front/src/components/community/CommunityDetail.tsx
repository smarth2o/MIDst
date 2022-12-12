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
import { ROUTES } from "../../enum/routes";

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
    navigate(ROUTES.COMMUNITY.ROOT);
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
              author={currentCommunityItem.author}
              title={currentCommunityItem.title}
              description={currentCommunityItem.description}
              createdAt={currentCommunityItem.createdAt}
              reply={currentCommunityItem._count.reply}
              like={currentCommunityItem._count.like}
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
