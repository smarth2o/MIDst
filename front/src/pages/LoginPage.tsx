import {
  Layout,
  Box,
  Form,
  Logo,
  Input,
  Button,
  OtherWrapper,
  FindButton,
  SignUpButton,
  Line,
} from "../styles/Register.styled";
import { ROUTES } from "../enum/routes";

const LoginPage = (): JSX.Element => {
  return (
    <Layout>
      <Box>
        <Form>
          <Logo>
            <img src={require("../mist.png")} alt="logo"></img>
            <p>MIDst</p>
          </Logo>
          <Line></Line>
          <Input type="email" placeholder="Email"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Button>Sign In</Button>
          <OtherWrapper>
            <FindButton to={ROUTES.USER.FIND_PW}>
              Forgot your Password?
            </FindButton>
            <SignUpButton to={ROUTES.USER.REGISTER}>Sign Up</SignUpButton>
          </OtherWrapper>
        </Form>
      </Box>
    </Layout>
  );
};

export default LoginPage;
