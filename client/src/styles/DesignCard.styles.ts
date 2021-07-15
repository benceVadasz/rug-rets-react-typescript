import styled from "@emotion/styled";
import {Card, Typography} from 'antd';
import {Link} from "react-router-dom";

export const Paper = styled(Card)({
  width: 240
});

export const LinkWrapper = styled(Link)({
  width: 240,
  margin: 20,
  boxShadow: 'rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
});

export const VerticalBox = styled.div({
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  float: 'right',
  border: '1px solid cornflowerblue',
  padding: 5,
  borderRadius: 5,
  minWidth: 80
})

export const HorizontalBox = styled.div({
  marginTop: 10,
  display: 'flex',
  justifyContent: 'space-around',
  width: '100%'
})

export const Text = styled(Typography)({
  fontFamily: "'IBM Plex Mono', monospace",
  fontWeight: 'bolder',
  fontSize: 16,
  margin: '5px auto 0',
})

export const Image = styled.img`
  //max-height: 150px;
`