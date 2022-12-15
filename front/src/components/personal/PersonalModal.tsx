import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../enum/routes";
import { PersonalModalStyled } from "../../styles/personal/PersonalModal";
import * as Api from "../../api";
import { useEffect, useState } from "react";

const PersonalModal = (): JSX.Element => {
  const [userId, setUserId] = useState("");

  const navigator = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await Api.get(`user/currentUser`);
      if (res.status !== 200) {
        console.log("탈퇴실패");
      } else {
        setUserId(res.data[0].userId);
        console.log(res.data[0].userId);
      }
    };
    getUserInfo();
  }, []);

  const withDrawal = async () => {
    if (window.confirm("탈퇴하시겠습니까?")) {
      const response = await Api.put(`user/withdrawal/?id=${userId}`, {
        withDrawal: 1,
      });
      if (response.status !== 200) {
        console.log("탈퇴실패");
      } else {
        console.log("탈퇴완료");
        navigator("/");
      }
    }
  };
  return (
    <>
      <PersonalModalStyled>
        <ul>
          <li>
            <Link to={ROUTES.USER.CHANGE_PW} className="link">
              비밀번호 변경
            </Link>
          </li>
          <hr></hr>
          <li onClick={withDrawal} className="link">
            회원 탈퇴
          </li>
        </ul>
      </PersonalModalStyled>
    </>
  );
};

export default PersonalModal;
