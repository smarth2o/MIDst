import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ROUTES } from "../../enum/routes";
import {
  CommunityCreateAlign,
  CommunityCreateBtnAlignStyled,
  CommunityCreateStyled,
} from "../../styles/community/CommunityCreate";
import { CommunityPropsType } from "./CommunityList";
import * as Api from "../../api";
import dayjs from "dayjs";

const backPort = "8080";
const autoBaseUrl = window.location.hostname;
const serverUrl = `http://${autoBaseUrl}:${backPort}`;

const CommunityEdit = (): JSX.Element => {
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const navigate = useNavigate();
  const communityDetail = useParams();
  const updatedAt = dayjs();

  console.log(communityDetail);

  const onCancel = () => {
    if (window.confirm("작성을 취소 하시겠습니까?")) {
      navigate(ROUTES.COMMUNITY.ROOT);
    }
  };
  const postCommunityPost = async () => {
    try {
      const response = await Api.post(`posts`);
      console.log(response);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    postCommunityPost();
  }, []);

  const onEditFinish = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    await axios
      .post(`${serverUrl}/posts`, {
        id: 1,
        title: editTitle,
        description: editDescription,
        createdAt: updatedAt,
        updatedAt: updatedAt,
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    return navigate(ROUTES.COMMUNITY.ROOT);
  };

  return (
    <>
      <CommunityCreateAlign>
        <form onSubmit={onEditFinish}>
          <CommunityCreateStyled>
            <input
              className="community-create-title"
              placeholder="제목을 입력하세요."
            ></input>
            <input
              className="community-create-main"
              placeholder="내용을 입력하세요."
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

export default CommunityEdit;
