import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  BackBtnAlignStyled,
  BackBtnStyled,
} from "../../styles/common/CommonBtn";

export const BackBtn = (): JSX.Element => {
  return (
    <>
      <BackBtnStyled>
        <ArrowLeftOutlined />
        돌아가기
      </BackBtnStyled>
    </>
  );
};
