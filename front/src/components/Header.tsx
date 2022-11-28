import { Wrapper, Logo, Navbar, NavLink, Login } from "../styles/Header.styled";
import { ROUTES } from "../enum/routes";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <Wrapper>
          <Logo to={ROUTES.MAIN}>
            <img src={require("../mist.png")} alt="logo"></img>
            <p>MIDst</p>
          </Logo>
          <Navbar>
            <NavLink to={ROUTES.SEARCH}>Search</NavLink>
            <NavLink to={ROUTES.SHARE}>Share</NavLink>
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
