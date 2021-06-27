import React from "react";
import { Menu } from "antd";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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

const Navbar = () => {
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
      <RightNav>
        <Link to="/login" exact activeClassName="current">
          <Button bordered={false} key="design">
            Sign in
          </Button>
        </Link>
        <Link to="/register" exact activeClassName="current">
          <Button bordered key="feed">
            Sign up
          </Button>
        </Link>
      </RightNav>
    </AppBar>
  );
};
export default Navbar;
