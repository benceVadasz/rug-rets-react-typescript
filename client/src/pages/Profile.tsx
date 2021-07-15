import React, {Component} from 'react'
import {Route} from "react-router-dom";
import ProfilePersonalInfo from "../components/profile/ProfilePersonalInfo";
import SavedDesigns from "../components/profile/SavedDesigns";
import Orders from "../components/profile/Orders";
import * as PS from '../styles/Profile.styles';
import ProfileMenu from "../components/profile/ProfileMenu";

export default class Profile extends Component {

    render() {
        const userState = JSON.parse(localStorage.getItem('profile') as string)?.result
        if (!userState) window.location.href = '/login';

        return (
            <PS.BG>
                <PS.Container>
                        <ProfileMenu/>
                        <PS.Grid>
                            <Route exact path="/profile/account" children={<ProfilePersonalInfo/>}/>
                            <Route exact path="/profile/saved" children={<SavedDesigns/>}/>
                            <Route exact path="/profile/orders" children={<Orders/>}/>
                        </PS.Grid>
                </PS.Container>
            </PS.BG>
        )
    }
}