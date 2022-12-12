import dayjs from "dayjs";
import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../enum/routes";
import {
  CommunityCreateAlign,
  CommunityCreateBtnAlignStyled,
  CommunityCreateStyled,
} from "../../styles/community/CommunityCreate";
import * as Api from "../../api";
import { CommunityPropsType } from "./CommunityList";

const CommunityCreate = (): JSX.Element => {
  const [communityTitle, setCommunityTitle] = useState("");
  const [communityContent, setCommunityContent] = useState("");
  const createdAt = dayjs();

  const navigate = useNavigate();
  const onCancel = () => {
    if (window.confirm("작성을 취소 하시겠습니까?")) {
      navigate(ROUTES.COMMUNITY.ROOT);
    }
  };

  useEffect(() => {}, []);

  const onFinish = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);

    const response = await Api.post(`posts`, {
      id: 1,
      userId: "2",
      title: communityTitle,
      description: communityContent,
      createdAt: createdAt,
      updatedAt: createdAt,
    });
    if (response.status !== 200) {
      return console.log(response.status);
    } else {
      console.log("성공:", response.data);
    }
    navigate(ROUTES.COMMUNITY.ROOT);
  };

  return (
    <>
      <CommunityCreateAlign>
        <form onSubmit={onFinish}>
          <CommunityCreateStyled>
            <input
              className="community-create-title"
              placeholder="제목을 입력하세요."
              type="title"
              value={communityTitle}
              onChange={(e) => setCommunityTitle(e.target.value)}
            ></input>
            <input
              className="community-create-main"
              placeholder="내용을 입력하세요."
              value={communityContent}
              onChange={(e) => setCommunityContent(e.target.value)}
            ></input>
            <CommunityCreateBtnAlignStyled>
              <button onClick={onCancel}>삭제</button>
              <button type="submit" value="Submit">
                저장
              </button>
            </CommunityCreateBtnAlignStyled>
          </CommunityCreateStyled>
        </form>
      </CommunityCreateAlign>
    </>
  );
};

export default CommunityCreate;
