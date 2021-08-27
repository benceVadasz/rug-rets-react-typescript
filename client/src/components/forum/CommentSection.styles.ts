import styled from "@emotion/styled";
import {Link as RLink} from 'react-router-dom'

export const Input = styled.input({
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    lineHeight: 1.2,
    border: 'none',
    height: 30,
    '&:focus': {
        outline: 'none !important',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0 4px 2px -2px'
    }
})

export const CommentInputContainer = styled.div({
    margin: '30px 0 0 60px',
    display: 'flex',
    width: '100%'
})

export const Comments = styled.div({
    margin: '10px 0 0 85px',
    display: 'flex',
    flexFlow: 'column',
    lineHeight: 1
})

export const Username = styled.span({
    fontWeight: 'bolder',
    fontFamily: 'IBM Plex Mono, monospace',
})

export const CommentText = styled.p({
    fontFamily: 'IBM Plex Mono, monospace',
})

export const CommentWrapper = styled.div({
    display: 'flex'
})

export const LoadMoreWrapper = styled.div({
    display: 'flex',
    justifyContent: 'center',
    // margin: '10px 0 0 100px',
    fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 'bold',
    width: '100%',
    marginLeft: -85

})

export const LoadMore = styled.span({
    '&:hover': {
        textDecoration: 'underline',
        cursor: 'pointer'
    }
})

export const Link = styled(RLink)({
    color: 'black',
    '&:hover': {
        color: 'black'
    }
})