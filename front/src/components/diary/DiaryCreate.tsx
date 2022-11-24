import React from "react";
import { DiaryCreateAlign, DiaryForm } from "../../styles/diary/DiaryCreate";
import moment from "moment";
import { Input } from "antd";

const { TextArea } = Input;

const DiaryCreate = (): JSX.Element => {
  const nowDate = moment().format("MMM Do YY");
  return (
    <>
      <DiaryCreateAlign>
        <p>{nowDate}</p>
        <DiaryForm action="">
          <input maxLength={20} placeholder="Title" />
          <br />
          <textarea />
        </DiaryForm>
        <button>SAVE</button>
        <button>DELETE</button>
      </DiaryCreateAlign>
    </>
  );
};
export default DiaryCreate;
