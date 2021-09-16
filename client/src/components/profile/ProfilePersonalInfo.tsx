import React, {useContext} from 'react'
import * as s from './ProfilePersonalInfo.styles'
import {Col} from "antd";
import * as RS from "../../pages/Register.styles";
import {useState} from "react";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import {useLocalStorage} from "../../customHooks/useLocalStorage";
import {useHistory} from "react-router";
import {ProfileContainer} from "../../pages/Profile.styles";
import {ThemeContext} from "../../context/store";
import {useMutation} from "@apollo/client";
import {GET_POSTS, ME, UPDATE_PROFILE} from "../../util/graphql";
import FileBase from "react-file-base64";
import {Spinner} from "../forum/Form.styles";

const ProfilePersonalInfo = () => {

    const history = useHistory()
    const [updateProfile, {loading}] = useMutation(UPDATE_PROFILE)

    if (!useLocalStorage('profile')) {
        history.push('login')
    }

    const userState = useLocalStorage('profile')?.user
    const token = useLocalStorage('profile')?.token
    const {dark} = useContext(ThemeContext)


    const [user, setUser] = useState({
        _id: userState?._id,
        username: userState?.username,
        givenName: userState?.givenName,
        familyName: userState?.familyName,
        email: userState?.email,
        phone: userState?.phone,
        profilePicture: userState?.profilePicture
    })


    const noChange = user.username === userState?.username && user.givenName === userState?.givenName &&
        user.familyName === userState?.familyName && user.email === userState?.email &&
        user.phone === userState?.phone && user.profilePicture === userState?.profilePicture;


    const submit = async () => {
        await updateProfile({variables: user, refetchQueries: [{query: ME}, {query: GET_POSTS}]})
        localStorage.setItem('profile', JSON.stringify({token: token, user: user}))
    };


    return (
        <ProfileContainer dark={dark}>
            <s.Paper>
                <s.Title>
                    <s.Text className={"lower-case"}>
                        Account overview
                    </s.Text>
                </s.Title>
                <s.Container onFinish={submit} layout="vertical">
                    <Col style={{height: '100%'}}>
                        <RS.Field
                            label={'Username'}
                            rules={[{required: true, message: "Please enter your username!"}]}
                            name="username"
                            initialValue={user.username ? user.username : ""}
                        >
                            <RS.InputField placeholder="Username..."
                                           onChange={(e) => setUser({...user, username: e.target.value})}/>
                        </RS.Field>
                        <RS.Field
                            label={'First Name'}
                            rules={[{required: true, message: "Please enter your first name!"}]}
                            name="givenName"
                            initialValue={user.givenName ? user.givenName : ""}
                        >
                            <RS.InputField placeholder="First name..."
                                           onChange={(e) => setUser({...user, givenName: e.target.value})}/>
                        </RS.Field>
                        <RS.Field
                            label={'Last Name'}
                            name="familyName"
                            rules={[{required: true, message: "Please enter your last name!"}]}
                            initialValue={user.familyName ? user.familyName : ""}
                        >
                            <RS.InputField placeholder="Last Name..."
                                           onChange={(e) => setUser({...user, familyName: e.target.value})}/>
                        </RS.Field>
                        <RS.Field
                            label={'Email'}
                            name="email"
                            rules={[{required: true, message: "Please enter email!"}]}
                            initialValue={user.email ? user.email : ""}
                        >
                            <RS.InputField placeholder="Email..."
                                           onChange={(e) => setUser({...user, email: e.target.value})}/>
                        </RS.Field>
                        <RS.Field
                            label={'Phone'}
                            name="phone"
                        >
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={user.phone ? user.phone : ""}
                                onChange={(e) => setUser({...user, phone: e})}/>
                        </RS.Field>
                        <div style={{color: 'white', marginBottom: 20}}>
                            <RS.Field
                                label={'Change profile picture'}
                                name="profilePicture"
                            >
                                <FileBase
                                    type="file" multiple={false}
                                    name="profilePicture"
                                    onDone={({base64}: any) =>{
                                        setUser({...user, profilePicture: base64})
                                    }}
                                />
                            </RS.Field>
                        </div>
                        <RS.SaveButton disabled={noChange} htmlType="submit">
                            {loading? <Spinner size={20} style={{color: 'white', marginTop: 3}}/>: 'Save'}
                        </RS.SaveButton>
                    </Col>
                </s.Container>
            </s.Paper>
        </ProfileContainer>
    )
}

export default ProfilePersonalInfo;