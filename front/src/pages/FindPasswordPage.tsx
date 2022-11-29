import {
  Layout,
  Box,
  Form,
  Text,
  Logo,
  Input,
  Button,
  Line,
} from "../styles/Register.styled";

const FindPasswordPage = (): JSX.Element => {
  return (
    <Layout>
      <Box>
        <Form>
          <Logo>
            <img src={require("../mist.png")} alt="logo"></img>
            <p>MIDst</p>
          </Logo>
          <Line></Line>
          <Text>
            <span>Please enter your ID and Email address</span>
            <p>
              Verification code will be sent to you via the Email address you
              chose.
            </p>
          </Text>
          <Input type="email" placeholder="Email"></Input>
          <Button>Continue</Button>
        </Form>
      </Box>
    </Layout>
  );
};

export default FindPasswordPage;
