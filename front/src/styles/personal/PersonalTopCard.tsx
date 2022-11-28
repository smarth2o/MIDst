import React from "react";
import styled from "styled-components";

export const PTCardAlign = styled.div`
  // 기본축을 세로로 변경
  grid-auto-flow: column;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.252);
  background-color: white;
  width: 100%;
  min-width: 300px;
  height: 280px;
  padding: 20px;
  margin: 30px;

  .PTItem2 {
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
  .wrap-vertical::-webkit-scrollbar {
    display: none;
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
  .card-align-ul {
    list-style: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
    text-align: start;
  }
  .card-align-li {
    margin: 30px;
  }
  .card-align-li li:nth-child(2) {
    margin-top: 15px;
    text-align: end;
  }
`;

export const PTCardContainer = styled.div`
  display: flex;
  white-space: nowrap;
  text-align: center;
  width: 100%;
  height: 100%;

  /* padding: 20px; */
  /* overflow: scroll; */
  /* 가로 스크롤 */
  overflow: auto;
  white-space: nowrap;
  .wrap-vertical::-webkit-scrollbar {
    display: none;
  }
`;

export const PTCalendar = styled.div`
  .react-calendar {
    width: 300px;
    margin: 0;
    max-width: 100%;
    background-color: #fff;
    color: gray;
    border: none;
    border-radius: 8px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar__navigation button {
    color: gray;
    min-width: 44px;
    background: none;
    font-size: 15px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #6f48eb;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 100px;
  }
  .react-calendar__tile--now {
    background: #6f48eb33;
    border-radius: 100px;
    font-weight: bold;
    color: #988dba;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #6f48eb33;
    border-radius: 100px;
    font-weight: bold;
    color: #6f48eb;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }
  .react-calendar__tile--active {
    background: #6f48eb;
    border-radius: 100px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #6f48eb;
    color: white;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }
  .react-calendar__tile--range {
    background: #f8f8fa;
    color: #6f48eb;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    background: #6f48eb;
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    background: #6f48eb;
    color: white;
  }
`;

export const PTBtn = styled.div`
  button {
    padding: 15px;
    border-radius: 5px;
    border: none;
    margin-top: 20px;
    background-color: rgba(127, 202, 203, 1);
    color: white;
  }
`;
