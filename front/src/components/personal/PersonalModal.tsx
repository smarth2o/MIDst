import { EmotionModalStyled } from "../../styles/diary/DiaryEmotionInfoModal";
import { PersonalModalStyled } from "../../styles/personal/PersonalModal";

const PersonalModal = (): JSX.Element => {
  return (
    <>
      <PersonalModalStyled>
        <ul>
          <li>이메일 변경</li>
          <hr></hr>
          <li>비밀번호 변경</li>
          <hr></hr>
          <li>회원 탈퇴</li>
        </ul>
      </PersonalModalStyled>
    </>
  );
};

export default PersonalModal;
