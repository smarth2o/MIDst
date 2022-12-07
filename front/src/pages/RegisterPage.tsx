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

interface RegisterData {
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
}

const RegisterPage = (): JSX.Element => {
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

  return (
    <Layout>
      <Box>
        <Form>
          <Logo />
          <Title>Register</Title>
          <Input
            type="text"
            name="name"
            placeholder="ID"
            value={form.name}
            onChange={handleChange}
          ></Input>
          <SmallWrapper>
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="off"
              value={form.email}
              onChange={handleChange}
            ></Input>
            <SmallButton>Send</SmallButton>
          </SmallWrapper>
          <SmallWrapper>
            <Input type="text" placeholder="Verification Code"></Input>
            <SmallButton>Verify</SmallButton>
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
          <Button>Sign Up</Button>
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
