import styled from "styled-components";

export const DiaryCreateAlign = styled.div`
  border-radius: 20px;
  height: 100%;
  box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.252);
  background-color: white;
  width: 100%;
  max-width: 60%;
  padding: 20px;
  margin: 30px;
`;

export const DiaryForm = styled.form`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    padding: 1%;
    width: 90%;
    height: 20px;
    border-radius: 10px;
    font-size: 25px;
    border: solid rgba(128, 128, 128, 0.6) 1px;
  }
  textarea {
    padding: 1%;
    width: 90%;
    height: 380px;
    border-radius: 10px;
    border: solid rgba(128, 128, 128, 0.6) 1px;
  }
`;
