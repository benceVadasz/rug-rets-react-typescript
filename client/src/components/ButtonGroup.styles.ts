import styled from "@emotion/styled";
import {Button as AntButton} from "antd";

export const OrderButton = styled(AntButton)({
  backgroundColor: '#15284E',
  boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px',
  color: 'white',
  '&:hover': {
    backgroundColor: '#394867',
    color: 'white'
  },
  border: 'none',
  width: '40%',
  height: 40,
  borderRadius: 3

})

export const SaveButton = styled(AntButton)({
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        width: '40%',
        borderRadius: 3,
        height: 40,
        backgroundColor: 'lightgray',
        border: 'none',
        '&:hover': {
            backgroundColor: '#e6e6e6',
            color: 'black'
        }
    }
)

export const ButtonContainer = styled.div({
  marginTop: 30,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around'})