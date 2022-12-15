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
          <li className="link">
            <Link to={`/withdrawal`}>회원 탈퇴</Link>
          </li>
        </ul>
      </PersonalModalStyled>
    </>
  );
};

export default PersonalModal;
