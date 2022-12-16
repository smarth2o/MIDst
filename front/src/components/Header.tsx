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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../api";
import { userState } from "../stores/UserAtom";
import { useRecoilState } from "recoil";

function Header() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useRecoilState(userState);

  const handleSignout = async () => {
    try {
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("refreshToken");
      setUserLogin(false);
      navigate("/");
    } catch (err) {
      // console.log("로그아웃 실패");
      console.error(err);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      try {
        await Api.get("user/currentUser");
        setUserLogin(true);
        // console.log("로그인 된 상태");
      } catch (error) {
        setUserLogin(false);
        // console.log("로그인 안된 상태");
      }
    };
    if (localStorage.getItem("accessToken")) {
      checkUser();
    }
  }, [setUserLogin]);

  const accessLink = () => {
    alert(`로그인 후 접속가능합니다.`);
  };

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
          {userLogin ? (
            <>
              <NavLink to={ROUTES.DIARY.ROOT}>Diary</NavLink>
              <NavLink to={ROUTES.PERSONAL}>My</NavLink>
            </>
          ) : (
            <>
              <div onClick={accessLink}>
                <NavLink to="#">Diary</NavLink>
              </div>
              <div onClick={accessLink}>
                <NavLink to="#">My</NavLink>
              </div>
            </>
          )}

          {userLogin ? (
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
