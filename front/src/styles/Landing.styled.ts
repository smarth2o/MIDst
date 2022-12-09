import styled from "styled-components";

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  margin-bottom: 10rem;
`;

export const ChatBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 2rem 2rem;
  margin: 5rem 5rem;

  backdrop-filter: blur(12px);
  border-radius: 30px;

  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 29px;
  text-align: center;

  transition: 0.4s;

  &.left-chat-box {
    align-self: flex-start;
    background: rgba(126, 114, 213, 0.4);
    color: #ffffff;
  }

  &.right-chat-box {
    align-self: flex-end;
    background: rgba(255, 255, 255, 0.6);
    color: #333333;
  }

  &.active {
    width: max-content;
    height: max-content;
    padding: 3rem 5rem;
    font-size: 20px;
  }
`;
