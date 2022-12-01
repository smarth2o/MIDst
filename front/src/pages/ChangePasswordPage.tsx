import {
  Layout,
  Box,
  Form,
  Logo,
  Title,
  Input,
  Button,
  Text,
} from "../styles/Register.styled";
import { useState } from "react";

const ChangePasswordPage = (): JSX.Element => {
  const [changed, setChanged] = useState<boolean>(false);
  const handleChange = () => {
    setChanged(changed);
  };

  return (
    <Layout>
      <Box>
        <Form>
          <Logo></Logo>
          <Title>Change Password</Title>
          {changed ? (
            <Text>Your password has been changed successfully.</Text>
          ) : (
            <>
              <Input type="password" placeholder="Current password"></Input>
              <Input type="password" placeholder="New password"></Input>
              <Input type="password" placeholder="Confirm new password"></Input>
              <Button onClick={handleChange}>Change password</Button>
            </>
          )}
        </Form>
      </Box>
    </Layout>
  );
};

export default ChangePasswordPage;
