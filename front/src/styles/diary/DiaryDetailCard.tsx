import styled from "styled-components";

export const DiaryDetailBtn = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  .gray-btn {
    background: #eef1f4;
    margin-left: 20px;
    border-radius: 24px;
    padding: 9px 24px;
    gap: 10px;
    border: none;
    cursor: pointer;
    :hover {
      background: #d6d9dc;
    }
  }
`;

export const DiaryDetailCardAlignStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;
`;

export const DiaryDetailText = styled.div`
  display: grid;
  grid-template-rows: 20px 1fr 40vh;
`;
