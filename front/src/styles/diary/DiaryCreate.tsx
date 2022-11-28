import styled from "styled-components";

export const DiaryCreateAlign = styled.div`
  border-radius: 20px;
  height: 100%;
  box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.252);
  background-color: white;
  padding: 20px;
  margin: 30px;
`;

export const DiaryForm = styled.form`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    padding: 2%;
    width: 90%;
    height: 20px;
    border-radius: 5px;
    font-size: 25px;
    border: solid rgba(128, 128, 128, 0.6) 1px;
  }
  textarea {
    padding: 2%;
    width: 90%;
    height: 380px;
    border-radius: 5px;
    border: solid rgba(128, 128, 128, 0.6) 1px;
  }
`;
export const DiaryBtn = styled.div`
  button {
    padding: 5px 10px;
    border-radius: 20px;
    border: none;
    background-color: #dfe1e4;
    margin: 10px;
    color: gray;
  }
`;
