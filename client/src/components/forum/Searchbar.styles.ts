import styled from "@emotion/styled";
import { Input } from 'antd';

export  const Container = styled.div({
    gridArea: '1 / 11 / 6 / 13',
    padding: '5px 0 0 20px'
})

export const SearchInput = styled(Input)({
    width: '80%',
    margin: '15px 0',
    borderRadius: 15,
    border: '1px solid #0969a3'
})