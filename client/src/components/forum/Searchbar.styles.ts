import styled from "@emotion/styled";
import { Input } from 'antd';

export  const Container = styled.div({
    gridArea: '1 / 8 / 6 / 10',
})

export const SearchInput = styled(Input)({
    width: '80%',
    margin: '15px 0 0 15px',
    borderRadius: 15,
    border: '1px solid #0969a3'
})