import React, {Component} from 'react'
import * as PM from './ProfileMenu.styles'
import Box from '../../assets/inventory_2_black_24dp.svg'
import acc from '../../assets/account_circle_black_24dp.svg'
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import HouseIcon from '@material-ui/icons/House';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import {ThemeProps} from "../../types";

export default class ProfileMenu extends Component<ThemeProps> {

    render() {
        const userState = JSON.parse(localStorage.getItem('profile') as string)?.result

        return (
            <PM.Paper>
                <PM.AvatarContainer dark={this.props.dark}>
                    <PM.Avatar src={acc}/>
                        <PM.Typo className="lower-case">
                            Hi, {userState?.givenName}
                        </PM.Typo>
                </PM.AvatarContainer>
                <div>
                    <PM.Divider/>
                </div>
                <PM.Link activeClassName='current' to="/profile/saved">
                    <PM.Button variant="contained" size="large" dark={this.props.dark} className='lower-case'
                               startIcon={<FavoriteIcon fontSize="large"/>}>Saved designs
                    </PM.Button>
                </PM.Link>
                <PM.Link activeClassName='current' to="/profile/orders">

                    <PM.Button  dark={this.props.dark} variant="contained" size="large" className='lower-case'>
                        <PM.Img src={Box}/>
                        My Orders
                    </PM.Button>
                </PM.Link>
                <PM.Link activeClassName='current' to="/profile/account">
                    <PM.Button  dark={this.props.dark} variant="contained" size="large" className='lower-case'
                               startIcon={<PersonIcon fontSize="large"/>}>
                        Account overview
                    </PM.Button>
                </PM.Link>
                <PM.Link activeClassName='current' to="/profile/address-book">
                    <PM.Button  dark={this.props.dark} variant="contained" size="large" className='lower-case'
                               startIcon={<HouseIcon fontSize="large"/>}>Address book
                    </PM.Button>
                </PM.Link>
                <PM.Link activeClassName='current' to="/profile/payments">
                    <PM.Button  dark={this.props.dark} variant="contained" size="large" className='lower-case'
                               startIcon={<CreditCardIcon fontSize="large"/>}>Payment methods
                    </PM.Button>
                </PM.Link>
            </PM.Paper>
        )
    }
}