import styled from "@emotion/styled";
import {Pagination} from "antd";
import {Dropdown} from 'antd';

type WrapperProps = {
    dark: boolean
}

export const Wrapper = styled.div<WrapperProps>(
    (props: WrapperProps) => ({
        margin: '0 0 30px 0',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        backgroundImage: props.dark ? 'linear-gradient(60deg, #29323c 0%, #485563 100%)' : ''
    })
);

export const Paginator = styled(Pagination)({
    margin: '10px 0 30px 0',
})

export const DropDowN = styled(Dropdown)({
    margin: '30px 0 0 40px'
})

