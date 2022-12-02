import React, { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./enum/routes";
import { GlobalStyle } from "./styles/GlobalStyle.styled";
import Header from "./components/Header";
import CommunityCreatePage from "./pages/CommunityCreatePage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import CommunityEditPage from "./pages/CommunityEditPage";
import CommunityPage from "./pages/CommunityPage";
import DiaryCreatePage from "./pages/DiaryCreatePage";
import DiaryDetailPage from "./pages/DiaryDetailPage";
import DiaryPage from "./pages/DiaryPage";
import MainPage from "./pages/MainPage";
import PersonalPage from "./pages/PersonalPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import FindPasswordPage from "./pages/FindPasswordPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path={ROUTES.MAIN} element={<MainPage />} />
          <Route path={ROUTES.USER.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.USER.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.USER.FIND_PW} element={<FindPasswordPage />} />
          <Route
            path={ROUTES.USER.CHANGE_PW}
            element={<ChangePasswordPage />}
          />
          <Route path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route path={ROUTES.DIARY.ROOT} element={<DiaryPage />} />
          <Route
            path={ROUTES.DIARY.DIARY_CREATE}
            element={<DiaryCreatePage />}
          />
          <Route
            path={ROUTES.DIARY.DIARY_DETAIL}
            element={<DiaryDetailPage />}
          />
          <Route path={ROUTES.PERSONAL} element={<PersonalPage />} />
          <Route path={ROUTES.COMMUNITY.ROOT} element={<CommunityPage />} />
          <Route
            path={ROUTES.COMMUNITY.COMMUNITY_CREATE}
            element={<CommunityCreatePage />}
          />
          <Route
            path={ROUTES.COMMUNITY.COMMUNITY_DETAIL}
            element={<CommunityDetailPage />}
          />
          <Route
            path={ROUTES.COMMUNITY.COMMUNITY_EDIT}
            element={<CommunityEditPage />}
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
