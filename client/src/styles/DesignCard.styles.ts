import styled from "@emotion/styled";
import {Card, Typography} from 'antd';
import {Link} from "react-router-dom";

export const Paper = styled(Card)`
  width: 240px;
`;

export const LinkWrapper = styled(Link)`
  width: 240px;
  margin: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const VerticalBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  float: right;
  border: 1px solid cornflowerblue;
  padding: 5px;
  border-radius: 5px;
  min-width: 80px;
`

export const HorizontalBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const Text = styled(Typography)`
  font-family: 'IBM Plex Mono', monospace;
  font-weight: bolder;
  font-size: 16px;
  margin: 5px auto 0;
`

export const Image = styled.img`
  //max-height: 150px;
`