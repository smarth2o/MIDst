import {
  MainLayout,
  SearchWrapper,
  Suggest,
  Suggestions,
  Search,
} from "../styles/Search.styled";
import search from "../assets/search.svg";

const MainPage = (): JSX.Element => {
  return (
    <MainLayout>
      <SearchWrapper>
        <Suggestions>
          <Suggest>
            <p>hello hello hello</p>
          </Suggest>
          <Suggest>
            <p>happy</p>
          </Suggest>
          {/* <Suggest></Suggest>
          <Suggest></Suggest> */}
        </Suggestions>
        <Search>
          <img src={search} alt="search"></img>
          <p>Search for expressions or words you're curious about!</p>
        </Search>
      </SearchWrapper>
    </MainLayout>
  );
};

export default MainPage;
