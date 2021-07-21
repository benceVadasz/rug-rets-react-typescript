import styled from "@emotion/styled";

export const Container = styled.div({
    height: '100vh',
    maxWidth: 1300,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 10px',
    display: 'grid',
    gridTemplateColumns: "repeat(9, 1fr)",
    gridTemplateRows: 'repeat(5, 1fr)',
    gridColumnGap: 0,
    gridRowGap: 0
})