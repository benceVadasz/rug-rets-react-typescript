import styled from "@emotion/styled";
import {Button, ButtonProps, FormProps} from "antd";
import {Card} from "antd";
import {Typography} from "antd";
import {Form, Input} from "antd";
import {TypographyProps} from "antd/lib/typography/Typography";
import {FunctionComponent as FC} from "react";
import {Button as MButton} from "@material-ui/core"

const font = 'IBM Plex Mono, monospace';


export const Wrapper = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 4px )',
    webkitBackdropFilter: 'blur( 4px )',
    borderRadius: 10,
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
});

export const Paper = styled(Card)({
    padding: '20px 20px',
    display: 'flex',
    height: 380,
    boxShadow: '0px 10px 13px -6px rgba(0, 0, 0, 0.2) 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12)'
});

export const LoginButton = styled(Button)<ButtonProps>({
    marginTop: 10,
    color: 'white',
    backgroundColor: '#394867',
    border: 'none',
    fontFamily: `${font}`,
    '&:hover': {
        backgroundColor: '#15284E',
        color: 'white'
    },
    '&:focus': {
        backgroundColor: '#394867',
        color: 'white',
    }
});

export const LoginHeader: FC<TypographyProps> = styled(Typography)({
    margin: 0,
    fontFamily: `${font}`,
    fontSize: 24,
    color: 'black',
});

export const LoginSubtitle = styled(Typography)({
  margin: '0 0 30px 0',
  fontFamily: `${font}`,
  fontSize: 12,
  color: 'black'
});

export const ErrorSubtitle = styled(Typography)({
  color: 'red',
  margin: '0 0 30px 0',
  fontFamily: `${font}`,
  fontSize: 14
});

export const LoginForm: FC<FormProps> = styled(Form)({
  height: 200,
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'space-between'
});

export const Field = styled(Form.Item)({
  fontFamily: `${font}`
})


export const PasswordField = styled(Input.Password)``
export const InputField = styled(Input)``

export const GoogleButton = styled(MButton)<ButtonProps>`

`
