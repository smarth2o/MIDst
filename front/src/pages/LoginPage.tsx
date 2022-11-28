import { Layout, Box, Form, Input, Button } from "../styles/Register.styled";

const LoginPage = (): JSX.Element => {
  return (
    <Layout>
      <Box>
        <Form>
          <h3>Login</h3>
          <Input type="email" placeholder="Email"></Input>
          <Input type="password" placeholder="Password"></Input>
          <Button>Sign In</Button>
        </Form>
      </Box>
    </Layout>
  );
};

export default LoginPage;
