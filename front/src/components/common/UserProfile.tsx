import { UserProfileStyled } from "../../styles/common/UserProfile";
import userProfileImg from "../../assets/profile.png";

const UserProfile = (): JSX.Element => {
  const userName = "Mary Baker";
  return (
    <>
      <li className="profile-align">
        <img src={userProfileImg} />
        <h3> {userName}</h3>
      </li>
    </>
  );
};

export default UserProfile;
