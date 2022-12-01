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
} from "../styles/Register.styled";
import { ROUTES } from "../enum/routes";
import { useState } from "react";

interface RegisterData {
  ID: string;
  email: string;
  password: string;
}

const RegisterPage = (): JSX.Element => {
  const [formData, setFormData] = useState<RegisterData>({
    ID: "",
    email: "",
    password: "",
  });
  return (
    <Layout>
      <Box>
        <Form>
          <Logo></Logo>
          <Title>Register</Title>
          <Input type="text" placeholder="ID" value={formData.ID}></Input>
          <Input
            type="email"
            placeholder="Email address"
            autoComplete="off"
            value={formData.email}
          ></Input>
          <Input type="text" placeholder="Verification Code"></Input>
          <Input
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={formData.password}
          ></Input>
          <Input type="password" placeholder="Password Confirm"></Input>
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
