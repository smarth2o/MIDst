import styled from "styled-components";

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

const ChatBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 3rem 5rem;
  margin: 5rem 10rem;

  backdrop-filter: blur(12px);
  border-radius: 30px;

  font-family: "Inter";
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  .active {
    width: max-content;
    height: max-content;
    color: red;
  }
`;

export const LeftChatBox = styled(ChatBox)`
  align-self: flex-start;
  background: rgba(126, 114, 213, 0.4);
  color: #ffffff;
`;

export const RightChatBox = styled(ChatBox)`
  align-self: flex-end;
  background: rgba(255, 255, 255, 0.6);
  color: #333333;
`;
