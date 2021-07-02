import React, {useContext, FunctionComponent as FC, useState} from "react";
import {Wrapper} from '../styles/Feed.styles';
import {DesignContext} from '../context/store'
import DesignCard from "../components/DesignCard";
import {DesignType} from "../types";
import {Paginator} from "../styles/Feed.styles";
import {DropDowN} from "../styles/Feed.styles";
import {DownOutlined} from "@ant-design/icons";
import {Button, Menu} from 'antd';
import Loading from "../util/Loading";
import {LoadingWrapper} from "../styles/DesignDetail.styles";

const Feed: FC = () => {

    const {designs, setPage, currentPage, setParam, loading} = useContext(DesignContext);

    const [param, paramSet] = useState('');

    const select = (e: any) => {
        let value = e.domEvent.target.innerHTML;
        paramSet(e.domEvent.target.innerHTML.toLowerCase())
        console.log(value.toLowerCase())
        setParam(`/${value.toLowerCase()}`)
    }

    console.log(currentPage)
    const menu = (
        <Menu onClick={select}>
            <Menu.Item key="1">
                Top
            </Menu.Item>
            <Menu.Item key="2">
                New
            </Menu.Item>
            <Menu.Item key="3">
                Random
            </Menu.Item>
        </Menu>
    );

    if (loading) {
        return <LoadingWrapper><Loading/></LoadingWrapper>
    }

    return (
        <>
            <DropDowN overlay={menu}>
                <Button>
                    {param === '' ? 'Sort' : param} <DownOutlined/>
                </Button>
            </DropDowN>
            <Wrapper>
                {designs.map((design: DesignType) => (
                    <DesignCard design={design} key={design.id}/>
                ))}
                {param !== 'random' ? <Paginator onChange={setPage} current={currentPage} total={70}/> : null}
            </Wrapper>
        </>
    );
}

export default Feed;