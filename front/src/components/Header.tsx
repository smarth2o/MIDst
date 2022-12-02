import { Wrapper, Logo, Navbar, NavLink, Login } from "../styles/Header.styled";
import { ROUTES } from "../enum/routes";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <Wrapper>
          <Logo to={ROUTES.MAIN}>
            <ul className="topnav-first-ul ">
              <li>
                <img src={require("../assets/mist.png")} alt="logo" />
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
            <Login to={ROUTES.USER.LOGIN}>Login</Login>
          </Navbar>
        </Wrapper>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
