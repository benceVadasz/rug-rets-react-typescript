import styled from "@emotion/styled";
import {Card} from "@material-ui/core";
import {Skeleton as MSkeleton} from "@material-ui/lab";

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

export const Media = styled(Card)({
    width: '100%',
    height: '60%',
})

export const Skeleton = styled(MSkeleton)({

})