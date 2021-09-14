import styled from "@emotion/styled";
import {Typography, Avatar as AntAvatar, Dropdown as AntDropdown, Button as AntButton} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";
import {Link as ALink} from 'react-router-dom'

type TextProps = {
    bold?: string,
    message?: string,
    time?: string,
    userpage?: string | null
}

export const Post = styled.div({
    maxWidth: '100%',
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
    paddingBottom: 30,
    minHeight: '25vh',
});

export const Text = styled(Typography)<TextProps>(
    (props: TextProps) => ({
        fontFamily: 'IBM Plex Mono, monospace',
        fontWeight: props.bold ? 'bolder' : 'normal',
        display: props.bold ? 'inline-block' : '',
        paddingLeft: 5,
        margin: props.message ? '0 0 20px 108px' : props.userpage ? '0 15% 0 0' : 0,
        width: props.message ? '70%' : '',
        color: props.time ? '#787A91' : 'black',
    })
);

export const Image = styled.img({
    borderRadius: 5,
    width: '76%',

})

export const ImageContainer = styled.div({
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
})

export const Avatar = styled(AntAvatar)({
})

export const PostHeaderContainer = styled.div({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: '30px 0 0 55px',
    position: "relative"
})

export const InfoContainer = styled.div({
    display: 'flex',
    width: '28%',
    justifyContent: "space-around",
    alignItems: 'center'
});

export const Dropdown = styled(AntDropdown.Button)({
    border: 'none',
    justifySelf: 'flex-end',
    position: "absolute",
    right: 140
})

export const Ellipsis = styled(EllipsisOutlined)({
    transform: 'rotate(90deg)',
    fontSize: '150%',
    float: "right",
    color: "black",
    '&:hover': {
        fontSize: '180%',
    }
})

export const LikeContainer = styled.div({
    margin: '10px 0 0 85px',
    fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 'bolder',
    fontSize: 16
})

export const Info = styled.div({
    margin: '15px 0 0 110px',
    display: 'flex',
    fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 'bolder',
    fontSize: 16,
    justifyContent: 'space-around',
    width: 100
})

export const Input = styled.textarea({
    flex: 1,
    fontSize: 16,
    lineHeight: 1.2,
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
    height: 70,
    border: 'none',
    paddingLeft: 5,
    '&:focus': {
        outline: 'none !important',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
    }
})

export const InputContainer = styled.div({
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'center',
    width: '76%',
})

export const FileUploadContainer = styled.div({
    margin: '1% 0 0 12%'
})

export const ButtonGroup = styled.div({
    display: 'flex',
    width: '100%'
})

export const Button = styled(AntButton)({
    backgroundColor: '#0969a3',
    border: 'none !important',
    color: 'white',
    fontWeight: "bolder",
    borderRadius: '30px',
    justifySelf: 'flex-end',
    width: 80,
    height: 40,
    marginLeft: '27%',
    '&:hover': {
        color: 'white',
        backgroundColor: '#20232A !important'
    },
    '&:focus': {
        backgroundColor: '#0969a3',
        color: 'white',
    }
})

export const Link = styled(ALink)({
    color: "black",
    marginLeft: 15,
    fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 'bold',
    '&:hover': {
        textDecoration: 'underline',
        color: 'black'
    }
})