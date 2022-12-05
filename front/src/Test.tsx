import { Layout, Input, Button } from "antd";
import { Form } from "react-router-dom";
import { ROUTES } from "./enum/routes";
import { Logo } from "./styles/Header.styled";
import {
  Box,
  Title,
  BottomWrapper,
  OtherButton,
} from "./styles/Register.styled";

interface ModalTestProps {
  title: string;
  buttonLabel: string;
  children: React.ReactNode;
  onSubmit: () => void;
}

const ModalTest = ({
  title,
  buttonLabel,
  children,
  onSubmit,

  title,
  buttonLabel,
  children,
  onSubmit,

  title,
  buttonLabel,
  children,
  onSubmit,

  title,
  buttonLabel,
  children,
  onSubmit,
}: ModalTestProps): JSX.Element => {
  return (
    <Layout>
      <Box>
        <Form>
          <Title>{title}</Title>
          {children}
          <Button onClick={onSubmit}>{buttonLabel}</Button>
          <BottomWrapper>
            {/* <OtherButton to={ROUTES.USER.FIND_PW}>
                Forgot your Password?
              </OtherButton> */}
            <p>Don't have an account?</p>
            <OtherButton to={ROUTES.USER.REGISTER}>Sign Up</OtherButton>
          </BottomWrapper>
        </Form>
      </Box>
    </Layout>
  );
};

export default ModalTest;

<ModalTest title="sign in" buttonLabel="sign in" onSubmit={() => register}>
  <Input type="email" placeholder="Email address"></Input>
  <Input type="password" placeholder="Password"></Input>
</ModalTest>;
