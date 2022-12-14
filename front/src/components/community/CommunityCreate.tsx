import React from "react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ROUTES } from "../../enum/routes";
import * as Api from "../../api";
import {
  CommunityCreateAlign,
  CommunityCreateBtnAlignStyled,
  CommunityCreateStyled,
} from "../../styles/community/CommunityCreate";

const CommunityCreate = (): JSX.Element => {
  const [communityTitle, setCommunityTitle] = useState("");
  const [communityContent, setCommunityContent] = useState("");
  const [id, setId] = useState(0);
  const [nowAuthorId, setNowAuthorId] = useState("");
  const [currrentName, setCurrentName] = useState("");
  const createdAt = dayjs();

  const navigate = useNavigate();
  const onCancel = () => {
    if (window.confirm("작성을 취소 하시겠습니까?")) {
      navigate(ROUTES.COMMUNITY.ROOT);
    }
  };
  const onSubmit = () => {
    onFinish();
    navigate(ROUTES.COMMUNITY.ROOT);
  };

  useEffect(() => {
    const getUserData = async () => {
      const currentUser = await Api.get(`user/currentUser`);
      if (currentUser.status !== 200) {
        console.log(currentUser);
      } else {
        console.log(currentUser.data[0]);
        setNowAuthorId(currentUser.data[0].userId);
        setCurrentName(currentUser.data[0].name);
      }
    };

    getUserData();
  }, []);

  const onFinish = async () => {
    const response = await Api.post(`posts`, {
      id: id,
      userId: nowAuthorId,
      name: currrentName,
      title: communityTitle,
      description: communityContent,
      createdAt: createdAt,
      updatedAt: createdAt,
    });
    if (response.status !== 200) {
      console.log(communityTitle);
    } else {
      console.log("입력", response.data);
    }
    console.log("입력", response);
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
              <button type="submit" value="Submit" onClick={onSubmit}>
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
