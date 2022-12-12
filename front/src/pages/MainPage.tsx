import {
  TransparentWrapper,
  Logo,
  Navbar,
  Login,
} from "../styles/Header.styled";
import {
  MainLayout,
  MainSearchWrapper,
  Suggestions,
  Suggest,
} from "../styles/Search.styled";
import { ROUTES } from "../enum/routes";
import SearchBar from "../components/search/SearchBar";
import { useNavigate } from "react-router";
import { ChatWrapper, ChatBox } from "../styles/Landing.styled";
import { useEffect } from "react";

const MainPage = (): JSX.Element => {
  const navigate = useNavigate();

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

  return (
    <>
      <TransparentWrapper>
        <Logo to={ROUTES.MAIN}>
          <ul className="topnav-first-ul ">
            <li>
              <img src={require("../assets/mist.png")} alt="logo" />
            </li>
            <li>
              <p>MIDst</p>
            </li>
          </ul>
        </Logo>
        <Navbar>
          <Login to={ROUTES.USER.LOGIN}>Login</Login>
        </Navbar>
      </TransparentWrapper>
      <MainLayout>
        <ChatWrapper>
          <ChatBox className="left-chat-box">Learn English?</ChatBox>
          <ChatBox className="right-chat-box">
            공부하려고 미드 보는데 그냥 즐기다 끝나 ㅜ
          </ChatBox>
          <ChatBox className="left-chat-box">서비스 소개글 - Search</ChatBox>
          <ChatBox className="right-chat-box"></ChatBox>
          <ChatBox className="left-chat-box">서비스 소개글 - Diary</ChatBox>
          <ChatBox className="right-chat-box"></ChatBox>
          <ChatBox className="left-chat-box">START?</ChatBox>
        </ChatWrapper>
        <MainSearchWrapper>
          <Suggestions>
            <Suggest onClick={() => navigate("/search")}>
              # Search for phrases
            </Suggest>
            <Suggest onClick={() => navigate("/community")}>
              # Share your experience
            </Suggest>
            <Suggest onClick={() => navigate("/diary")}>
              # Write a diary
            </Suggest>
            <Suggest onClick={() => navigate("/personal")}>
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
