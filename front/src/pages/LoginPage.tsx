import {
  Layout,
  Box,
  Form,
  Logo,
  Input,
  Button,
  BottomWrapper,
  OtherButton,
  Title,
} from "../styles/Register.styled";
import { ROUTES } from "../enum/routes";

const LoginPage = (): JSX.Element => {
  return (
    <Layout>
      <Box>
        <Form>
          <Logo></Logo>
          <Title>Sign In</Title>
          <Input type="email" placeholder="Email address"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Button>Sign In</Button>
          <BottomWrapper>
            {/* <OtherButton to={ROUTES.USER.FIND_PW}>
              Forgot your Password?
            </OtherButton> */}
            <p>Don't have an account?</p>
            <OtherButton to={ROUTES.USER.REGISTER}>Sign Up</OtherButton>
          </BottomWrapper>
        </Form>
      </Box>
    </Layout>
  );
};

export default LoginPage;
