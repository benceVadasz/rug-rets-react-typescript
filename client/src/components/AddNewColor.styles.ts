import styled from "@emotion/styled";

type CAProps = {
    paddingNeeded: boolean
}

export const ColorAdderWrapper = styled.div<CAProps>(
    (props: CAProps) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 5,
        border: '3px solid #15284E',
        cursor: 'pointer',
        marginBottom: props.paddingNeeded ? 0 : 30,
        marginRight: props.paddingNeeded ? 10 : 0,
        '&:hover': {
            backgroundColor: '#DDDDDD'
        }
    })
);
