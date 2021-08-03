import React, {useState} from "react";
import {signUp} from '../state/actions/auth';
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {LoginOutlined} from "@ant-design/icons";
import * as RS from "./Register.styles";
import {signUpData} from "../types";

const Register = () => {

    const [user, setUser] = useState<signUpData>({
        username: "",
        givenName: "",
        familyName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [invalidEmail, setInvalidEmail] = useState(false);
    const [provided, setProvided] = useState(true)
    const [passwordsMatch, setPasswordsMatch] = useState(true)
    const [usernameTaken, setUsernameTaken] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();


    const submit = async () => {
        if (user.password !== user.confirmPassword) {
            setPasswordsMatch(false)
            return;
        }
        if (Object.values(user).some(x => x === '')) {
            setProvided(false)
        }
        const signUpResp = await dispatch(signUp(user))
        if (typeof signUpResp === "string") {
            if (signUpResp === "Username taken") {
                setUsernameTaken(true)
            } else if (signUpResp === "User already exists") {
                setInvalidEmail(true)
            }
        }
        else {
            history.push('/feed')
        }
    };

    const setFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, givenName: e.target.value})
        setInvalidEmail(false)
    }
    const setLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, familyName: e.target.value})
        setInvalidEmail(false)
    }

    const setUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, email: e.target.value})
        console.log(user)
        setInvalidEmail(false)
    }

    const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, username: e.target.value})
        console.log(user)
        setInvalidEmail(false)
        setUsernameTaken(false)
    }

    const setPasswordState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, password: e.target.value})
    }

    const setConfirmPasswordState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, confirmPassword: e.target.value})
    }


    return (
        <RS.Wrapper>
            <RS.Paper>
                <LoginOutlined/>
                <RS.RegisterHeader>Register</RS.RegisterHeader>
                <RS.RegisterSubtitle>Please fill this form to sign up!</RS.RegisterSubtitle>
                <RS.RegisterForm onFinish={submit}>
                    <RS.Field
                        name="user name"
                        validateStatus={usernameTaken || (!provided && user.username === '') ? "error" : ""}
                        help={usernameTaken ? "Username taken" : !provided && user.username === ''
                            ? "Please enter a username!" : null}
                    >
                        <RS.InputField placeholder="Username..." onChange={setUserName}/>
                    </RS.Field>
                    <RS.Field
                        name="first name"
                        validateStatus={!provided && user.givenName === '' ? "error" : ""}
                        help={!provided && user.givenName === '' ? "Please enter your first name!" : null}
                    >
                        <RS.InputField placeholder="First name..." onChange={setFirstName}/>
                    </RS.Field>
                    <RS.Field
                        name="last name"
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
                        validateStatus={(!provided && user.confirmPassword === '') || !passwordsMatch ? "error" : ""}
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
                    <RS.RegisterButton htmlType="submit">Log in</RS.RegisterButton>
                </RS.RegisterForm>
            </RS.Paper>
        </RS.Wrapper>
    );
}

export default Register;