import {
  Layout,
  SearchWrapper,
  Suggest,
  Suggestions,
  Search,
} from "../styles/Search.styled";

const MainPage = (): JSX.Element => {
  return (
    <Layout>
      <SearchWrapper>
        <Suggestions>
          <Suggest></Suggest>
          <Suggest></Suggest>
          <Suggest></Suggest>
          <Suggest></Suggest>
        </Suggestions>
        <Search>
          <p>Search for expressions or words you're curious about!</p>
        </Search>
      </SearchWrapper>
    </Layout>
  );
};

export default MainPage;
