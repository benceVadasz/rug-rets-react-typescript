import React, {useState} from "react";
import {signUp} from '../state/actions/auth';
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {LoginOutlined} from "@ant-design/icons";
import * as RS from "./Register.styles";
// import Loading from "./Loading";

const Register = () => {

    const [givenName, setFirstNameState] = useState("");
    const [familyName, setLastNameState] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();


    const submit = async () => {
        if (password !== confirmPassword) alert("Passwords do not match");
        console.log(email)
        const signUpSuccessful = await dispatch(signUp({username, givenName, familyName, email, password, confirmPassword}))
        !signUpSuccessful ? setInvalidEmail(true) : history.push('/feed')
    };

    const setFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstNameState(e.target.value)
        setInvalidEmail(false)
    }
    const setLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastNameState(e.target.value)
        setInvalidEmail(false)
    }

    const setUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        setInvalidEmail(false)
    }

    const setUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
        setInvalidEmail(false)
    }


    return (
        <RS.Wrapper>
            <RS.Paper>
                <LoginOutlined/>
                <RS.RegisterHeader>Register</RS.RegisterHeader>
                <RS.RegisterSubtitle>Please fill this form to sign up!</RS.RegisterSubtitle>
                <RS.RegisterForm onFinish={submit}>
                    <RS.Field
                        rules={[{required: true, message: "Please enter a username!"}]}
                        name="user name"
                    >
                        <RS.InputField placeholder="Username..." onChange={setUserName}/>
                    </RS.Field>
                    <RS.Field
                        rules={[{required: true, message: "Please enter your first name!"}]}
                        name="first name"
                    >
                        <RS.InputField placeholder="First name..." onChange={setFirstName}/>
                    </RS.Field>
                    <RS.Field
                        name="last name"
                        rules={[{required: true, message: "Please enter your last name!"}]}
                    >
                        <RS.InputField placeholder="Last Name..." onChange={setLastName}/>
                    </RS.Field>
                    <RS.Field
                        validateStatus={invalidEmail ? "error" : ""}
                        help={invalidEmail ? "Email already exists" : ""}
                        name="email"
                        rules={[{required: true, message: "Please enter email!"}]}
                        style={{ marginBottom: !invalidEmail ?  -3 : 0}}
                    >
                        <RS.InputField placeholder="Email..." onChange={setUserEmail}/>
                    </RS.Field>
                    <RS.Field
                        rules={[{required: true, message: "Please enter your password!"}]}
                        name="password"
                    >
                        <RS.PasswordField placeholder="Password..." onChange={(e) => setPassword(e.target.value)}/>
                    </RS.Field>
                    <RS.Field
                        rules={[{required: true, message: "Please repeat password!"},
                            ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        } else {
                                            return Promise.reject('Password do not match');
                                        }
                                    }
                                    })
                        ]}
                        name="confirmPassword"
                    >
                        <RS.PasswordField placeholder="Confirm password..."
                                          onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </RS.Field>
                    <RS.RegisterButton htmlType="submit">Log in</RS.RegisterButton>
                </RS.RegisterForm>
            </RS.Paper>
        </RS.Wrapper>
    );
}

export default Register;