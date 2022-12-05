import {
  PTBtnStyled,
  PTCardAlignStyled,
  PTCardContainerStyled,
  UPBottomAlignStyled,
  UPBottomDetail,
  UPTopAlignStyled,
  UserProfileImgStyled,
} from "../../styles/personal/PersonalTopCard";
import "react-calendar/dist/Calendar.css";
import {
  ArrowRightOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import CalendarContainer from "./CalendarContainer";

const UserProfile = (): JSX.Element => {
  const profileImg = require("../../assets/profile.png");
  const userName = "MarkBaker";
  const userEmail = "email1234@gmail.com";
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
      <h3>{userName}</h3>
      <UPBottomAlignStyled>
        <p>
          <MailOutlined /> {userEmail}
        </p>
        <UPBottomDetail>
          <button className="btn-go-search">EDIT</button>
        </UPBottomDetail>
      </UPBottomAlignStyled>
    </>
  );
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
