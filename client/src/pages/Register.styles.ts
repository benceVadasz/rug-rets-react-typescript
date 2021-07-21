import styled from "@emotion/styled";
import {Button as AntButton, ButtonProps, FormProps} from "antd";
import {Card} from "antd";
import {Typography} from "antd";
import {Form, Input} from "antd";
import {TypographyProps} from "antd/lib/typography/Typography";
import {FunctionComponent as FC} from "react";

const font = 'IBM Plex Mono, monospace';

export const Wrapper = styled.div({
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
});

export const Paper = styled(Card)({
    padding: '30px 20px',
    height: 570,
    width: 400,
    boxShadow: '0px 10px 13px -6px rgba(0, 0, 0, 0.2) 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12)'
});

export const RegisterButton = styled(AntButton)<ButtonProps>({
    marginTop: 10,
    color: 'white',
    backgroundColor: '#394867',
    border: 'none',
    fontFamily: `${font}`,
    '&:hover': {
        backgroundColor: '#15284E',
        color: 'black'
    },
    '&:focus': {
        backgroundColor: '#394867',
        color: 'white',
    }
});

export const RegisterHeader: FC<TypographyProps> = styled(Typography)({
    margin: 0,
    fontFamily: `${font}`,
    fontSize: 24,
    color: 'black'
});

export const RegisterSubtitle = styled(Typography)({
  margin: '0 0 30px 0',
  fontFamily: `${font}`,
  fontSize: 12,
  color: 'black'
});

export const ErrorSubtitle = styled(Typography)({
  color: 'red',
  margin: '0 0 30px 0',
  fontFamily: `${font}`,
  fontSize: 12,
});

export const RegisterForm: FC<FormProps> = styled(Form)({
  height: 380,
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'space-between'
});

export const Field = styled(Form.Item)({
    fontWeight: "bolder",
    fontFamily: `${font}`
})

export const PasswordField = styled(Input.Password)``
export const InputField = styled(Input)({
    width: 300
})

export const SaveButton = styled(AntButton)({
    color: 'black',
    backgroundColor: '#A6A9B6',
    width: 300,
    border: 'none',
    fontFamily: `${font}`,
    '&:hover': {
        backgroundColor: '#747474',
        color: 'white'
    },
    '&:focus': {
        backgroundColor: '#A6A9B6',
        color: 'black'
    }
})
