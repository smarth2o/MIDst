import {
  PTBtnStyled,
  PTCardAlignStyled,
  PTCardContainerStyled,
  UPBottomAlignStyled,
  UPBottomDetail,
  UPTopAlignStyled,
  UPTopInfo,
  UserProfileFormStyled,
  UserProfileImgStyled,
} from "../../styles/personal/PersonalTopCard";
import "react-calendar/dist/Calendar.css";
import {
  ArrowRightOutlined,
  MailOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import CalendarContainer from "./CalendarContainer";
import profileImg from "../../assets/profile.png";
import { useState } from "react";

type ClickHandler = (props: boolean) => (e: React.MouseEvent) => void;

const UserProfile = (): JSX.Element => {
  const [userName, setUserName] = useState("Mark Baker");
  const [userEmail, setUserEmail] = useState("email1234@gmail.com");
  const [isEdit, setIsEdit] = useState<boolean>(false);

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
          <a href="/">
            <SettingOutlined />
          </a>
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
          <a href="/">
            <SettingOutlined />
          </a>
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

export const PersonalTopCard = (): JSX.Element => {
  return (
    <>
      <PTCardContainerStyled>
        <PTCardAlignStyled>
          <UserProfile />
        </PTCardAlignStyled>
        <PTCardAlignStyled>
          <CalendarContainer />
        </PTCardAlignStyled>

        <PTCardAlignStyled>
          <ul className="PTItem2">
            <li>
              <h3>
                Studied for 500 days
                <br />
                (17 days straight)
              </h3>
            </li>
            <li>
              <PTBtnStyled>
                <button>
                  Check your attendance
                  <br /> by writing today’s journal
                  <ArrowRightOutlined />
                </button>
              </PTBtnStyled>
            </li>
          </ul>
        </PTCardAlignStyled>

        <PTCardAlignStyled>
          <ul className="card-align-ul">
            <li className="card-align-li">
              <h3>Search for 327 expressions</h3>
              <li>
                <button className="btn-go-search">
                  <a href="/">
                    Saved Expressions <ArrowRightOutlined />
                  </a>
                </button>
              </li>
            </li>
            <li className="card-align-li">
              <h3>Search for 145 words</h3>
              <li>
                <button className="btn-go-search">
                  <a href="/">
                    Save Words <ArrowRightOutlined />
                  </a>
                </button>
              </li>
            </li>
          </ul>
        </PTCardAlignStyled>

        <PTCardAlignStyled>
          <ul className="card-align-ul">
            <li className="card-align-li">
              <h3>Search for 327 expressions</h3>
              <li>
                <button className="btn-go-search">
                  <a href="/">
                    Saved Expressions <ArrowRightOutlined />
                  </a>
                </button>
              </li>
            </li>
            <li className="card-align-li">
              <h3>Search for 145 words</h3>
              <li>
                <button className="btn-go-search">
                  <a href="/">
                    Save Words <ArrowRightOutlined />
                  </a>
                </button>
              </li>
            </li>
          </ul>
        </PTCardAlignStyled>
      </PTCardContainerStyled>
    </>
  );
};
