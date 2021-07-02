import React, {FunctionComponent as FC, useState, useEffect} from "react";
import {Menu} from "antd";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LOGOUT} from "../state/constants/actionTypes";
import {useHistory, useLocation} from 'react-router-dom';
import decode from "jwt-decode";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';


type ButtonProps = {
    bordered: boolean;
};

const AppBar = styled(Menu)`
  background-color: #f6f6f6;
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
  right: 2%;
`;

const Button = styled(Menu.Item)<ButtonProps>`
  color: black !important;
  font-family: IBM Plex Mono, monospace;
  border: ${(props) => (props.bordered ? "1px solid black" : "")};
  border-radius: 3px;
  padding: 7px;
`;

const Link = styled(NavLink)`
  padding: 2px;
  line-height: 20px;
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
    }, [location]);

    const logout = () => {
        dispatch({type: LOGOUT});
        history.push('/auth');
        setUser(null);
    };

    return (
        <AppBar mode="horizontal">
            <LeftNav>
                <Link to="/shop" exact activeClassName="current">
                    <Button bordered={false}>Shop</Button>
                </Link>
                <Link to="/design" exact activeClassName="current">
                    <Button bordered={false} key="design">
                        Design
                    </Button>
                </Link>
                <Link to="/feed" exact activeClassName="current">
                    <Button bordered={false} key="feed">
                        Feed
                    </Button>
                </Link>
            </LeftNav>
            {!user ?
                <RightNav>
                    <Link to="/login" exact activeClassName="current">
                        <Button bordered={false} key="design">
                            Sign in
                        </Button>
                    </Link>
                    <Link to="/register" exact activeClassName="current">
                        <Button bordered={true} key="feed">
                            Sign up
                        </Button>
                    </Link>
                </RightNav> :
                <RightNav>
                    <Button className=' lower-case' onClick={logout} color="inherit" bordered={false}>
                        Logout
                    </Button>
                    <Link to="/profile" exact activeClassName="current">
                        <IconButton
                            component={Link}
                            to="/profile/account"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </Link>
                </RightNav>
            }
        </AppBar>
    );
};
export default Navbar;
