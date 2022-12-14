import styled from "styled-components";

export const PersonalModalStyled = styled.div`
  z-index: 10000;
  position: absolute;
  left: 17vw;
  top: 15vh;
  width: 200px;
  height: 140px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  ul {
    padding: 5px;
    list-style: none;
  }
  li {
    text-align: start;
  }
  .link {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
