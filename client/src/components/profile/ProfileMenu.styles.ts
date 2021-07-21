import styled from "@emotion/styled";
import {Typography} from 'antd'
import {Button as MButton} from '@material-ui/core'
import {NavLink} from "react-router-dom";
import {Divider as AntDivider} from "antd";
import {ThemeProps} from "../../types";

export const Paper = styled.div({
        alignItems: "center",
        display: "flex",
        flexFlow: "column",
        boxShadow: 'none',
        // backgroundColor: '#EDEDE9',
        width: 280,
        marginTop: 40
    }
);

export const Button = styled(MButton)<ThemeProps>(
    (props: ThemeProps) => ({
        width: "100%",
        fontSize: "16px",
        color: "white",
        background: props.dark ? '#DDD' : 'white !important',

        display: 'flex',
        justifyContent: "flex-start",
        '&:hover': {
            backgroundColor: '#EDEEF7 !important',
        },
        marginBottom: '5px !important',
        boxShadow: 'none !important',
        borderRadius: '0 !important',
        border: 'none !important'

    })
);

export const Typo = styled(Typography)({
    marginTop: 50,
})

export const Avatar = styled.img({
    width: 100,
    height: 100,
    display: 'inline-block',
    borderRadius: '50%'
});

export const Link = styled(NavLink)({
    width: '100%',
    textDecoration: "none",
    textAlign: 'left',
    borderRadius: 'none'
});

export const Divider = styled(AntDivider)({
    margin: "5px 0 10px 0"
});

export const AvatarContainer = styled.div<ThemeProps>(
    (props: ThemeProps) => ({
        backgroundColor: props.dark ? '#DDD' : 'white',
        width: '100%',
        padding: '10px 0 10px 0',
        display: 'flex',
        alignItems: 'center'
    })
);

export const Img = styled.img({
    margin: '0 9px 0 -5px'
})