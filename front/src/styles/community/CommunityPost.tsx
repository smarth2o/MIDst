import styled from "styled-components";

export const CommunityPostAlignStyled = styled.div`
  width: 80%;
  padding: 3% 4% 6% 4%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  ul li {
    list-style: none;
  }
  p {
    margin-top: 80px;
  }
`;

export const CPContentStyled = styled.div`
  padding: 0px 4%;
  li {
    list-style: none;
  }
  .CPContent-title {
    text-align: center;
    margin: 5vh;
  }
`;
export const CPTopAlignStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CPTopInfoAlign = styled.div`
  display: flex;
  align-items: center;
  .postInfo {
    padding-right: 20px;
  }
`;

export const CommunityPostBtn = styled.div`
  padding-top: 40px;
`;
