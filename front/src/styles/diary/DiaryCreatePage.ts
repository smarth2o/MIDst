import styled from "styled-components";

export const AllBackGroundStyled = styled.div`
  height: 100%;
  margin: 30px 0 0 0;
  padding-bottom: 5%;
`;
export const DiaryAllAlign = styled.div`
  display: flex;
  justify-content: space-around;
  .diary-align-styled {
    @media all and (min-width: 800px) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 70vw;
    }
  }
`;
export const DiaryAlignStyled = styled.div`
  display: flex;
  justify-content: space-around;
  .diary-content {
    display: flex;
  }
`;
export const DiaryMainStyled = styled.div`
  display: flex;
  width: 50vw;
  flex-direction: column;
  /* margin-left: 5vw; */
`;
