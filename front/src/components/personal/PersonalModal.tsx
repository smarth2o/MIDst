import { Link } from "react-router-dom";
import { ROUTES } from "../../enum/routes";
import { PersonalModalStyled } from "../../styles/personal/PersonalModal";

const PersonalModal = (): JSX.Element => {
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
            <Link to={`/withdrawal`} className="link">
              회원 탈퇴
            </Link>
          </li>
        </ul>
      </PersonalModalStyled>
    </>
  );
};

export default PersonalModal;
