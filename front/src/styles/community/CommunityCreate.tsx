import styled from "styled-components";

export const CommunityCreateAlign = styled.div`
  padding-top: 3%;
  display: flex;
  justify-content: center;
`;

export const CommunityCreateStyled = styled.div`
  display: grid;
  grid-template-rows: 70px 50vh 50px;
  justify-content: center;
  background: #fffdfd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 80vw;
  max-height: 784px;
  height: 100%;
  padding: 30px;
  input {
    width: 80vw;
  }
  .community-create-title {
    margin-top: 3%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #999999;
    @media (min-width: 1200px) {
      width: 1200px;
    }
  }
  .community-create-main {
    border-radius: 10px;
    border: 1px solid #999999;
    margin: 2% 0 2% 0;
    @media (min-width: 1200px) {
      width: 1200px;
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const CommunityCreateBtnAlignStyled = styled.div`
  display: flex;
  flex-direction: row-reverse;
  button {
    margin-left: 15px;
    width: 74px;
    height: 30px;
    background: #eef1f4;
    border-radius: 24px;
    align-items: center;
    border: none;
    gap: 10px;
    cursor: pointer;
    :hover {
      background: #c8cccf;
    }
  }
`;
