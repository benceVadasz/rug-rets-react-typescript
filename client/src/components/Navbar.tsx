import React, {FunctionComponent as FC, useState, useEffect} from "react";
import {Menu, Button as AntButton} from "antd";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useHistory, useLocation} from 'react-router-dom';
import decode from "jwt-decode";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {SIGN_OUT} from "../types";


type ButtonProps = {
    bordered?: string;
};

const AppBar = styled(Menu)`
  background-color: #E8E8E8;
  position: relative;
  height: 7vh;
  display: flex;
  align-items: center;
`;

const LeftNav = styled.div`
  display: flex;
  width: 40%;
  position: absolute;
  justify-content: space-around;
`;

const RightNav = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100vh;
  right: 2%;
`;

const Button = styled(AntButton)<ButtonProps>`
  color: black !important;
  font-family: IBM Plex Mono, monospace;
  border: ${(props) => (props.bordered ? "1px solid black" : "none")};
  border-radius: 3px;
  padding: 7px;
  line-height: 20px;
  background-color: #E8E8E8;
  &:hover {
    background-color: #DDDDDD;
    border: ${(props) => (props.bordered ? "1px solid black" : "none")};
  }
`;

const Link = styled(NavLink)`
  padding: 2px;
  
`;

const Navbar: FC = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile') as string));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken: any = decode(token)

            if (decodedToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        setUser(JSON.parse(localStorage.getItem('profile') as string));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    const logout = () => {
        dispatch({type: SIGN_OUT});
        history.push('/');
        setUser(null);
    };

    return (
        <AppBar mode="horizontal">
            <LeftNav>
                <Link to="/shop" exact activeClassName="current">
                    <Button>Shop</Button>
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
                    <Link to="/login" exact activeClassName="current">
                        <Button key="design">
                            Sign in
                        </Button>
                    </Link>
                    <Link to="/register" exact activeClassName="current">
                        <Button bordered='yes' key="feed">
                            Sign up
                        </Button>
                    </Link>
                </RightNav> :
                <RightNav>
                    <Button bordered='yes' onClick={logout}>
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
                            <AccountCircle/>
                        </IconButton>
                </RightNav>
            }
        </AppBar>
    );
};
export default Navbar;
