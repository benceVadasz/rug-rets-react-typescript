import styled from "@emotion/styled";
import {LinearProgress} from "@material-ui/core";

export const Container = styled.div({
    gridArea: '1 / 1 / 6 / 3',
    fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 'bolder',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    width: '100%',
})

export const SideBarTitle = styled.h2({
    color: '#0969a3',
})

export const LikeCountContainer = styled.div({
    // fontFamily: 'IBM Plex Mono, monospace',
    display: 'flex',
    width: '60%',
    justifyContent: 'flex-start',
    margin: '5px 0 0 20px'

})

export const LikeCountUsername = styled.h3({
    marginRight: 7,
    '&:hover':{
        textDecoration: 'underline',
        cursor: 'pointer'
    }
})

export const LikeCount = styled.h3({
    margin: '1px 2px 0 0',
})

export const Loading = styled(LinearProgress)({
    marginTop: 20
})