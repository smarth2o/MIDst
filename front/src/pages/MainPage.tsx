import { MainLayout, Suggest } from "../styles/Search.styled";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router";
import { LeftChatBox } from "../styles/Landing.styled";

const MainPage = (): JSX.Element => {
  const navigate = useNavigate();
  // const io = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("active");
  //     } else {
  //       entry.target.classList.remove("active");
  //     }
  //   });
  // });

  // const boxList = document.querySelectorAll("LeftChatBox");
  // boxList.forEach((el) => io.observe(el));

  return (
    <MainLayout>
      {/* <LeftChatBox>hello</LeftChatBox>
      <LeftChatBox>bye</LeftChatBox> */}
      <SearchBar>
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
      </SearchBar>
    </MainLayout>
  );
};

export default MainPage;
