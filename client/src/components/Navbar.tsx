import React, {FunctionComponent as FC, useState, useEffect, useContext} from "react";
import {Menu as AntMenu, Button as AntButton} from "antd";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useHistory, useLocation} from 'react-router-dom';
import decode from "jwt-decode";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {SIGN_OUT, UserState} from "../types";
import {useLocalStorage} from "../customHooks/useLocalStorage";
import {ThemeContext} from "../context/store";
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';


type ButtonProps = {
    bordered?: string;
    logout?: string;
    dark?: boolean
};


const AppBar = styled(AntMenu)({
    backgroundColor: '#20232A',
    position: 'relative',
    height: '7vh',
    display: 'flex',
    alignItems: 'center',
    border: 'none'
});

const LeftNav = styled.div({
    display: 'flex',
    width: '40%',
    position: 'absolute',
    justifyContent: 'space-around'
});

const RightNav = styled.div({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    height: '100vh',
    right: '2%'
});

const ModeIcon = styled.img({
    width: 40,
    marginRight: 50,
    '&:hover': {
        cursor: 'pointer'
    }
});

const Button = styled(AntButton)<ButtonProps>(
    (props: ButtonProps) => ({
        color: 'white !important',
        fontFamily: "IBM Plex Mono, monospace",
        border: props.bordered ? "1px solid black" : "none",
        marginTop: props.bordered && !props.logout ? 10 : 0,
        borderRadius: 3,
        background: '#20232A',
        padding: props.bordered ? '0 7px 3px 7px' : 7,
        // backgroundColor: '#E8E8E8',
        '&:hover': {
            background: '#20232A',
            border: "1px solid white"
        },
        '&:focus': {
            outline: 0,
            background: '#20232A',
        }
    })
);

const Link = styled(NavLink)({
    padding: 2
});
const Navbar: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const {dark, changeMode} = useContext(ThemeContext)
    const defaultUser = useLocalStorage('profile')

    const [user, setUser] = useState<UserState | null | undefined>(defaultUser);

    useEffect(() => {
        const token = user?.token;
        if (token) {

            const decodedToken: any = decode(token)

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(defaultUser);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, dark]);

    const logout = () => {
        dispatch({type: SIGN_OUT});
        history.push('/');
        setUser(null);
    };

    return (
        <AppBar mode="horizontal">
            <LeftNav>
                <Link to="/forum" exact activeClassName="current">
                    <Button>Forum</Button>
                </Link>
                <Link to="/design" exact activeClassName="current">
                    <Button key="design">
                        Design
                    </Button>
                </Link>
                <Link to="/feed" exact activeClassName="current">
                    <Button key="feed">
                        Feed
                    </Button>
                </Link>
            </LeftNav>
            {!user ?
                <RightNav>
                    <ModeIcon onClick={changeMode} src={dark ? sun : moon} alt="change mode"/>
                    <Link to="/login" exact>
                        <Button key="design">
                            Sign in
                        </Button>
                    </Link>
                    <Link to="/register" exact>
                        <Button bordered='yes' key="feed">
                            Sign up
                        </Button>
                    </Link>
                </RightNav> :
                <RightNav>
                    <ModeIcon onClick={changeMode} src={dark ? sun : moon} alt="change mode"/>
                    <Button bordered='yes' logout="yes" onClick={logout}>
                        Logout
                    </Button>
                    <IconButton
                        component={Link}
                        to="/profile/account"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        className='icon'
                    >
                        <AccountCircle style={{color: 'white'}}/>
                    </IconButton>
                </RightNav>
            }
        </AppBar>
    );
};
export default Navbar;
