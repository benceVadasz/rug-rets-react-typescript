import React from 'react'
import * as s from '../../styles/ProfilePersonalInfo.styles'
import { Col} from "antd";
import * as RS from "../../styles/Register.styles";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editProfile} from "../../state/actions/auth";
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'

const ProfilePersonalInfo = () => {

  const dispatch = useDispatch();
  const userState = JSON.parse(localStorage.getItem('profile') as string)?.result

  const [givenName, setFirstName] = useState<string>(userState?.givenName);
  const [familyName, setLastName] = useState<string>(userState?.familyName);
  const [email, setEmail] = useState<string>(userState?.email);
  const [phone, setPhone] = useState<string>(userState?.phone);

  const noChange = givenName === userState?.givenName && familyName === userState?.familyName
      && email === userState?.email && phone === userState?.phone;

  const saveInfo = () => {
      dispatch(editProfile({givenName, familyName, email, phone},
          userState?._id ? userState?._id : userState?.googleId))
    };


    return (
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
              >
                <RS.InputField defaultValue={givenName ? givenName : ""} placeholder="First name..." onChange={(e) => setFirstName(e.target.value)}/>
              </RS.Field>
              <RS.Field
                  label={'Last Name'}
                  name="last name"
                  rules={[{required: true, message: "Please enter your last name!"}]}
              >
                <RS.InputField defaultValue={familyName ? familyName : ""} placeholder="Last Name..." onChange={(e) => setLastName(e.target.value)}/>
              </RS.Field>
              <RS.Field
                  label={'Email'}
                  name="email"
                  rules={[{required: true, message: "Please enter email!"}]}
              >
                <RS.InputField defaultValue={email ? email : ""} placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
              </RS.Field>
              <RS.Field
                  label={'Phone'}
                  name="phone"
              >
                {/*<RS.InputField defaultValue={phone ? phone : ""} placeholder="Phone..." onChange={(e) => setPhone(e.target.value)}/>*/}
                <PhoneInput
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e)}/>
              </RS.Field>

              <RS.SaveButton disabled={noChange} htmlType="submit">Save</RS.SaveButton>
            </Col>
          </s.Container>
        </s.Paper>
    )
}

export default ProfilePersonalInfo