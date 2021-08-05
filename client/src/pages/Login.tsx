import React, {useState, FunctionComponent as FC} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
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
    GoogleButton
} from "./Login.styles";
import {GoogleOutlined, LoginOutlined} from "@ant-design/icons";
import GoogleLogin from "react-google-login";
import {signIn} from "../state/actions/auth";
import {Form} from "antd";
import {SIGN_IN} from "../types";

const Login: FC = () => {

    const [form] = Form.useForm();
    const [email, setEmailState] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [invalidCredentials, setInvalidCredentials] = useState<boolean>(false);
    const [emailProvided, setEmailProvided] = useState<boolean>(true);
    const [passwordProvided, setPasswordProvided] = useState<boolean>(true);
    const dispatch = useDispatch();
    const history = useHistory();

    const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailProvided(true)
        setInvalidCredentials(false);
        setEmailState(e.target.value);
    };

    const setPasswordState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordProvided(true)
        setInvalidCredentials(false)
        setPassword(e.target.value)
    }

    const submit = async () => {
        if (email === '' || password === '') {
            if (email === '') {
                setEmailProvided(false)
            }
            if (password === '') {
                setPasswordProvided(false)
            }
            return;
        }

        const signInResp = await dispatch(signIn({email, password}))
        if (typeof signInResp === 'string') {
            setInvalidCredentials(true)
        } else {
            history.push('/feed')
        }
    };

    const googleSuccess = async (res: any) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        console.log(result)
        try {
            dispatch({type: SIGN_IN, payload: {result, token}})
            history.push('/feed')
        } catch (e) {
            console.log(e)
        }
    };

    const googleFailure = () => {
        console.log('google sign in was unsuccessful. Please refresh and start again.')
    };


    return (
        <Wrapper>
            <Paper>
                <LoginOutlined/>
                <LoginHeader>Login</LoginHeader>
                {/*<LoginTitle/>*/}
                {!invalidCredentials ? (
                    <LoginSubtitle>Please fill this form to log in!</LoginSubtitle>
                ) : (
                    <ErrorSubtitle>Invalid credentials</ErrorSubtitle>
                )}
                <LoginForm onFinish={submit} form={form}>
                    <Field
                        name="email"
                        validateStatus={invalidCredentials || !emailProvided ? "error" : ""}
                        help={!emailProvided ? "Email is required" : null}

                    >
                        <InputField placeholder="Email..." onChange={setEmail}/>
                    </Field>
                    <Field
                        name="password"
                        validateStatus={!passwordProvided || invalidCredentials ? "error" : ""}
                        help={!passwordProvided ? "Password is required" : null}
                    >
                        <PasswordField
                            placeholder="Password..."
                            onChange={setPasswordState}
                        />
                    </Field>
                    <GoogleLogin
                        clientId='525017423702-622ugttvcve20rljokq90t37rdl8m4bc.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <GoogleButton className={'lower-case white '} color="primary"
                                          onClick={renderProps.onClick}
                                          disabled={renderProps.disabled}
                                          startIcon={<GoogleOutlined/>}
                                          variant="contained"
                            >
                                Sign in with Google
                            </GoogleButton>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <LoginButton htmlType="submit">Log in</LoginButton>
                </LoginForm>
            </Paper>
        </Wrapper>
    );
};

export default Login;
