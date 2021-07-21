import styled from "@emotion/styled";

export const Feed = styled.div({
    borderRight: '1px solid var(--twitter-background)',
    minWidth: 'fit-content',
    overflowY: 'scroll'
})

export const FeedHeader = styled.div({
    position: "sticky",
    top: 0,
    backgroundColor: 'white',
    zIndex: 100,
    border: '1px solid var(--twitter-background)',
    padding: '15px 20px'
})