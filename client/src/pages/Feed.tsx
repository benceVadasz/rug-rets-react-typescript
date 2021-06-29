import React, {useContext, FunctionComponent as FC} from "react";
import {Wrapper} from '../styles/Feed.styles';
import {DesignContext} from '../context/DesignProvider'
import DesignCard from "../components/DesignCard";
import {DesignType} from "../types";

const Feed: FC = () => {

    const {designs} = useContext(DesignContext)

    console.log(designs)



    return (
        <Wrapper>
            {designs.map((design:DesignType) => (
                <DesignCard design={design} key={design.id}/>
            ))}
        </Wrapper>
    );
}

export default Feed;