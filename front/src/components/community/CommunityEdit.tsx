import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, useNavigate, useParams } from "react-router";
import { ROUTES } from "../../enum/routes";
import {
  CommunityCreateAlign,
  CommunityCreateBtnAlignStyled,
  CommunityCreateStyled,
} from "../../styles/community/CommunityCreate";

import * as Api from "../../api";
import { Link } from "react-router-dom";

const CommunityEdit = (): JSX.Element => {
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();
  const communityDetail = useParams();

  const onCancel = () => {
    if (window.confirm("작성을 취소 하시겠습니까?")) {
      navigate(ROUTES.COMMUNITY.ROOT);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const currentUser = await Api.get(`user/currentUser`);
      if (currentUser.status !== 200) {
        console.log(currentUser);
      } else {
        setUserId(currentUser.data[0].userId);
      }
    };

    getUserData();
  }, []);
  useEffect(() => {
    const communityGetData = async () => {
      const response = await Api.get(
        `posts/${communityDetail.communityDetail}`
      );
      if (response.status !== 200) {
        console.log(response);
      } else {
        setEditTitle(response.data.data.title);
        setEditDescription(response.data.data.description);
        setUserId(response.data.data.userId);
      }
    };

    communityGetData();
  }, []);

  const communityPutData = async () => {
    const response = await Api.put(`posts/${communityDetail.communityDetail}`, {
      title: editTitle,
      description: editDescription,
    });
    if (response.status !== 200) {
      console.log(response);
    } else {
      navigate(`/community/${communityDetail.communityDetail}`);
    }
  };

  return (
    <>
      <CommunityCreateAlign>
        <form onSubmit={communityPutData}>
          <CommunityCreateStyled>
            <input
              className="community-create-title"
              placeholder="제목을 입력하세요."
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <input
              className="community-create-main"
              placeholder="내용을 입력하세요."
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <CommunityCreateBtnAlignStyled>
              <button onClick={onCancel}>취소</button>
              <Link to={ROUTES.COMMUNITY.ROOT}>
                <button type="submit" value="Submit" onClick={communityPutData}>
                  저장
                </button>
              </Link>
            </CommunityCreateBtnAlignStyled>
          </CommunityCreateStyled>
        </form>
      </CommunityCreateAlign>
    </>
  );
};

export default CommunityEdit;
