import { EmotionModalStyled } from "../../styles/diary/DiaryEmotionInfoModal";

const DiaryEmotionInfoModal = (): JSX.Element => {
  return (
    <>
      <EmotionModalStyled>
        <p>
          작성한 일기 내용을 분석하여 가장 잘 드러나는 감정 3개를 보여줍니다.
        </p>
      </EmotionModalStyled>
    </>
  );
};
export default DiaryEmotionInfoModal;
