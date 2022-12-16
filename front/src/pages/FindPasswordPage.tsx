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
import { useNavigate } from "react-router-dom";
import * as Api from "../api";

const FindPasswordPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [changed, setChanged] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await Api.post("user/resetPassword", { email: email });
      alert("입력하신 이메일로 인증번호를 보냈습니다.");
      setChanged(true);
    } catch (err) {
      alert("다시 입력해 주세요.");
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
              <Button onClick={() => navigate("/login")}>
                Sign In with temporary password
              </Button>
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
