import styled from "@emotion/styled";
import {Card, Typography} from 'antd';

type Props = {
    color: string;
};

type BoxProps = {
    color: string;
    tone: string;
};

export const Paper = styled(Card)`
  display: flex;
  width: 100%;
  height: 50vh;
  margin: 100px auto 0;
  border-radius: 15px;
`

export const Wrapper = styled.div`
  width: 50%;
  margin: 100px auto 0;
`

export const Text = styled(Typography)<Props>`
  display: inline;
  background: ${(props) => (props.color === "white" ? "#194350" : "")};
  color: ${(props) => props.color};
  padding: 3px;
  font-size: 17px;
`

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Hex = styled.span`
    margin-top: 10px;
`

export const ColorBox = styled.div<BoxProps>`
  width: 100px;
  height: 50px;
  background-color: ${(props) => (props.color)};
  color: ${(props) => (props.tone) === 'light' ? 'black' : 'white'};
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    background-color: rgba(${(props) => (props.color)}, 0.2);
  }
`


export const ColorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
