import {
  MainLayout,
  MainSearchWrapper,
  Suggestions,
  Suggest,
} from "../styles/Search.styled";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router";
import {
  ChatWrapper,
  LeftChatBox,
  RightChatBox,
} from "../styles/Landing.styled";

const MainPage = (): JSX.Element => {
  const navigate = useNavigate();

  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 1.0, // 50%가 viewport에 들어와 있어야 callback 실행
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        // entry.target.classList.add("active");
        entry.target.className = "active";
        console.log(entry.target);
      } else {
        // entry.target.classList.remove("active");
        entry.target.className = "";
        console.log(entry.target);
      }
    });
  }, options);

  const boxList = document.querySelectorAll("LeftChatBox");
  boxList.forEach((el) => io.observe(el));

  return (
    <MainLayout>
      <ChatWrapper>
        <LeftChatBox>Learn English?</LeftChatBox>
        <RightChatBox>공부하려고 미드 보는데 그냥 즐기다 끝나 ㅜ</RightChatBox>
        <LeftChatBox>서비스 소개글 - Search</LeftChatBox>
        <RightChatBox></RightChatBox>
        <LeftChatBox>서비스 소개글 - Diary</LeftChatBox>
        <RightChatBox></RightChatBox>
        <LeftChatBox>START?</LeftChatBox>
      </ChatWrapper>
      <MainSearchWrapper>
        <Suggestions>
          <Suggest onClick={() => navigate("/search")}>
            #Search for phrases
          </Suggest>
          <Suggest onClick={() => navigate("/community")}>
            #Share your experience
          </Suggest>
          <Suggest onClick={() => navigate("/diary")}>#Write a diary</Suggest>
          <Suggest onClick={() => navigate("/personal")}>
            #Check out your record
          </Suggest>
        </Suggestions>
        <SearchBar></SearchBar>
      </MainSearchWrapper>
    </MainLayout>
  );
};

export default MainPage;
