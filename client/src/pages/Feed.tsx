import React, {useContext, FunctionComponent as FC} from "react";
import {Wrapper} from '../styles/Feed.styles';
import {DesignContext} from '../context/store'
import DesignCard from "../components/DesignCard";
import {DesignType} from "../types";
import {Paginator} from "../styles/Feed.styles";

const Feed: FC = () => {

    const {designs, setPage, currentPage} = useContext(DesignContext)

    console.log(currentPage)

    return (
        <>
            <Wrapper>
                {designs.map((design: DesignType) => (
                    <DesignCard design={design} key={design.id}/>
                ))}
                <Paginator onChange={setPage} current={currentPage} total={70}/>
            </Wrapper>
        </>
    );
}

export default Feed;