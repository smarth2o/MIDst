import styled from "styled-components";

export const ReplyLiStyled = styled.div`
  ul {
    list-style: none;
  }
  .reply-user-info {
    display: flex;
    li {
      padding-right: 20px;
    }
    .userId {
      font-weight: bolder;
    }
    .createdAt {
      color: gray;
    }
  }
`;
