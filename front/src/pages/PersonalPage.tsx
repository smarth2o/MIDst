import React from "react";
import PersonalBottomCard from "../components/personal/PersonalBottomCard";
import { PersonalTopCard } from "../components/personal/PersonalTopCard";
import { PersonalPageBackStyled } from "../styles/personal/PersonalPage";

const PersonalPage = (): JSX.Element => {
  return (
    <>
      <PersonalPageBackStyled>
        <PersonalTopCard />
        <PersonalBottomCard />
      </PersonalPageBackStyled>
    </>
  );
};

export default PersonalPage;
