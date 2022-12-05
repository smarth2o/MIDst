import { MainLayout } from "../styles/Search.styled";
import SearchBar from "../components/SearchBar";

const MainPage = (): JSX.Element => {
  return (
    <MainLayout>
      <SearchBar></SearchBar>
    </MainLayout>
  );
};

export default MainPage;
