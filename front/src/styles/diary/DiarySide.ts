import styled from "styled-components";

export const CalendarAlign = styled.div`
  border-radius: 20px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 20px;
  margin: 30px;
`;

export const DiaryListAlign = styled.div`
  border-radius: 20px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  max-width: 50vmin;
  height: 500px;
  padding: 30px;
  margin: 30px;

  white-space: nowrap;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DiarySideAlign = styled.div`
  // margin-top: 50px;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    text-decoration: none;
  }
`;

export const DiaryItemStyled = styled.div`
  padding-bottom: 15px;
  b {
    margin: 5px;
  }
  div {
    border: 1px solid #999999;
    border-radius: 10px;
    padding: 10px;
    color: #333333;
    margin: 5px 0px;
  }
`;
