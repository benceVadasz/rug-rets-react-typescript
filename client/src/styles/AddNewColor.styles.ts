import styled from "@emotion/styled";

export const ColorAdderWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 70,
  height: 70,
  borderRadius: 5,
  border: '3px solid #15284E',
  cursor: 'pointer',
  marginBottom: 30,
  '&:hover': {
    backgroundColor: '#DDDDDD'
  }
})