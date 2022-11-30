import React from "react";
import { BackBtn } from "../components/common/CommonBtn";
import CommunityCreate from "../components/community/CommunityCreate";
import { BackBtnAlignStyled, CCPAlignStyled } from "../styles/common/CommonBtn";
import { AllBackGroundStyled } from "../styles/diary/DiaryCreatePage";

const CommunityCreatePage = (): JSX.Element => {
  return (
    <AllBackGroundStyled>
      <CCPAlignStyled>
        <BackBtnAlignStyled>
          <BackBtn />
        </BackBtnAlignStyled>
        <CommunityCreate />
      </CCPAlignStyled>
    </AllBackGroundStyled>
  );
};

export default CommunityCreatePage;
