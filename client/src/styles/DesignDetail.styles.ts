import styled from "@emotion/styled";
import {Card, Typography} from 'antd';

type Props = {
    color: string;
};

type BoxProps = {
    color: string;
    tone: string;
};

export const Paper = styled(Card)({
    display: 'flex',
    width: '100%',
    height: '50vh',
    margin: '100px auto 0',
    borderRadius: 15
})

export const Wrapper = styled.div({
    width: '50%',
    margin: '100px auto 0'
})

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
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
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
