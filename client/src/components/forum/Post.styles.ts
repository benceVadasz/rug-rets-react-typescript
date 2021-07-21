import styled from "@emotion/styled";
import {Typography, Avatar as AntAvatar, Dropdown as AntDropdown} from "antd";
import {EllipsisOutlined} from "@ant-design/icons";

type TextProps = {
    bold?: string,
    message?: string,
    time?: string
}

export const Post = styled.div({
    width: '100%',
    marginBottom: 100,
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
    paddingBottom: 30
});

export const Text = styled(Typography)<TextProps>(
    (props: TextProps) => ({
        fontFamily: 'IBM Plex Mono, monospace',
        fontWeight: props.bold ? 'bolder' : 'normal',
        paddingLeft: 5,
        margin: props.message ? '0 0 20px 103px' : 0,
        color: props.time ? '#787A91' : 'black'
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
    margin: '30px 0 0 70px',
})

export const Dropdown = styled(AntDropdown.Button)({
    border: 'none',
    justifySelf: 'flex-end',
    marginLeft: 433,
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
