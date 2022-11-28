import styled from "styled-components";

export const Layout = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: center;
`;

export const Box = styled.form`
  width: 450px;
  height: 600px;

  background: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
`;

export const Form = styled.div`
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
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

  background: #7ec9ca;
  border: 1px solid rgba(85, 85, 85, 0.2);
  border-radius: 10px;

  font-family: "Saira";
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
`;
