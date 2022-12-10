import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  top: 0;
  padding: 0 3%;
  max-height: 70px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background: rgba(255, 255, 255, 0.7);
`;

export const TransparentWrapper = styled(Wrapper)`
  background-color: transparent;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  .topnav-first-ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
  }
  .topnav-first-ul li {
    padding-right: 20px;
    margin: 0;
  }
  img {
    width: 40px;
    height: 40px;
  }

  p {
    font-family: "Copperplate";
    font-weight: 400;
    font-size: 32px;
    background: linear-gradient(270deg, #9d5ed1 37.07%, #3c99db 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const Navbar = styled.nav`
  margin: 0 9vw;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  padding-right: 3vmin;
  color: #6e7cd7;
  &:hover {
    font-weight: 800;
  }
`;

export const Login = styled(NavLink)`
  box-sizing: border-box;
  border: 1.5px solid #9564d3;
  border-radius: 30px;
  padding: 5px 15px;

  color: #9564d3;
  &:hover {
    font-weight: 800;
    background-color: #9564d320;
  }
`;
