import styled from "@emotion/styled";
import {Card, Typography} from 'antd';
import {lightOrDark} from "../util/colorChecker";

type Props = {
    color: string;
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
`

export const ColorBox = styled.div<Props>`
  width: 100px;
  height: 50px;
  background-color: ${(props) => (props.color)};
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(${(props) => (props.color)}, 0.2);
  }
`


export const ColorContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
