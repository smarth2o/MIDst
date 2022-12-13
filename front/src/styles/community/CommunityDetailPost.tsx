import styled from "styled-components";

export const CommunityPostBoxStyled = styled.div`
  display: flex;
  padding: 1% 0 20px 0;
  justify-content: space-around;
`;

export const CommunityCommentStyled = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const CommunityDetaillAllStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .community-detail-align {
    margin-top: 5vh;
    @media all and (min-width: 1000px) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 70vw;
    }
  }
`;
