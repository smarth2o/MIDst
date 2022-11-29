import {
  Layout,
  Box,
  Form,
  Logo,
  Input,
  Button,
  OtherWrapper,
  SignUpButton,
  Line,
} from "../styles/Register.styled";
import { ROUTES } from "../enum/routes";

const RegisterPage = (): JSX.Element => {
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
          <Input type="text" placeholder="ID"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Input type="password" placeholder="Password Confirm"></Input>
          <Button>Sign Up</Button>
          <OtherWrapper>
            <p>Already have an account?</p>
            <SignUpButton to={ROUTES.USER.LOGIN}>Sign In</SignUpButton>
          </OtherWrapper>
        </Form>
      </Box>
    </Layout>
  );
};

export default RegisterPage;
