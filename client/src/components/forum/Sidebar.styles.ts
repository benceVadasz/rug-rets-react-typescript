import styled from "@emotion/styled";
import {LinearProgress} from "@material-ui/core";
import {Link} from 'react-router-dom'

export const Container = styled.div({
    // gridArea: '1 / 2 / 6 / 3',
    fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 'bolder',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    minWidth: '100%',
    backgroundColor: 'white',
    padding: '7px 20px 20px 0',
    maxHeight: '100vh'
})


export const SideBarTitle = styled.h3({
    color: '#0969a3',
    marginLeft: 20
})

export const LikeCountContainer = styled.div({
    // fontFamily: 'IBM Plex Mono, monospace',
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    paddingLeft: 20,
    justifyContent: 'flex-start',
    margin: '5px 0 0 5px',
    '&:hover':{
        backgroundColor: '#F8F6F6',
    }
})

export const LikeCountUsername = styled(Link)({
    marginRight: 7,
    color: 'black',
    fontWeight: 'bolder',
    '&:hover':{
        textDecoration: 'underline',
        cursor: 'pointer',
        color: 'black',
    },
})

export const LikeCount = styled.h3({
    margin: '1px 2px 0 0',
    fontSize: 12,
    color: 'gray'
})

export const Loading = styled(LinearProgress)({
    marginTop: 20
})