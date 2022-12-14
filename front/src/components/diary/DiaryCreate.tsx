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

const DiaryCreate = (): JSX.Element => {
  const { communityDetail } = useParams();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const date = dayjs();
  const navigator = useNavigate();

  const onSubmitDiary = () => {
    const DiaryPost = async () => {
      const diaryPost = await Api.post(`diaries`, {
        date: date.format("YYYY-MM-DD"),
        title: title,
        description: description,
      });
      if (diaryPost.status !== 200) {
        console.log(diaryPost);
      } else {
        console.log(diaryPost.data.data);
        //navigator()
        alert("제출이 완료되었습니다.");
        navigator(-1);
      }
    };
    DiaryPost();
  };
  const getDiaryData = async () => {
    const response = await Api.get(`diaries`);
    if (response.status !== 200) {
      console.log(response);
    } else {
    }
  };
  useEffect(() => {
    getDiaryData();
  }, []);

  return (
    <>
      <DiaryCreateAlign>
        <DiaryForm action="Submit" onSubmit={onSubmitDiary}>
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
            {/* <button>DELETE</button> */}
          </DiaryBtn>
        </DiaryForm>
      </DiaryCreateAlign>
    </>
  );
};
export default DiaryCreate;
