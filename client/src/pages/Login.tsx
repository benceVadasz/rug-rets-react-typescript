import React, { useState, FunctionComponent } from "react";
import { GoogleLogin } from "react-google-login";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Typography, TextField } from "@material-ui/core";
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

const Login = () => {
  const useStyles = makeStyles(() => ({
    paperStyle: {
      padding: "30px 20px",
      height: 340,
      width: 500,
      margin: "70px auto",
      boxShadow:
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    },
    mobilePaperStyle: {
      padding: "30px 20px",
      height: 300,
      width: "90%",
      margin: "170px auto",
    },
    formStyle: {
      height: 220,
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "space-between",
    },
    mobileFormStyle: {
      height: 220,
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "space-between",
    },
    headerStyle: { margin: 0, fontFamily: "'IBM Plex Mono', monospace" },
    avatarStyle: { backgroundColor: "#edede9" },
    button: { backgroundColor: "#edede9", marginBottom: 20 },
    passwordStyle: { marginBottom: 30 },
    invalid: { color: "red" },
    load: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  }));

  const classes = useStyles();
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
