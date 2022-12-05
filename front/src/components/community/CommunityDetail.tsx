import { count } from "console";
import { useOutletContext, useParams } from "react-router";
import { DiaryValueType } from "../../pages/DiaryPage";
import { CommunityType } from "../../stores/CommunityAtom";
import { CommunityPostBoxStyled } from "../../styles/community/CommunityDetailPost";
import CommunityComment from "./CommunityComment";
import { CommunityPropsTypes } from "./CommunityList";
import CommunityPost from "./CommunityPost";

const CommunityDetail = (): JSX.Element => {
  const { communityItems, setCommunityItems } = useOutletContext<CommunityPropsTypes>();
  const {detail} = useParams();
  const currentIndex = Number(detail ?? 1);
  const currentCommunityItem = communityItems.find(
    (communityItem) => communityItem.id === currentIndex 
  ) as CommunityType;
  
  
  return (
    <>
      <CommunityPostBoxStyled>
        <CommunityPost 
        id={currentIndex}
        title={currentCommunityItem.title}
        description = {currentCommunityItem.description}
        createdAt={currentCommunityItem.createdAt}
count= {currentCommunityItem.count}
        />
      </CommunityPostBoxStyled>
      <CommunityComment/>
    </>
  );
};

export default CommunityDetail;
