import React, {Component} from 'react';
import {DesignType} from "../types";
import {Card} from 'antd';
import * as DS from "../styles/DesignCard.styles";
import {CaretUpOutlined, HeartOutlined} from "@ant-design/icons";


type DesignCardProps = {
    design: DesignType,
    dark: boolean
}

class DesignCard extends Component<DesignCardProps> {

    render() {
        const {Meta} = Card;
        return (
            <DS.LinkWrapper to={`/design/${this.props.design.id}`}>
                <DS.Paper
                    dark={this.props.dark}
                    hoverable
                    bordered={false}
                    cover={<DS.Image alt="example" src={this.props.design.imageUrl}/>}
                >
                    <Meta title={this.props.design.title} description={`by: ${this.props.design.userName}`}/>
                    <DS.HorizontalBox>
                        <DS.VerticalBox>
                            <DS.Text>Rank:</DS.Text>
                            <CaretUpOutlined/>
                            <DS.Text> {this.props.design.rank}</DS.Text>
                        </DS.VerticalBox>
                        <DS.VerticalBox>
                            <DS.Text>Votes:</DS.Text>
                            <HeartOutlined/>
                            <DS.Text> {this.props.design.numVotes}</DS.Text>
                        </DS.VerticalBox>
                    </DS.HorizontalBox>
                </DS.Paper>
            </DS.LinkWrapper>
        );
    }
}


export default DesignCard;
