import React, { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./enum/routes";
import CommunityCreatePage from "./pages/CommunityCreatePage";
import CommunityDetailPage from "./pages/CommunityDetailPage";
import CommunityEditPage from "./pages/CommunityEditPage";
import CommunityPage from "./pages/CommunityPage";
import DiaryCreatePage from "./pages/DiaryCreatePage";
import DiaryDetailPage from "./pages/DiaryDetailPage";
import DiaryPage from "./pages/DiaryPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import PersonalPage from "./pages/PersonalPage";
import RegisterPage from "./pages/RegisterPage";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.DIARY.ROOT} element={<DiaryPage />} />
        <Route path={ROUTES.DIARY.DIARY_CREATE} element={<DiaryCreatePage />} />
        <Route path={ROUTES.DIARY.DIARY_DETAIL} element={<DiaryDetailPage />} />
        <Route path={ROUTES.USER.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.USER.REGISTER} element={<RegisterPage />} />
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
      </Routes>
    </Router>
  );
};

export default App;
