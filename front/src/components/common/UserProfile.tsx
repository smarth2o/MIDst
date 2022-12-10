import userProfileImg from "../../assets/profile.png";

const UserProfile = (): JSX.Element => {
  return (
    <>
      <li className="profile-align">
        <img src={userProfileImg} />
      </li>
    </>
  );
};

export default UserProfile;
