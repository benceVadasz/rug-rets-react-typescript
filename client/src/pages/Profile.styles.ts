import styled from "@emotion/styled";
import {ThemeProps} from "../types";

export const Container = styled.div<ThemeProps>(
    (props: ThemeProps) => ({
        padding: '20px 150px 0 120px',
        display: 'flex',
        backgroundImage: props.dark ? 'linear-gradient(60deg, #29323c 0%, #485563 100%)' : '',
        minHeight: '100vh'
    })
);

export const BG = styled.div({
    backgroundColor: '#EEEEEE',
    position: 'relative',
    minHeight: '100vh',
});
export const Grid = styled.div<ThemeProps>(
    (props: ThemeProps) => ({
        border: props.dark ? '1px solid #55C6EA' : '',
        backgroundColor: props.dark ? '#DDDDDD' : 'white',
        width: 600,
        height: '92vh',
        margin: '42px 0 0 70px'
    })
);

export const ProfileContainer = styled.div<ThemeProps>(
    (props: ThemeProps) => ({
        minHeight: '100vh',
        width: 600,
        backgroundColor: props.dark ? '#DDDDDD' : 'white',
        margin: '42px 0 0 70px'
    })
)