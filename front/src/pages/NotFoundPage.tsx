import {
  Layout,
  Box,
  Form,
  Text,
  Logo,
  Title,
  BottomWrapper,
  Button,
} from "../styles/Register.styled";
import { useNavigate } from "react-router";

const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Box>
        <Form>
          <Logo></Logo>
          <Title>
            죄송합니다. <br />
            요청하신 페이지를 찾을 수 없습니다.
          </Title>
          <Text>
            찾으시는 페이지의 주소가 잘못 입력되었거나, <br />
            변경 또는 삭제되어 사용할 수 없습니다.
          </Text>
          <BottomWrapper>
            <Button type="button" onClick={() => navigate(-1)}>
              이전 페이지로
            </Button>
            <Button type="button" onClick={() => navigate("/")}>
              홈으로
            </Button>
          </BottomWrapper>
        </Form>
      </Box>
    </Layout>
  );
};

export default NotFoundPage;
