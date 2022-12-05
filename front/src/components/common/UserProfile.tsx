import { useState } from "react";
import { UserProfileStyled } from "../../styles/common/UserProfile";

const UserProfile = (): JSX.Element => {
  const [commTitle, setCommTitle] = useState("미드로 영어공부하는 방법 총정리");
  const userProfileImg = require("../../assets/profile.png");
  const userName = "Mary Baker";
  return (
    <>
      <UserProfileStyled>
        <li>
          <h3>{commTitle}</h3>
        </li>
        <li className="profile-align">
          <img src={userProfileImg} />
          <h3> {userName}</h3>
        </li>
      </UserProfileStyled>
    </>
  );
};

export default UserProfile;
