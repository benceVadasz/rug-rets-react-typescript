import React, { useState, FunctionComponent } from "react";
import { GoogleLogin } from "react-google-login";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Typography, TextField } from "@material-ui/core";
// import {signIn} from '../actions/auth';
// import Icon from '../assets/icon';
// import {useDispatch} from "react-redux";
// import {useHistory} from 'react-router-dom';
import { Paper } from "../styles/Login.styles";
import { LoginButton } from "../styles/Login.styles";
import { LoginOutlined } from "@ant-design/icons";
import { LoginHeader } from "../styles/Login.styles";
import { LoginSubtitle } from "../styles/Login.styles";
import { ErrorSubtitle } from "../styles/Login.styles";
import { LoginForm } from "../styles/Login.styles";
import { Wrapper } from "../styles/Login.styles";
import { Field } from "../styles/Login.styles";
import { PasswordField } from "../styles/Login.styles";

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
  // const dispatch = useDispatch();
  // const history = useHistory();

  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidCredentials(false);

    setEmailState(e.target.value);
  };

  const submit = (e: React.FormEvent) => {
    console.log(e);
    // dispatch(signIn({email, password}, history))
  };

  // const googleSuccess = async (res) => {
  //     const result = res?.profileObj;
  //     const token = res?.tokenId;
  //     try {
  //         dispatch({type: 'AUTH', data: {result, token}})
  //         history.push('/')
  //     } catch (e) {
  //         console.log(e)
  //     }
  // };

  const googleFailure = () => {
    console.log(
      "google sign in was unsuccessful. Please refresh and start again."
    );
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
          <TextField
            error={invalidCredentials}
            fullWidth
            label="Email"
            placeholder="Enter your email"
            onChange={setEmail}
          />
          <Field>
            <TextField
              error={invalidCredentials}
              fullWidth
              className={classes.passwordStyle}
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
          <Field
          name="username"
          label="Password"
          rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <PasswordField placeholder="Password"/>
          </Field>
          {/* <Button htmlType="submit" className={classes.button + " lower-case"}>
            Log in
          </Button> */}
          <LoginButton htmlType="submit">Log in</LoginButton>
          {/* <GoogleLogin
                            clientId='525017423702-622ugttvcve20rljokq90t37rdl8m4bc.apps.googleusercontent.com'
                            render={(renderProps) => (
                                <Button className={'lower-case white ' + classes.googleBtn} color="primary"
                                        fullWidth onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        startIcon={<Icon/>}
                                        variant="contained"
                                >
                                    Sign in with Google
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        /> */}
        </LoginForm>
      </Paper>
    </Wrapper>
  );
};

export default Login;
