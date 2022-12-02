import styled from "styled-components";

export const CalendarAlign = styled.div`
  border-radius: 20px;
  height: 100%;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.252);
  background-color: white;
  width: 100%;
  max-width: 30vmin;
  height: 280px;
  padding: 20px;
  margin: 30px;
`;

export const DiaryListAlign = styled.div`
  border-radius: 20px;
  height: 100%;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.252);
  background-color: white;
  width: 100%;
  max-width: 30vmin;
  height: 500px;
  padding: 20px;
  margin: 30px;

  white-space: nowrap;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DiarySideAlign = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: black;
    text-decoration: none;
  }
`;

export const DiaryItemStyled = styled.div`
  padding-bottom: 15px;
  div {
    border: 1px solid #999999;
    border-radius: 10px;
    padding: 10px;
    color: gray;
  }
`;
