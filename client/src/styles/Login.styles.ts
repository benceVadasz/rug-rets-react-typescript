import styled from "@emotion/styled";
import {Button, ButtonProps, FormProps} from "antd";
import { Card } from "antd";
import { Typography } from "antd";
import { Form, Input } from "antd";
import { TypographyProps } from "antd/lib/typography/Typography";
import {FunctionComponent as FC} from "react";
import {Button as MButton} from "@material-ui/core"

const font = 'IBM Plex Mono, monospace';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const Paper = styled(Card)`
  padding: 20px 20px;
  display: flex;
  height: 380px;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
    0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
`;

export const LoginButton = styled(Button)<ButtonProps>`
  margin-top: 10px;
  color: white;
  background-color: #394867;
  border: none;
  font-family: ${font};
  &:hover {
    background-color: #15284E;
    color: white;
      }
`;

export const LoginHeader: FC<TypographyProps> = styled(Typography)`
  margin: 0;
  font-family: ${font};
  font-size: 24px;
  color: black;
`;

export const LoginSubtitle = styled(Typography)`
  margin: 0 0 30px 0;
  font-family: ${font};
  font-size: 12px;
  color: black;
`;

export const ErrorSubtitle = styled(Typography)`
  color: red;
  margin: 0 0 30px 0;
  font-family: ${font};
  font-size: 12px;
`;

export const LoginForm: FC<FormProps> = styled(Form)`
  height: 200px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

export const Field = styled(Form.Item)`

`

export const PasswordField = styled(Input.Password)``
export const InputField = styled(Input)``

export const GoogleButton = styled(MButton)<ButtonProps>`
  
`
