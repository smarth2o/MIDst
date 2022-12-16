import styled from "styled-components";

// export const CreateDiaryBtn = styled.button`
//   text-align: center;
//   width: 50px;
//   min-height: 50px;
//   max-width: 50px;
//   height: 100%;
//   background-color: none;
//   border: solid 1.5px #6e48eb7e;
//   border-radius: 50px;
//   color: #6f48eb;

//   :hover {
//     background-color: #6e48eb20;
//   }
// `;

export const CreateDiaryBtn = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    width: 120px;
    height: 42px;
    padding: 10px 15px;
    gap: 2px;
    background: #ffffff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: none;
    cursor: pointer;
  }
`;

export const DiaryDetailAlignStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 10px;
  padding-top: 70px;
  a {
    background-color: none;
    text-decoration: none;
    font-size: 25px;
    color: #6f48eb;
  }
`;
