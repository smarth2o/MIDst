import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../pinkbrain.png";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  background: url(${background}) no-repeat center center;
  width: 100%;
  min-height: 100vh;
`;

export const Box = styled.form`
  width: 400px;
  height: 500px;
  margin-top: 200px;

  background: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
`;

export const Form = styled.div`
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const Text = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-family: "Saira";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    text-align: center;

    color: #333333;
  }
  p {
    font-family: "Saira";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    text-align: center;

    color: #555555;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  margin: 20px 20px;

  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-family: "Copperplate";
    font-weight: 400;
    font-size: 42px;

    margin: 0px 0px;

    background: linear-gradient(270deg, #9d5ed1 37.07%, #3c99db 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const Line = styled.div`
  width: 350px;
  margin-bottom: 30px;

  border: 1px solid #ffffff;
`;

export const Input = styled.input`
  box-sizing: border-box;

  width: 304px;
  height: 36px;

  background: #ffffff;
  border: 1px solid rgba(85, 85, 85, 0.2);
  border-radius: 10px;
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 300px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;

  background: #7ec9ca;
  border: 1px solid rgba(85, 85, 85, 0.2);
  border-radius: 10px;

  font-family: "Saira";
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
`;

export const OtherWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  margin-bottom: 20px;

  p {
    font-family: "Saira";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;

    color: rgba(85, 85, 85, 0.8);
  }
`;

export const FindButton = styled(Link)`
  font-family: "Saira";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  color: rgba(85, 85, 85, 0.8);
`;

export const SignUpButton = styled(Link)`
  font-family: "Saira";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  color: #555555;
`;
