import React, {Component, createRef} from "react";
import {Wrapper} from '../styles/Feed.styles';
import {DesignContext} from '../context/store'
import DesignCard from "../components/DesignCard";
import {DesignType} from "../types";
import {Paginator} from "../styles/Feed.styles";



export default class Feed extends Component {

    static contextType = DesignContext


    render() {
        return (
            <Wrapper>
                {this.context.designs.map((design: DesignType) => (
                    <DesignCard design={design} key={design.id}/>
                ))}
                <Paginator onChange={this.context.setPage} current={this.context.currentPage} total={70}/>
            </Wrapper>
        )
    }
}