import { Outlet } from "react-router";
import { useRecoilState } from "recoil";
import { communityState } from "../stores/CommunityAtom";
import { AllBackGroundStyled } from "../styles/diary/DiaryCreatePage";

const CommunityDetailPage = (): JSX.Element => {
  const [communityItems, setCommunityItems] = useRecoilState(communityState);

  return (
    <AllBackGroundStyled>
      <Outlet context={{ communityItems, setCommunityItems }} />;
    </AllBackGroundStyled>
  );
};

export default CommunityDetailPage;
