import {
  Wrapper,
  Logo,
  Navbar,
  NavLink,
  SignIn,
  SignOut,
} from "../styles/Header.styled";
import { ROUTES } from "../enum/routes";
import { Outlet } from "react-router-dom";
import { LogoIcon } from "../assets/index";
import { useState, useEffect } from "react";
import * as Api from "../api";

function Header() {
  const [isLogin, setIsLogin] = useState<boolean>();

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
        // setUser({
        //   name: res.data.name,
        //   email: res.data.email,
        //   password: res.data.password,
        //   accessToken: res.data.refreshToken,
        // });
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
      <Wrapper>
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
          <NavLink to={ROUTES.SEARCH}>Search</NavLink>
          <NavLink to={ROUTES.COMMUNITY.ROOT}>Share</NavLink>
          <NavLink to={ROUTES.DIARY.ROOT}>Diary</NavLink>
          <NavLink to={ROUTES.PERSONAL}>My</NavLink>
          {isLogin ? (
            <SignOut to={ROUTES.MAIN} onClick={handleSignout}>
              Sign Out
            </SignOut>
          ) : (
            <SignIn to={ROUTES.USER.LOGIN}>Sign In</SignIn>
          )}
        </Navbar>
      </Wrapper>
      <Outlet />
    </>
  );
}

export default Header;
