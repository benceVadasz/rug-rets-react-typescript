import React, { Component } from 'react'
import styled from '@emotion/styled'

const H1 = styled.h1(
    {
        fontSize: 20
    },
    props => ({ color: props.color })
)

export default class LoginTitle extends Component {



  render() {
    return (
      <H1 color="black">Login</H1>
    )
  }
}