import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { ROUTES } from "../../enum/routes";
import {
  CommunityCreateAlign,
  CommunityCreateBtnAlignStyled,
  CommunityCreateStyled,
} from "../../styles/community/CommunityCreate";
import { CommunityPropsType } from "./CommunityList";

const backPort = "8080";
const autoBaseUrl = window.location.hostname;
const serverUrl = `http://${autoBaseUrl}:${backPort}`;

const CommunityCreate = (): JSX.Element => {
  const navigate = useNavigate();

  const postCommunityPost = async () => {
    try {
      const response = await axios.post(`${serverUrl}/posts`);
      console.log(response);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {}, []);

  useEffect(() => {
    postCommunityPost();
  }, []);

  const onFinish = async (value: CommunityPropsType) => {
    console.log(value);

    await axios
      .post(`${serverUrl}/posts`, {
        id: value.id,
        title: value.title,
        description: value.description,
        createdAt: value.createdAt,
        updatedAt: value.createdAt,
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
        <form>
          <CommunityCreateStyled>
            <input
              className="community-create-title"
              placeholder="제목을 입력하세요."
              // onChange={(e)=>set}
            ></input>
            <input
              className="community-create-main"
              placeholder="내용을 입력하세요."
            ></input>
            <CommunityCreateBtnAlignStyled>
              <button>삭제</button>
              <button type="submit">저장</button>
            </CommunityCreateBtnAlignStyled>
          </CommunityCreateStyled>
        </form>
      </CommunityCreateAlign>
    </>
  );
};

export default CommunityCreate;
