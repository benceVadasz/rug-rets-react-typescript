import styled from "@emotion/styled";
import {Form as AntForm, Button as AntButton} from 'antd'

export const Container = styled.div({
    paddingBottom: 10,
    borderBottom: '8px solid var(--twitter-background)',
    paddingRight: 10
})

export const Form = styled(AntForm)({})

export const InputBox = styled.div({
    padding: 20,
    display: 'flex'
})

export const Input = styled.textarea({
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
    lineHeight: 1.2,
    border: 'none',
    height: 70,
    '&:focus': {
        outline: 'none !important',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
    }
})

export const Button = styled(AntButton)({
    backgroundColor: '#0969a3',
    border: 'none !important',
    color: 'white',
    fontWeight: "bolder",
    borderRadius: '30px',
    width: 80,
    height: 40,
    marginTop: 20,
    marginLeft: '80%',
    '&:hover': {
        color: 'white',
        backgroundColor: '#20232A !important'
    },
    '&:focus': {
        backgroundColor: '#0969a3',
        color: 'white',
    }
})

