import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import CommunityCreate from "../components/community/CommunityCreate";
import { ROUTES } from "../enum/routes";
import { BackBtnAlignStyled, CCPAlignStyled } from "../styles/common/CommonBtn";
import { AllBackGroundStyled } from "../styles/diary/DiaryCreatePage";

const CommunityCreatePage = (): JSX.Element => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(ROUTES.COMMUNITY.ROOT);
  };

  return (
    <AllBackGroundStyled>
      <CCPAlignStyled>
        <BackBtnAlignStyled>
          <button className="back-btn" onClick={onClickBtn}>
            <ArrowLeftOutlined />
            돌아가기
          </button>
        </BackBtnAlignStyled>
        <CommunityCreate />
      </CCPAlignStyled>
    </AllBackGroundStyled>
  );
};

export default CommunityCreatePage;
