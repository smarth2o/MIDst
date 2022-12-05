import styled from "styled-components";

export const LeftChatBox = styled.div`
  //   width: fit-content;
  //   height: fit-content;
  width: 400px;
  height: 300px;

  background: rgba(126, 114, 213, 0.4);
  backdrop-filter: blur(12px);
  border-radius: 30px;

  .active {
    width: max-content;
    height: max-content;
    color: red;
  }
`;

export const RightChatBox = styled.div`
  //   width: fit-content;
  //   height: fit-content;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 30px;

  .active {
    width: max-content;
    height: max-content;
    color: red;
  }
`;
