import {
  Layout,
  Box,
  Form,
  Text,
  Logo,
  Title,
  Input,
  Button,
} from "../styles/Register.styled";
import { useState } from "react";
import * as Api from "../api";

const FindPasswordPage = (): JSX.Element => {
  const [changed, setChanged] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await Api.post("user/resetPassword", email);
      console.log(res);
      setChanged(true);
    } catch (err) {
      console.log("비밀번호 변경 실패");
      console.error(err);
    }
  };

  return (
    <Layout>
      <Box>
        <Form onSubmit={handleSubmit}>
          <Logo />
          {changed ? (
            <>
              <Title>Check your email</Title>
              <Text>
                Verification code has been sent to your email address.
              </Text>
            </>
          ) : (
            <>
              <Title>Forgot your password?</Title>

              <Text>
                Please enter your email address. <br />
                You will receive a verification code via email.
              </Text>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleChange}
              ></Input>
              <Button type="submit">Continue</Button>
            </>
          )}
        </Form>
      </Box>
    </Layout>
  );
};

export default FindPasswordPage;
