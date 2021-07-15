import styled from "@emotion/styled";
import {Pagination} from "antd";
import {Dropdown} from 'antd';

export const Wrapper = styled.div({
  margin: '0 0 30px 0',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
});

export const Paginator = styled(Pagination)({
  margin: '10px 0 30px 0',
})

export const DropDowN = styled(Dropdown)({
  margin: '30px 0 0 40px'
})

