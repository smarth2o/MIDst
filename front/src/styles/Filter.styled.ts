import styled from "styled-components";
import refresh from "../assets/refresh.svg";
import arrowUp from "../assets/arrowUp.svg";
import arrowDown from "../assets/arrowDown.svg";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  margin-left: 4rem;
  margin-right: 3rem;
`;

export const FilterTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;

  h2 {
    font-family: "Saira";
    font-weight: 600;
    font-size: 18px;
    color: #333333;
  }

  h3 {
    font-family: "Saira";
    font-weight: 600;
    font-size: 16px;
    color: #999999;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  :hover {
  }
`;

export const FilterIcon = styled.img.attrs({
  src: refresh,
  alt: "refresh",
})`
  width: 20px;
  height: 20px;
  background-color: transparent;
`;

export const DownIcon = styled.img.attrs({
  src: arrowDown,
  alt: "arrowDown",
})`
  width: 22px;
  height: 22px;
  background-color: transparent;
`;

export const FilterBox = styled.div`
  min-width: 200px;
  width: fit-content;

  background: #ffffff;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  padding: 0.5em 1em;
  margin-bottom: 1.5em;

  flex: display;
  flex-direction: column;
  align-items: center;

  ul {
    list-style-type: none;
  }
`;
