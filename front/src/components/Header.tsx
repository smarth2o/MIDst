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
import userState from "../stores/UserAtom";
import { useResetRecoilState } from "recoil";
import * as Api from "../api";

function Header() {
  // const navigate = useNavigate();
  const userReset = useResetRecoilState(userState);

  const handleSignout = async () => {
    try {
      // await Api.post("logout/");
      userReset();
      window.sessionStorage.removeItem("name");
      // navigate("/", { replace: true });
      console.log("로그아웃 성공");
    } catch (err) {
      console.log("로그아웃 실패");
      console.error(err);
    }
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
          <NavLink to={ROUTES.DIARY.ROOT}>Diary</NavLink>
          <NavLink to={ROUTES.PERSONAL}>My</NavLink>
          {window.sessionStorage.getItem("name") ? (
            <SignIn to={ROUTES.USER.LOGIN}>Sign In</SignIn>
          ) : (
            <SignOut to={ROUTES.MAIN} onClick={handleSignout}>
              Sign Out
            </SignOut>
          )}
        </Navbar>
      </Wrapper>
      <Outlet />
    </>
  );
}

export default Header;
