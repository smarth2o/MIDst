import {
  DiaryBtn,
  DiaryCreateAlign,
  DiaryForm,
} from "../../styles/diary/DiaryCreate";
import * as Api from "../../api";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { ROUTES } from "../../enum/routes";

type onSubmitDiary = (e: React.MouseEvent) => void;

const DiaryCreate = (): JSX.Element => {
  const { detail } = useParams();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const date = dayjs();
  const navigator = useNavigate();

  const onSubmitDiary: onSubmitDiary = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post(`diaries`, {
        date: date.format("YYYY-MM-DD"),
        title: title,
        description: description,
      });
      if (window.confirm("제출이 완료되었습니다.")) {
        navigator(ROUTES.DIARY.ROOT);
      }
    } catch {
      console.log("제출 실패");
    }
  };

  return (
    <>
      <DiaryCreateAlign>
        <DiaryForm action="Submit">
          <input
            maxLength={20}
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
            placeholder="Write about your day..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <DiaryBtn>
            <Link to={ROUTES.DIARY.ROOT}>
              <button type="submit" value="Submit" onClick={onSubmitDiary}>
                SAVE
              </button>
            </Link>
          </DiaryBtn>
        </DiaryForm>
      </DiaryCreateAlign>
    </>
  );
};
export default DiaryCreate;
