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
import * as Api from "../api";
import { useNavigate } from "react-router-dom";

interface PasswordData {
  password: string;
  newpassword: string;
  confirmpassword: string;
}

const ChangePasswordPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [changed, setChanged] = useState<boolean>(false);

  const [password, setPassword] = useState<PasswordData>({
    password: "",
    newpassword: "",
    confirmpassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPassword({ ...password, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await Api.put("user/updateuserPassword", password);
      // console.log(res.data);
      // console.log("비밀번호 변경 성공");
      setChanged(true);
    } catch (err) {
      // console.log("비밀번호 변경 실패");
      alert("다시 시도해 주세요.");
      console.error(err);
    }
  };

  return (
    <Layout>
      <Box>
        <Form onSubmit={handleSubmit}>
          <Logo />
          <Title>Change Password</Title>
          {changed ? (
            <>
              <Text>Your password has been changed successfully.</Text>
              <Button onClick={() => navigate("/")}>Go to Main Page</Button>
            </>
          ) : (
            <>
              <Input
                type="password"
                name="password"
                placeholder="Current password"
                value={password.password}
                onChange={handleChange}
              ></Input>
              <Input
                type="password"
                name="newpassword"
                placeholder="New password"
                value={password.newpassword}
                onChange={handleChange}
              ></Input>
              <Input
                type="password"
                name="confirmpassword"
                placeholder="Confirm new password"
                value={password.confirmpassword}
                onChange={handleChange}
              ></Input>
              <Button type="submit">Change password</Button>
            </>
          )}
        </Form>
      </Box>
    </Layout>
  );
};

export default ChangePasswordPage;
