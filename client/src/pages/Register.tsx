import React, {useState} from "react";
import {signUp} from '../state/actions/auth';
import {GoogleLogin} from "react-google-login";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {LoginOutlined} from "@ant-design/icons";
import * as RS from "../styles/Register.styles";
// import Loading from "./Loading";

const Register = () => {

    const [givenName, setFirstNameState] = useState("");
    const [familyName, setLastNameState] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const submit = () => {
        if (password !== confirmPassword) alert("Passwords do not match");
        dispatch(signUp({givenName, familyName, email, password, confirmPassword}, history))
    };

    const setFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstNameState(e.target.value)
        setInvalidEmail(false)
    }
    const setLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastNameState(e.target.value)
        setInvalidEmail(false)
    }

    // if (loading)
    //     return (
    //         <div className={classes.load}>
    //             <Loading/>
    //         </div>
    //     );

    return (
        <RS.Wrapper>
            <RS.Paper>
                <LoginOutlined/>
                <RS.RegisterHeader>Register</RS.RegisterHeader>
                <RS.RegisterSubtitle>Please fill this form to sign up!</RS.RegisterSubtitle>
                <RS.RegisterForm onFinish={submit}>
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
                        <RS.InputField placeholder="Last Name..." onChange={(setLastName)}/>
                    </RS.Field>
                    <RS.Field
                        name="email"
                        rules={[{required: true, message: "Please enter email!"}]}
                    >
                        <RS.InputField placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
                    </RS.Field>
                    <RS.Field
                        rules={[{required: true, message: "Please enter your email!"}]}
                        name="password"
                    >
                        <RS.PasswordField placeholder="Password..." onChange={(e) => setPassword(e.target.value)}/>
                    </RS.Field>
                    <RS.Field
                        rules={[{required: true, message: "Please repeat password!"}]}
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