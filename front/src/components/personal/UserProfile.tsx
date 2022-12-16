import profileImg from "../../assets/profile.png";
import { useEffect, useState } from "react";
import PersonalModal from "./PersonalModal";
import {
  UPBottomAlignStyled,
  UPBottomDetail,
  UPTopAlignStyled,
  UPTopInfo,
  UserProfileFormStyled,
  UserProfileImgStyled,
} from "../../styles/personal/PersonalTopCard";
import { MailOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons";
import * as Api from "../../api";

type ClickHandler = (props: boolean) => (e: React.MouseEvent) => void;

const UserProfile = (): JSX.Element => {
  const [userName, setUserName] = useState("Mark Baker");
  const [userEmail, setUserEmail] = useState("email1234@gmail.com");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await Api.get(`user/currentUser`);
      if (res.status !== 200) {
      } else {
        setUserName(res.data[0].name);
        setUserEmail(res.data[0].email);
      }
    };
    getUserInfo();
  }, []);

  const ClickHandler: ClickHandler = (props) => (e) => {
    e.preventDefault();
    setIsEdit(!props);
    if (isEdit) {
      const userNamePut = async () => {
        const res = await Api.put(`user/updateuser`, {
          name: userName,
        });
      };
      userNamePut();
    }
  };
  if (!isEdit) {
    return (
      <>
        <UPTopAlignStyled>
          <UserProfileImgStyled>
            <img src={profileImg} alt="profileImg" />
          </UserProfileImgStyled>
          <SettingOutlined onClick={() => setIsToggle(!isToggle)} />
          {isToggle && <PersonalModal />}
        </UPTopAlignStyled>
        <UPTopInfo>
          <h3 className="profile-info-item">{userName}</h3>
          <p className="profile-info-item">
            <MailOutlined /> {userEmail}
          </p>
        </UPTopInfo>

        <UPBottomAlignStyled>
          <UPBottomDetail>
            <button className="btn-go-search" onClick={ClickHandler(isEdit)}>
              EDIT
            </button>
          </UPBottomDetail>
        </UPBottomAlignStyled>
      </>
    );
  } else {
    return (
      <>
        <UPTopAlignStyled>
          <UserProfileImgStyled>
            <img src={profileImg} alt="profileImg" />
          </UserProfileImgStyled>
          <SettingOutlined onClick={() => setIsToggle(!isToggle)} />
          {isToggle && <PersonalModal />}
        </UPTopAlignStyled>
        <UserProfileFormStyled>
          <form action="">
            <TeamOutlined />{" "}
            <input
              maxLength={20}
              placeholder="Title"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="profile-form-item"
            />
            <UPBottomAlignStyled>
              <p className="profile-info-item">
                <MailOutlined /> {userEmail}
              </p>
              <UPBottomDetail>
                <button
                  className="btn-go-search"
                  onClick={ClickHandler(isEdit)}
                >
                  SAVE
                </button>
              </UPBottomDetail>
            </UPBottomAlignStyled>
          </form>
        </UserProfileFormStyled>
      </>
    );
  }
};

export default UserProfile;
