import styled from "@emotion/styled";
import {Card} from 'antd';
import {Link} from "react-router-dom";

export const Paper = styled(Card)`
  width: 240px;
`;

export const LinkWrapper = styled(Link)`
  width: 240px;
  margin: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;