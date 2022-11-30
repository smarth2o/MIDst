import styled from "styled-components";
import background from "../pinkbrain.png";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background}) no-repeat center center;
  width: 100%;
  min-height: 100vh;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 138px;
`;

export const Suggestions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 827px;
`;

export const Suggest = styled.div`
  width: 184px;
  height: 42px;

  background: rgba(126, 114, 213, 0.7);
  backdrop-filter: blur(12px);

  border-radius: 30px;
`;

export const Search = styled.div`
  box-sizing: border-box;
  width: 927px;
  height: 75px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.9) 69.79%
  );
  border: 1px solid rgba(153, 153, 153, 0.5);
  border-radius: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Saira";
    font-weight: 600;
    font-size: 26px;
    line-height: 41px;
    text-align: center;

    color: #7e72d5;
  }
`;
