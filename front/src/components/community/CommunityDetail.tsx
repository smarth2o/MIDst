import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useOutletContext, useParams } from "react-router";
import { CommunityType } from "../../stores/CommunityAtom";
import { BackBtnAlignStyled } from "../../styles/common/CommonBtn";
import {
  CDPAlignStyled,
  CommunityDetailStyled,
} from "../../styles/community/CommunityDetail";
import {
  CommunityCommentStyled,
  CommunityPostBoxStyled,
} from "../../styles/community/CommunityDetailPost";
import CommunityReply from "./CommunityReply";
import { CommunityPropsType } from "./CommunityList";
import CommunityPost from "./CommunityPost";

const CommunityDetail = (): JSX.Element => {
  return (
    <>
      <CDPAlignStyled>
        <BackBtnAlignStyled>
          <button className="back-btn" onClick={onClickBtn}>
            <ArrowLeftOutlined />
            돌아가기
          </button>
        </BackBtnAlignStyled>
        <CommunityDetailStyled>
          <CommunityPostBoxStyled>
            <CommunityPost
              id={currentIndex}
              title={currentCommunityItem.title}
              description={currentCommunityItem.description}
              createdAt={currentCommunityItem.createdAt}
              reply={currentCommunityItem.count.reply}
              like={currentCommunityItem.count.like}
              communityItems={communityItems}
              setCommunityItems={setCommunityItems}
            />
          </CommunityPostBoxStyled>
          <CommunityCommentStyled>
            <h3>Reply</h3>
            <hr />
            <CommunityReply />
          </CommunityCommentStyled>
        </CommunityDetailStyled>
      </CDPAlignStyled>
    </>
  );
};

export default CommunityDetail;
