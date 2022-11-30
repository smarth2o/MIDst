import styled from "styled-components";

export const CommunityListAlignStyled = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

export const CommunityCardAlignStyled = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 0 4%;
  width: 80%;
  height: 100%;
  img {
    border-radius: 50px;
    width: 40px;
  }
  .title-profile-align {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li {
    list-style: none;
  }
  .profile-align {
    display: flex;
    align-items: center;
    h3 {
      padding-left: 5px;
    }
  }
  @media (min-width: 1500px) {
    width: 1200px;
  }
`;

export const CommunityInfo = styled.div`
  ul {
    padding: 0;
    display: flex;
  }
  ul li {
    padding: 10px;
  }
`;
