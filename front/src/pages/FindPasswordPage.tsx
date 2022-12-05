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

const FindPasswordPage = (): JSX.Element => {
  const [changed, setChanged] = useState<boolean>(false);
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    setChanged(changed);
  };

  return (
    <Layout>
      <Box>
        <Form>
          <Logo></Logo>
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
              <Input type="email" placeholder="Email address"></Input>
              <Button onClick={handleChange}>Continue</Button>
            </>
          )}
        </Form>
      </Box>
    </Layout>
  );
};

export default FindPasswordPage;
