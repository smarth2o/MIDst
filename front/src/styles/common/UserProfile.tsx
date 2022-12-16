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

    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      padding-left: 5px;
    }
  }
  img {
    width: 40px;
    margin-right: 10px;
    border-radius: 50px;
  }
`;
