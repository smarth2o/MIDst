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
import * as Api from "../api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginData {
  email: string;
  password: string;
}

const LoginPage = (): JSX.Element => {
  // const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await Api.post("user/login", form);

      // const user = res.data;
      // setUser({ email: user.email, password: user.password });
      // window.sessionStorage.setItem("email", user.email);

      console.log(res);
      navigate("/");
    } catch (err) {
      console.log("로그인 실패");
      console.error(err);
    }
  };

  return (
    <Layout>
      <Box>
        <Form onSubmit={handleSubmit}>
          <Logo />
          <Title>Sign In</Title>
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
          ></Input>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
          ></Input>
          <Button type="submit">Sign In</Button>
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
