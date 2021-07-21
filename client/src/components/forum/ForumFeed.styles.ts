import styled from "@emotion/styled";

export const Feed = styled.div({
    borderRight: '1px solid var(--twitter-background)',
    minWidth: 'fit-content',
    overflowY: 'scroll',
    gridArea: '1 / 3 / 6 / 8'
})

export const FeedHeader = styled.div({
    position: "sticky",
    top: 0,
    backgroundColor: 'white',
    zIndex: 100,
    border: '1px solid var(--twitter-background)',
    padding: '15px 20px'
})