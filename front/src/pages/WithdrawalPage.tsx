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

const WithdrawalPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [changed, setChanged] = useState<boolean>(false);
  const [id, setId] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await Api.put(`user/resetPassword/${id}`, { withdrawal: 1 });
      console.log(res.data);
      console.log("회원탈퇴 성공");
      setChanged(true);
    } catch (err) {
      console.log("회원탈퇴 실패");
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
              <Title>Your account has been closed.</Title>
              <Text></Text>
              <Button onClick={() => navigate("/login")}>
                Go to Main Page
              </Button>
            </>
          ) : (
            <>
              <Title>Are you sure you want to close your account?</Title>
              <Text>
                Once it's closed, you won't be able to use this account or see
                your past records. This action can't be undone.
              </Text>
              <Input
                type="id"
                placeholder="ID"
                value={id}
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

export default WithdrawalPage;
