import {
  TransparentWrapper,
  Logo,
  Navbar,
  SignIn,
  SignOut,
} from "../styles/Header.styled";
import {
  MainLayout,
  MainSearchWrapper,
  Suggestions,
  Suggest,
} from "../styles/search/Search.styled";
import { ROUTES } from "../enum/routes";
import SearchBar from "../components/search/SearchBar";
import { LogoIcon } from "../assets/index";
import { useNavigate } from "react-router";
import { ChatWrapper, ChatBox } from "../styles/Landing.styled";
import { useState, useEffect } from "react";
import * as Api from "../api";

const MainPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>();

  useEffect(() => {
    const boxList = document.querySelectorAll(
      ".left-chat-box, .right-chat-box"
    );
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5,
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, options);

    boxList.forEach((el) => io.observe(el));
  }, []);

  const handleSignout = async () => {
    try {
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("refreshToken");
      console.log("로그아웃 성공");
      window.location.reload();
    } catch (err) {
      console.log("로그아웃 실패");
      console.error(err);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await Api.get("user/currentUser");
        setIsLogin(true);
        console.log("로그인 된 상태");
      } catch (error) {
        setIsLogin(false);
        console.log("로그인 안된 상태");
      }
    };
    checkUser();
  }, []);

  return (
    <>
      <TransparentWrapper>
        <Logo to={ROUTES.MAIN}>
          <ul className="topnav-first-ul ">
            <li>
              <img src={LogoIcon} alt="logo" />
            </li>
            <li>
              <p>MIDst</p>
            </li>
          </ul>
        </Logo>
        <Navbar>
          {isLogin ? (
            <SignOut to={ROUTES.MAIN} onClick={handleSignout}>
              Sign Out
            </SignOut>
          ) : (
            <SignIn to={ROUTES.USER.LOGIN}>Sign In</SignIn>
          )}
        </Navbar>
      </TransparentWrapper>
      <MainLayout>
        {!isLogin && (
          <ChatWrapper>
            <ChatBox className="left-chat-box">Learn English?</ChatBox>
            <ChatBox className="right-chat-box">
              공부하려고 미드 보는데 그냥 드라마에만 빠져 있다면?
            </ChatBox>
            <ChatBox className="left-chat-box">MIDst를 통해 공부하기!</ChatBox>
            <ChatBox className="right-chat-box">
              MIDst를 통해 미드 속 표현 찾아서 저장하고
            </ChatBox>
            <ChatBox className="left-chat-box">
              영어일기 쓰면서 작문실력을 길러
            </ChatBox>
            <ChatBox className="right-chat-box">
              미드를 나만의 실력으로 만들자!
            </ChatBox>
            <ChatBox className="left-chat-box">START?</ChatBox>
          </ChatWrapper>
        )}
        <MainSearchWrapper>
          <Suggestions>
            <Suggest onClick={() => navigate("/search")}>
              # Search for phrases
            </Suggest>
            <Suggest onClick={() => navigate("/community")}>
              # Share your experience
            </Suggest>
            <Suggest disabled={!isLogin} onClick={() => navigate("/diary")}>
              # Write a diary
            </Suggest>
            <Suggest disabled={!isLogin} onClick={() => navigate("/personal")}>
              # Check out your record
            </Suggest>
          </Suggestions>
          <SearchBar></SearchBar>
        </MainSearchWrapper>
      </MainLayout>
    </>
  );
};

export default MainPage;
