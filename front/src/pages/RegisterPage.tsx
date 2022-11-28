import { Layout, Box, Form, Input, Button } from "../styles/Register.styled";

const RegisterPage = (): JSX.Element => {
  return (
    <Layout>
      <Box>
        <Form>
          <h3>Register</h3>
          <Input type="email" placeholder="Email"></Input>
          <Input type="email" placeholder="ID"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Input type="password" placeholder="Password again"></Input>
          <Button>Sign Up</Button>
        </Form>
      </Box>
    </Layout>
  );
};

export default RegisterPage;
