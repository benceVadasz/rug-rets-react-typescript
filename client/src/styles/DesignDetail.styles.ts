import styled from "@emotion/styled";
import {Card, Typography} from 'antd';
import {TypographyProps} from "antd/lib/typography/Typography";
import {FunctionComponent as FC} from "react";

type TextProps = {
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

export const Text = styled(Typography)<TextProps>`
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
