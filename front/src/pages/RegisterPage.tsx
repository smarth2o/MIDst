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
import { useNavigate } from "react-router-dom";
import * as Api from "../api";

interface RegisterData {
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
}

const RegisterPage = (): JSX.Element => {
  const navigate = useNavigate();

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

  const [inputCode, setInputCode] = useState("");

  const handleCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(event.target.value);
  };

  const [verifi, setVerifi] = useState(false);
  const [answer, setAnswer] = useState();

  const handleValidID = async () => {
    const name = form.name;
    try {
      const res = await Api.get(`user/register/${name}`);
      if (!res.data) {
        alert("이미 사용중인 이름입니다.");
      } else {
        alert("사용할 수 있는 이름입니다.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSendEmail = async () => {
    try {
      const res = await Api.post("user/register/email", { email: form.email });
      console.log(res.data);
      setAnswer(res.data);
      alert("입력하신 이메일로 인증코드를 보냈습니다.");
    } catch (err) {
      alert("다시 입력해주세요.");
      // console.log("이메일 전송 에러");
      console.error(err);
    }
  };

  const handleValidCode = () => {
    if (inputCode === String(answer)) {
      setVerifi(true);
      alert("Correct!");
    } else {
      alert("Wrong. Try again.");
    }
  };

  const CheckPass = (str: string) => {
    // 영어/숫자/특수문자를 포함한 8자 이상
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$ㄷ!%*#?&]{8,}$/;
    return reg.test(str);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name) {
      alert("아이디를 입력해주세요.");
    } else if (!form.email) {
      alert("이메일 주소를 입력해주세요.");
    } else if (!inputCode) {
      alert("인증코드를 입력해주세요.");
    } else if (!verifi) {
      alert("인증코드를 확인해주세요.");
    } else if (!form.password) {
      alert("비밀번호를 입력해주세요.");
    } else if (!form.confirmpassword) {
      alert("비밀번호 중복 확인을 입력해주세요.");
    } else if (form.password !== form.confirmpassword) {
      alert("비밀번호가 동일하지 않습니다.");
    } else if (!CheckPass(form.password)) {
      alert("비밀번호는 영문+숫자 8자를 조합하여 입력해주세요.");
    } else {
      try {
        const res = await Api.post("user/register", form);
        if (res.data) {
          alert(res.data);
        } else {
          console.log("회원가입 성공");
          navigate("/login");
        }
      } catch (err) {
        alert("다시 시도해주세요.");
        // console.log("회원가입 실패");
        // console.error("에러 메세지:", err);
      }
    }
  };

  return (
    <Layout>
      <Box>
        <Form onSubmit={handleSubmit}>
          <Logo />
          <Title>Register</Title>
          <SmallWrapper>
            <Input
              type="text"
              name="name"
              placeholder="ID"
              value={form.name}
              onChange={handleChange}
            ></Input>
            <SmallButton onClick={handleValidID}>Check</SmallButton>
          </SmallWrapper>
          <SmallWrapper>
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
            ></Input>
            <SmallButton onClick={handleSendEmail}>Send</SmallButton>
          </SmallWrapper>
          <SmallWrapper>
            <Input
              type="text"
              placeholder="Verification Code"
              value={inputCode}
              onChange={handleCode}
            ></Input>
            <SmallButton onClick={handleValidCode}>Verify</SmallButton>
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
          <Button type="submit">Sign Up</Button>
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
