import styled from "@emotion/styled";

export const Container = styled.div({
    height: '100vh',
    width: '100%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    display: 'grid',
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: 'repeat(5, 1fr)',
    gridColumnGap: 0,
    gridRowGap: 0
})