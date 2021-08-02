import styled from "@emotion/styled";
import {Card, Typography} from 'antd';
import {ThemeProps} from "../types";

type Props = {
    color: string;
    dark?: boolean
};

type BoxProps = {
    color: string;
    tone: string;
};


export const Paper = styled(Card)({
    display: 'flex',
    width: '100%',
    height: '50vh',
    borderRadius: 15,
    border: 'none'
})

export const Wrapper = styled.div({
    width: '50%',
    }
);

export const Container = styled.div<ThemeProps>(
    (props: ThemeProps) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: props.dark ? 'linear-gradient(60deg, #29323c 0%, #485563 100%)' : '',
    })
)

export const Text = styled(Typography)<Props>(
    (props: Props) => ({
        display: 'inline',
        background: props.color === "white" ? "#194350" : "",
        color: props.color,
        padding: 3,
        fontSize: 17,
    })
)

export const LoadingWrapper = styled.div({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    alignItems: 'center'
})

export const Hex = styled.span({
    marginTop: 10
})

export const ColorBox = styled.div<BoxProps>(
    (props: BoxProps) => ({
        backgroundColor: props.color,
        color: props.tone === 'light' ? 'black' : 'white',
        width: 100,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',
        fontFamily: "'IBM Plex Mono', monospace",
        fontWeight: 'bold',
        fontSize: 16,
        '&:hover': {
            backgroundColor: `rgba(${props.color}, 0.2)`,
        }
    })
)


export const ColorContainer = styled.div({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
})
