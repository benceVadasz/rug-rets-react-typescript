import React, {Component} from "react";
import {Wrapper} from './Feed.styles';
import {DesignContext} from '../context/store'
import DesignCard from "../components/DesignCard";
import {DesignType} from "../types";
import {Paginator} from "./Feed.styles";
import {withTheme} from "../HOC/withTheme";
import {ThemeProps} from "../types";


class Feed extends Component<ThemeProps> {

    static contextType = DesignContext


    render() {

        return (
            <Wrapper dark={this.props.dark}>
                {this.context.designs.map((design: DesignType) => (
                    <DesignCard dark={this.props.dark} design={design} key={design.id}/>
                ))}
                <Paginator onChange={this.context.setPage} current={this.context.currentPage} total={70}/>
            </Wrapper>
        )
    }
}

export default withTheme(Feed)