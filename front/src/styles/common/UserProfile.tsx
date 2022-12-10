import styled from "styled-components";

export const UserProfileStyled = styled.div`
  li h3 {
    color: black;
  }
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  li {
    list-style: none;
  }
  .profile-align {
    width: 200px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h4 {
      padding-left: 5px;
    }
  }
  img {
    width: 40px;
    border-radius: 50px;
  }
`;
