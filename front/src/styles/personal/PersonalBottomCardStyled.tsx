import styled from "styled-components";

export const PBCardAlignStyled = styled.div`
  border-radius: 20px;
  height: 100%;
  min-height: 30rem;
  margin-top: 50px;
  margin-bottom: 80px;
  box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.252);
  background-color: white;
  padding: 5px 25px 20px 25px;
  width: 80%;
  ul {
    padding: 0;
  }
  .btn-go-search a {
    text-decoration: none;
    color: black;
  }
  .btn-go-search {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #eef1f4;
  }
  @media (min-width: 1500px) {
    width: 1200px;
  }
`;

export const PBCardTabStyled = styled.div`
  color: rgba(128, 128, 128, 0.604);
  display: flex;
  justify-content: space-between;
  ul {
    list-style: none;
    display: flex;
    padding: 2px;
  }
  li {
    padding: 10px;
    border-bottom: solid 1px rgba(128, 128, 128, 0.604);
  }
  li:hover {
    color: black;
    cursor: pointer;
    border-bottom: solid 2px black;
  }
  li:active {
    color: black;
    cursor: pointer;
    border-bottom: solid 2px black;
  }
  .is-active {
    color: black;
    cursor: pointer;
    border-bottom: solid 2px black;
  }
`;

export const PBCardItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 0.5px rgba(128, 128, 128, 0.652);
  margin: 10px;
  padding: 12px;
  border-radius: 10px;
  .cloudIcon {
    width: 30px;
    height: 15px;
    cursor: pointer;
  }
  button {
    border: none;
    background-color: white;
    &:active {
      border: none;
    }
  }
  span {
    cursor: pointer;
  }
`;
export const DGCheckCardStyled = styled.div`
  margin: 5% 2%;
  p {
    color: red;
  }
  .b-better {
    padding: auto 10px auto auto;
  }
  .grammer-result {
    box-sizing: border-box;
    background: #ffffff;
    padding: 20px 60px;
    border: 1px solid #999999;
    border-radius: 10px;
    padding-left: 10px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
  .gt {
    font-size: 30px;
  }
`;
export const PBCWordItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border: solid 0.5px rgba(128, 128, 128, 0.652);
  margin: 10px;
  padding: 12px;
  border-radius: 10px;
  .cloudIcon {
    width: 30px;
    height: 15px;
    cursor: pointer;
  }
  button {
    border: none;
    background-color: white;
    &:active {
      border: none;
    }
  }
`;

export const PBCardWordAlignStyled = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
