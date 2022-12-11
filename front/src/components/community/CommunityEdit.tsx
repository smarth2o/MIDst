import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router";
import { ROUTES } from "../../enum/routes";
import {
  CommunityCreateAlign,
  CommunityCreateBtnAlignStyled,
  CommunityCreateStyled,
} from "../../styles/community/CommunityCreate";
import { CommunityPropsType } from "./CommunityList";
import * as Api from "../../api";

const backPort = "8080";
const autoBaseUrl = window.location.hostname;
const serverUrl = `http://${autoBaseUrl}:${backPort}`;

const CommunityEdit = (): JSX.Element => {
  const { communityItems, setCommunityItems } =
    useOutletContext<CommunityPropsType>();
  console.log(communityItems);
  const navigate = useNavigate();
  const communityDetail = useParams();
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

  // useEffect(() => {

  // },[communityDetail])

  useEffect(() => {
    postCommunityPost();
  }, []);

  const onCommunityFinish = async (value: CommunityPropsType) => {
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
            ></input>
            <input
              className="community-create-main"
              placeholder="내용을 입력하세요."
            ></input>
            <CommunityCreateBtnAlignStyled>
              <button onClick={onCancel}>삭제</button>
              <button type="submit">저장</button>
            </CommunityCreateBtnAlignStyled>
          </CommunityCreateStyled>
        </form>
      </CommunityCreateAlign>
    </>
  );
};

export default CommunityEdit;
