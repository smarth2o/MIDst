import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  width: 100%;
  height: 67px;

  display: flex;
  align-items: center;

  position: fixed;
  left: 0px;
  top: 0px;

  background: rgba(255, 255, 255, 0.7);
`;

export const Logo = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  width: 140px;
  position: absolute;
  left: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  margin: 0 auto;
  width: 350px;

  position: absolute;
  right: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  color: #6e7cd7;
`;

export const Login = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  box-sizing: border-box;
  border: 1.5px solid #9564d3;
  border-radius: 30px;
  padding: 5px 15px;

  color: #9564d3;
`;
