import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import {LoginOutlined} from "@ant-design/icons";
import * as RS from "./Register.styles";
import {signUpData, signUpDataToBackend} from "../types";
import {useMutation} from "@apollo/client";
import {ErrorSubtitle} from "./Login.styles";
import {REGISTER_MUTATION} from "../util/graphql";




const Register = () => {

    const [user, setUser] = useState<signUpData>({
        username: "",
        givenName: "",
        familyName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [register] = useMutation(REGISTER_MUTATION)

    const [invalidEmail, setInvalidEmail] = useState(false);
    const [provided, setProvided] = useState(true)
    const [usernameTaken, setUsernameTaken] = useState(false)
    const [error, setError] = useState<string>("");
    const history = useHistory();



    const setFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, givenName: e.target.value})
        setError('')
        setInvalidEmail(false)
    }
    const setLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, familyName: e.target.value})
        setError('')
        setInvalidEmail(false)
    }

    const setUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, email: e.target.value})
        setError('')
        setInvalidEmail(false)
    }

    const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, username: e.target.value})
        setError('')
        setInvalidEmail(false)
        setUsernameTaken(false)
    }

    const setPasswordState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, password: e.target.value})
        setError('')
    }

    const setConfirmPasswordState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, confirmPassword: e.target.value})
        setError('')
    }

    const submit = async (values: signUpDataToBackend) => {

        if (Object.values(user).some(x => x === '')) {
            setProvided(false)
        }
        try {
            const response = await register({
                variables: values
            })
            localStorage.setItem('profile', JSON.stringify({...response.data.signUp}))
            history.push("/feed")
        } catch (error) {
            switch (error.message) {
                case "Username is taken":
                    setUsernameTaken(true)
                    break
                case "Email is already registered":
                    setInvalidEmail(true)
            }
        }
    };

    return (
        <RS.Wrapper>
            <RS.Paper>
                <LoginOutlined/>
                <RS.RegisterHeader>Register</RS.RegisterHeader>
                {!error?
                    <RS.RegisterSubtitle>Please fill this form to sign up!</RS.RegisterSubtitle>:
                    <ErrorSubtitle>{error}</ErrorSubtitle>
                }
                <RS.RegisterForm onFinish={submit}>
                    <RS.Field
                        name="username"
                        validateStatus={usernameTaken || (!provided && user.username === '') ? "error" : ""}
                        help={usernameTaken ? "Username taken" : !provided && user.username === ''
                            ? "Please enter a username!" : null}
                    >
                        <RS.InputField placeholder="Username..." onChange={setUserName}/>
                    </RS.Field>
                    <RS.Field
                        name="givenName"
                        validateStatus={!provided && user.givenName === '' ? "error" : ""}
                        help={!provided && user.givenName === '' ? "Please enter your first name!" : null}
                    >
                        <RS.InputField placeholder="First name..." onChange={setFirstName}/>
                    </RS.Field>
                    <RS.Field
                        name="familyName"
                        validateStatus={!provided && user.familyName === '' ? "error" : ""}
                        help={!provided && user.familyName === '' ? "Please enter your last name!" : null}
                    >
                        <RS.InputField placeholder="Last Name..." onChange={setLastName}/>
                    </RS.Field>
                    <RS.Field
                        validateStatus={invalidEmail || (!provided && user.email === '') ? "error" : ""}
                        help={!provided && user.email === '' ? "Please enter your email!" :
                            invalidEmail ? "Email already registered" : null}
                        name="email"
                    >
                        <RS.InputField placeholder="Email..." onChange={setUserEmail}/>
                    </RS.Field>
                    <RS.Field
                        name="password"
                        validateStatus={!provided && user.password === '' ? "error" : ""}
                        help={!provided && user.password === '' ? "Please enter a password!" : null}
                    >
                        <RS.PasswordField placeholder="Password..." onChange={setPasswordState}/>
                    </RS.Field>
                    <RS.Field
                        validateStatus={(!provided && user.confirmPassword === '') ? "error" : ""}
                        help={!provided && user.confirmPassword === '' ? "Please repeat password!" : null}
                        rules={[({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                } else {
                                    if (user.password.length === user.confirmPassword.length) {
                                        return Promise.reject('Password do not match');
                                    }
                                }
                            }
                        })
                        ]}
                        name="confirmPassword"
                    >
                        <RS.PasswordField placeholder="Confirm password..."
                                          onChange={setConfirmPasswordState}/>
                    </RS.Field>
                    <RS.RegisterButton htmlType="submit">Sign up</RS.RegisterButton>
                </RS.RegisterForm>
            </RS.Paper>
        </RS.Wrapper>
    );
}

export default Register;