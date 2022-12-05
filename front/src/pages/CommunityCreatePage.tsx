import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BackBtn } from "../components/common/CommonBtn";
import CommunityCreate from "../components/community/CommunityCreate";
import { ROUTES } from "../enum/routes";
import { BackBtnAlignStyled, CCPAlignStyled } from "../styles/common/CommonBtn";
import { AllBackGroundStyled } from "../styles/diary/DiaryCreatePage";

const CommunityCreatePage = (): JSX.Element => {
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
        <CommunityCreate />
      </CCPAlignStyled>
    </AllBackGroundStyled>
  );
};

export default CommunityCreatePage;
