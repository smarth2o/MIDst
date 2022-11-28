import React from "react";
import {
  DiaryBtn,
  DiaryCreateAlign,
  DiaryForm,
} from "../../styles/diary/DiaryCreate";
import moment from "moment";

const onSubmitDiary = () => {
  alert("제출이 완료되었습니다.");
};

const DiaryCreate = (): JSX.Element => {
  const nowDate = moment().format("MMM Do YY");
  return (
    <>
      <DiaryCreateAlign>
        <p>{nowDate}</p>
        <DiaryForm action="" onSubmit={onSubmitDiary}>
          <input maxLength={20} placeholder="Title" />
          <br />
          <textarea placeholder="Write about your day..." />
          <DiaryBtn>
            <button onSubmit={onSubmitDiary}>SAVE</button>
            {/* <button>DELETE</button> */}
          </DiaryBtn>
        </DiaryForm>
      </DiaryCreateAlign>
    </>
  );
};
export default DiaryCreate;
