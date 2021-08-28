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
import {Form} from "antd";
import {SIGN_IN, signInData} from "../types";
import {useMutation} from "@apollo/client";
import {LOGIN_MUTATION, ME} from "../util/graphql";



const Login: FC = () => {

    const [form] = Form.useForm();
    const [email, setEmailState] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [emailProvided, setEmailProvided] = useState<boolean>(true);
    const [passwordProvided, setPasswordProvided] = useState<boolean>(true);
    const dispatch = useDispatch();
    const history = useHistory();

    const [login] = useMutation(LOGIN_MUTATION, {refetchQueries: [{query: ME}]})

    const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailProvided(true)
        setError('');
        setEmailState(e.target.value);
    };

    const setPasswordState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordProvided(true)
        setError('');
        setPassword(e.target.value)
    }

    const submit = async (values: signInData) => {
        if (email === '' || password === '') {
            if (email === '') {
                setEmailProvided(false)
            }
            if (password === '') {
                setPasswordProvided(false)
            }
            return;
        }
        try {
            const response = await login({
                variables: values
            })
            localStorage.setItem('profile', JSON.stringify({...response.data.signIn}))
            history.push("/feed")
        } catch (error) {
            setError(error.message)
        }
    }

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
                {!error ? (
                    <LoginSubtitle>Please fill this form to log in!</LoginSubtitle>
                ) : (
                    <ErrorSubtitle>{error}</ErrorSubtitle>
                )}
                <LoginForm onFinish={submit} form={form}>
                    <Field
                        name="email"
                        validateStatus={error.length > 0 || !emailProvided ? "error" : ""}
                        help={!emailProvided ? "Email is required" : null}

                    >
                        <InputField placeholder="Email..." onChange={setEmail}/>
                    </Field>
                    <Field
                        name="password"
                        validateStatus={!passwordProvided || error.length > 0 ? "error" : ""}
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
