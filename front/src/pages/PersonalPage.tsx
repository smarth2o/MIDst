import React from "react";
import PersonalBottomCard from "../components/personal/PersonalBottomCard";
import { PersonalTopCard } from "../components/personal/PersonalTopCard";
import { PersonalPageBack } from "../styles/personal/PersonalPage";

const PersonalPage = (): JSX.Element => {
  return (
    <>
      <PersonalPageBack>
        <PersonalTopCard />
        <PersonalBottomCard />
      </PersonalPageBack>
    </>
  );
};

export default PersonalPage;
