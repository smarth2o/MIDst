import {
  Layout,
  Box,
  Form,
  Logo,
  Title,
  Input,
  Button,
  BottomWrapper,
  OtherButton,
  SmallButton,
  SmallWrapper,
} from "../styles/Register.styled";
import { ROUTES } from "../enum/routes";
import { useState } from "react";
import * as Api from "../api";
import { useNavigate } from "react-router-dom";

interface RegisterData {
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
}

const RegisterPage = (): JSX.Element => {
  const navigate = useNavigate();

  const [form, setForm] = useState<RegisterData>({
    email: "",
    password: "",
    confirmpassword: "",
    name: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleValidID = async () => {};

  const handleValidEmail = async () => {
    try {
      await Api.post("user/register/email", form.email);
    } catch (err) {
      console.log("이메일 전송 에러");
    }
  };

  const handleValidCode = async () => {};

  const handleValidPassword = async () => {
    if (form.password === form.confirmpassword) {
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await Api.post("user/register", form);
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log("회원가입 실패");
      console.error(err);
    }
  };

  return (
    <Layout>
      <Box>
        <Form onSubmit={handleSubmit}>
          <Logo />
          <Title>Register</Title>
          <SmallWrapper>
            <Input
              type="text"
              name="name"
              placeholder="ID"
              value={form.name}
              onChange={handleChange}
            ></Input>
            <SmallButton onClick={handleValidID}>Check</SmallButton>
          </SmallWrapper>
          <SmallWrapper>
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="off"
              value={form.email}
              onChange={handleChange}
            ></Input>
            <SmallButton onClick={handleValidEmail}>Send</SmallButton>
          </SmallWrapper>
          <SmallWrapper>
            <Input type="text" placeholder="Verification Code"></Input>
            <SmallButton onClick={handleValidCode}>Verify</SmallButton>
          </SmallWrapper>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
          ></Input>
          <Input
            type="password"
            name="confirmpassword"
            placeholder="Password Confirm"
            value={form.confirmpassword}
            onChange={handleChange}
          ></Input>
          <Button type="submit" onClick={handleValidPassword}>
            Sign Up
          </Button>
          <BottomWrapper>
            <p>Already have an account?</p>
            <OtherButton to={ROUTES.USER.LOGIN}>Sign in</OtherButton>
          </BottomWrapper>
        </Form>
      </Box>
    </Layout>
  );
};

export default RegisterPage;
