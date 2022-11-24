import React from "react";
import styled from "styled-components";

export const PBCardAlign = styled.div`
  border-radius: 20px;
  height: 100%;
  margin-top: 10vmin;
  min-height: 30rem;
  margin-bottom: 10%;
  box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.252);
  background-color: white;
  padding: 20px;
  width: 80%;
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
`;

export const PBCardTab = styled.div`
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
  border: solid 0.5px rgba(128, 128, 128, 0.652);
  padding: 12px;
  border-radius: 10px;
`;
