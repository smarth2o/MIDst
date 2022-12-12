import styled from "styled-components";

export const ReplyStyled = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5vh;
  .reply-input-box {
    height: 40px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #999999;
    border-radius: 10px;
    margin: 0 2%;
    display: flex;
    justify-content: space-between;
  }
  input {
    height: 38px;
    border-radius: 10px;
    width: 100%;
    /* margin: 10px; */
    border: none;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    :focus {
      outline: none;
    }
  }
  button {
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 74px;
    background: #eef1f4;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`;
