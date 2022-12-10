import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./enum/routes";
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import CommunityPage from "./pages/CommunityPage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import CommunityCreatePage from "./pages/CommunityCreatePage";
import CommunityEditPage from "./pages/CommunityEditPage";
import DiaryPage from "./pages/DiaryPage";
import DiaryDetail from "./components/diary/DiaryDetail";
import DiaryCreate from "./components/diary/DiaryCreate";
import PersonalPage from "./pages/PersonalPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FindPasswordPage from "./pages/FindPasswordPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import CommunityDetail from "./components/community/CommunityDetail";
// import Background from "./styles/common/BrainBackground.styled";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path={ROUTES.MAIN} element={<MainPage />} />
          <Route element={<Header />}>
            <Route path={ROUTES.SEARCH} element={<SearchPage />} />
            <Route path={ROUTES.COMMUNITY.ROOT} element={<CommunityPage />} />
            <Route
              path={ROUTES.COMMUNITY.CREATE}
              element={<CommunityCreatePage />}
            />
            <Route
              path={ROUTES.COMMUNITY.DETAIL}
              element={<CommunityDetailPage />}
            >
              <Route
                path={ROUTES.COMMUNITY.DETAIL}
                element={<CommunityDetail />}
              />
            </Route>

            <Route
              path={ROUTES.COMMUNITY.EDIT}
              element={<CommunityEditPage />}
            />
            <Route path={ROUTES.DIARY.ROOT} element={<DiaryPage />}>
              <Route path={ROUTES.DIARY.DETAIL} element={<DiaryDetail />} />
              <Route path={ROUTES.DIARY.CREATE} element={<DiaryCreate />} />
            </Route>
            <Route path={ROUTES.PERSONAL} element={<PersonalPage />} />
            <Route path={ROUTES.USER.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.USER.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.USER.FIND_PW} element={<FindPasswordPage />} />
            <Route
              path={ROUTES.USER.CHANGE_PW}
              element={<ChangePasswordPage />}
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
