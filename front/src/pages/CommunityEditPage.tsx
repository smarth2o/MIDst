import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router";
import CommunityEdit from "../components/community/CommunityEdit";
import { BackBtnAlignStyled, CCPAlignStyled } from "../styles/common/CommonBtn";
import { AllBackGroundStyled } from "../styles/diary/DiaryCreatePage";

const CommunityEditPage = (): JSX.Element => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(-1);
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
        <CommunityEdit />
      </CCPAlignStyled>
    </AllBackGroundStyled>
  );
};

export default CommunityEditPage;
