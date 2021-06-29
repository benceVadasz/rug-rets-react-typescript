import React, { useState, FunctionComponent as FC } from "react";
import { GoogleLogin } from "react-google-login";
// import {signIn} from '../actions/auth';
// import Icon from '../assets/icon';
import {useDispatch} from "react-redux";
// import {useHistory} from 'react-router-dom';
import {
  Paper,
  LoginButton,
  LoginHeader,
  LoginSubtitle,
  LoginForm,
  Wrapper,
  PasswordField,
  Field,
  ErrorSubtitle,
  InputField,
} from "../styles/Login.styles";
import { LoginOutlined } from "@ant-design/icons";

const Login: FC = () => {
  
  const [email, setEmailState] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);
//   const dispatch = useDispatch();
//   const history = useHistory();

  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidCredentials(false);

    setEmailState(e.target.value);
  };

  const submit = (e: React.FormEvent) => {
    console.log(e);
    // dispatch(signIn({email, password}, history))
  };

  return (
    <Wrapper>
      <Paper>
        <LoginOutlined />
        <LoginHeader>Login</LoginHeader>
        {!invalidCredentials ? (
          <LoginSubtitle>Please fill this form to log in!</LoginSubtitle>
        ) : (
          <ErrorSubtitle>Invalid credentials</ErrorSubtitle>
        )}
        <LoginForm onFinish={submit}>
          <Field
            validateStatus={invalidCredentials ? "error" : ""}
            rules={[{ required: true, message: "Please enter your email!" }]}
            name="email"
          >
            <InputField placeholder="Email..." onChange={setEmail} />
          </Field>
          <Field
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <PasswordField
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
          <LoginButton htmlType="submit">Log in</LoginButton>
        </LoginForm>
      </Paper>
    </Wrapper>
  );
};

export default Login;
