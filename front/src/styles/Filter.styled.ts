import styled from "styled-components";
import refresh from "../assets/refresh.svg";
import arrowUp from "../assets/arrowUp.svg";
import arrowDown from "../assets/arrowDown.svg";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8rem 3rem 0 4rem;
`;

export const FilterBox = styled.div`
  min-width: 200px;
  width: fit-content;
  padding: 0.5em 1em;
  margin-bottom: 1.5em;
  flex: display;
  flex-direction: column;
  align-items: center;

  background: #ffffff;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const FilterTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0.5em;
  position: relative;

  h2 {
    font-family: "Saira";
    font-weight: 600;
    font-size: 18px;
    color: #333333;
    margin: 0;
  }

  h3 {
    font-family: "Saira";
    font-weight: 600;
    font-size: 16px;
    color: #999999;
    margin: 0;
  }
`;

export const FilterContentWrapper = styled.ul`
  list-style-type: none;
  padding: 1em;
  margin: 0;

  li {
    margin-bottom: 0.2em;
    position: relative;
  }

  label {
    display: block;
    cursor: pointer;
    font-family: "Saira";
    color: #333333;
  }

  input {
    margin-right: 0.8em;
  }
`;

export const Button = styled.button`
  padding: 0.5em;
  position: absolute;
  right: 0;

  border: none;
  background-color: transparent;
  border-radius: 10px;

  cursor: pointer;
  :hover {
    background-color: rgba(153, 153, 153, 0.1);
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  background-color: transparent;
`;

export const FilterIcon = styled(Icon).attrs({
  src: refresh,
  alt: "refresh",
})``;

export const DownIcon = styled(Icon).attrs({
  src: arrowDown,
  alt: "arrowDown",
})``;

export const UpIcon = styled(Icon).attrs({
  src: arrowUp,
  alt: "arrowUp",
})``;

export const SearchButton = styled.button`
  padding: 0.5em;
  margin-top: 0.8em;
  margin-bottom: 5rem;

  background: #7ec9ca;
  border: none;
  border-radius: 20px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);

  font-family: "Saira";
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;

  :hover {
    background-color: #69abac;
  }
  :active {
    box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.1);
  }
`;
