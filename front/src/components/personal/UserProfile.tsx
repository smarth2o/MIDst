import profileImg from "../../assets/profile.png";
import { useState } from "react";
import PersonalModal from "./PersonalModal";
import {
  UPBottomAlignStyled,
  UPBottomDetail,
  UPTopAlignStyled,
  UPTopInfo,
  UserProfileFormStyled,
  UserProfileImgStyled,
} from "../../styles/personal/PersonalTopCard";
import {
  ArrowRightOutlined,
  MailOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";

type ClickHandler = (props: boolean) => (e: React.MouseEvent) => void;

const UserProfile = (): JSX.Element => {
  const [userName, setUserName] = useState("Mark Baker");
  const [userEmail, setUserEmail] = useState("email1234@gmail.com");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isToggle, setIsToggle] = useState(false);

  const ClickHandler: ClickHandler = (props) => (e) => {
    e.preventDefault();
    setIsEdit(!props);
    // if (isEdit) {
    // 백엔드로 연결하기
    // }
  };
  if (!isEdit) {
    return (
      <>
        <UPTopAlignStyled>
          <UserProfileImgStyled>
            <img src={profileImg} />
          </UserProfileImgStyled>
          <SettingOutlined onClick={() => setIsToggle(!isToggle)} />
          {isToggle === true ? <PersonalModal /> : null}
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
            <img src={profileImg} />
          </UserProfileImgStyled>
          <SettingOutlined onClick={() => setIsToggle(!isToggle)} />
          {isToggle === true ? <PersonalModal /> : null}
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
              <MailOutlined />{" "}
              <input
                maxLength={20}
                placeholder="Title"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                className="profile-form-item"
              />
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
