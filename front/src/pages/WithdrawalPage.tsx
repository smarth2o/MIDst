import {
  Layout,
  Box,
  Form,
  Text,
  Logo,
  Title,
  Button,
} from "../styles/Register.styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../api";
import { userState } from "../stores/UserAtom";
import { useSetRecoilState } from "recoil";

const WithdrawalPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [changed, setChanged] = useState<boolean>(false);
  const [id, setId] = useState();
  const setUserLogin = useSetRecoilState(userState);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const res = await Api.get("user/currentUser");
        setId(res.data[0].userId);
      } catch (err) {
        // console.log("현재 유저 가져오기 실패");
        console.log(err);
      }
    };
    getCurrentUser();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await Api.put(`user/withdrawal/${id}`, { withdrawal: 1 });
      // console.log("회원탈퇴 성공");
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("refreshToken");
      setUserLogin(false);
      setChanged(true);
    } catch (err) {
      // console.log("회원탈퇴 실패");
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
              <Button onClick={() => navigate("/")}>Go to Main Page</Button>
            </>
          ) : (
            <>
              <Title>Are you sure you want to close your account?</Title>
              <Text>
                Once it's closed, you won't be able to use this account or see
                your past records. This action can't be undone.
              </Text>
              <Button>Continue</Button>
            </>
          )}
        </Form>
      </Box>
    </Layout>
  );
};

export default WithdrawalPage;
