import React, {useContext} from 'react'
import * as s from './ProfilePersonalInfo.styles'
import {Col} from "antd";
import * as RS from "../../pages/Register.styles";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editProfile} from "../../state/actions/auth";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import {useLocalStorage} from "../../customHooks/useLocalStorage";
import {useHistory} from "react-router";
import {ProfileContainer} from "../../pages/Profile.styles";
import {ThemeContext} from "../../context/store";

const ProfilePersonalInfo = () => {

    const history = useHistory()
    const dispatch = useDispatch();

    if (!useLocalStorage('profile')) {
        history.push('login')
    }

    const userState = useLocalStorage('profile')?.result


    const [givenName, setFirstName] = useState<string | undefined>(userState?.givenName);
    const [familyName, setLastName] = useState<string | undefined>(userState?.familyName);
    const [email, setEmail] = useState<string | undefined>(userState?.email);
    const [phone, setPhone] = useState<string | undefined>(userState?.phone);
    const {dark} = useContext(ThemeContext)

    const noChange = givenName === userState?.givenName && familyName === userState?.familyName
        && email === userState?.email && phone === userState?.phone;

    const saveInfo = () => {
        dispatch(editProfile({givenName, familyName, email, phone},
            userState?._id ? userState?._id : userState?.googleId))
    };


    return (
        <ProfileContainer dark={dark}>
            <s.Paper>
                <s.Title>
                    <s.Text className={"lower-case"}>
                        Account overview
                    </s.Text>
                </s.Title>
                <s.Container onFinish={saveInfo} layout="vertical">
                    <Col>
                        <RS.Field
                            label={'First Name'}
                            rules={[{required: true, message: "Please enter your first name!"}]}
                            name="first name"
                            initialValue={givenName ? givenName : ""}
                        >
                            <RS.InputField placeholder="First name..."
                                           onChange={(e) => setFirstName(e.target.value)}/>
                        </RS.Field>
                        <RS.Field
                            label={'Last Name'}
                            name="last name"
                            rules={[{required: true, message: "Please enter your last name!"}]}
                            initialValue={familyName ? familyName : ""}
                        >
                            <RS.InputField  placeholder="Last Name..."
                                           onChange={(e) => setLastName(e.target.value)}/>
                        </RS.Field>
                        <RS.Field
                            label={'Email'}
                            name="email"
                            rules={[{required: true, message: "Please enter email!"}]}
                            initialValue={email ? email : ""}
                        >
                            <RS.InputField placeholder="Email..."
                                           onChange={(e) => setEmail(e.target.value)}/>
                        </RS.Field>
                        <RS.Field
                            label={'Phone'}
                            name="phone"
                        >
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={(e) => setPhone(e)}/>
                        </RS.Field>

                        <RS.SaveButton disabled={noChange} htmlType="submit">Save</RS.SaveButton>
                    </Col>
                </s.Container>
            </s.Paper>
        </ProfileContainer>
    )
}

export default ProfilePersonalInfo;