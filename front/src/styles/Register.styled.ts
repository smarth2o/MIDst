import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../assets/pinkbrain.png";
import logo from "../assets/mist.png";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;

export const Box = styled.div`
  max-width: 350px;
  min-height: 300px;

  padding: 20px 40px 50px 40px;

  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  input:focus {
    outline: none;
  }
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 40px;
  height: 40px;
`;

export const Title = styled.h3`
  font-family: "Saira";
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  line-height: 30px;
  color: #333333;
`;

export const Text = styled.p`
  font-family: "Saira";
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  color: #555555;

  margin-bottom: 24px;
`;

export const SmallWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 280px;
  height: 40px;
  margin: 8px;
  padding: 10px;

  background-color: #ffffff;
  border: 1px solid rgba(85, 85, 85, 0.2);
  border-radius: 10px;

  font-family: "Saira";
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 280px;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;

  background: #7ec9ca;
  border: 1px solid rgba(85, 85, 85, 0.2);
  border-radius: 10px;

  font-family: "Saira";
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
`;

export const SmallButton = styled(Button).attrs({
  type: "button",
})`
  width: 50px;
  height: 30px;
  border-radius: 7px;

  margin-top: 8px;
  margin-bottom: 8px;
  position: absolute;
  right: 14px;
  top: 4.5px;

  font-size: 12px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 280px;

  p {
    font-family: "Saira";
    font-weight: 500;
    font-size: 14px;
    margin: 0px;

    color: rgba(85, 85, 85, 0.8);
  }
`;

export const OtherButton = styled(Link)`
  font-family: "Saira";
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  color: #555555;
`;
