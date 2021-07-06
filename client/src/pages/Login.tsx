import React, {useState, FunctionComponent as FC} from "react";
// import Icon from '../assets/icon';
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
} from "../styles/Login.styles";
import {GoogleOutlined, LoginOutlined} from "@ant-design/icons";
import GoogleLogin from "react-google-login";
import {SIGN_IN} from "../types";
import {signIn} from "../state/actions/auth";

const Login: FC = () => {

    const [email, setEmailState] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInvalidCredentials(false);

        setEmailState(e.target.value);
    };

    const submit = (e: React.FormEvent) => {
        console.log(e);
        dispatch(signIn({email, password}, history))
    };

    const googleSuccess = async (res: any) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({type: 'SIGN_IN', data: {result, token}})
            history.push('/')
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
                {!invalidCredentials ? (
                    <LoginSubtitle>Please fill this form to log in!</LoginSubtitle>
                ) : (
                    <ErrorSubtitle>Invalid credentials</ErrorSubtitle>
                )}
                <LoginForm onFinish={submit}>
                    <Field
                        validateStatus={invalidCredentials ? "error" : ""}
                        rules={[{required: true, message: "Please enter your email!"}]}
                        name="email"
                    >
                        <InputField placeholder="Email..." onChange={setEmail}/>
                    </Field>
                    <Field
                        name="password"
                        rules={[{required: true, message: "Please enter your password!"}]}
                    >
                        <PasswordField
                            placeholder="Password..."
                            onChange={(e) => setPassword(e.target.value)}
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
