import CommunityList from "../components/community/CommunityList";
import { AllBackGroundStyled } from "../styles/diary/DiaryCreatePage";

const CommunityPage = (): JSX.Element => {
  return (
    <>
      <AllBackGroundStyled>
        <CommunityList />
      </AllBackGroundStyled>
    </>
  );
};

export default CommunityPage;
