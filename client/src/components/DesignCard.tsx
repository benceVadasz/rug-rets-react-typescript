import React, {FunctionComponent as FC} from 'react';
import {DesignType} from "../types";
import {Card} from 'antd';
import * as DS from "../styles/DesignCard.styles";
import {CaretUpOutlined, HeartOutlined} from "@ant-design/icons";


export interface DesignCardProps {
    design: DesignType,
}

const DesignCard: FC<DesignCardProps> = ({design}: DesignCardProps) => {

    const {Meta} = Card;

    return (
        <DS.LinkWrapper to={`/design/${design.id}`}>
            <DS.Paper
                hoverable
                bordered={false}
                cover={<DS.Image alt="example" src={design.imageUrl}/>}
            >
                <Meta title={design.title} description={`by: ${design.userName}`}/>
                <DS.HorizontalBox>
                    <DS.VerticalBox>
                        <DS.Text>Rank:</DS.Text>
                        <CaretUpOutlined/>
                        <DS.Text> {design.rank}</DS.Text>
                    </DS.VerticalBox>
                    <DS.VerticalBox>
                        <DS.Text>Votes:</DS.Text>
                        <HeartOutlined/>
                        <DS.Text> {design.numVotes}</DS.Text>
                    </DS.VerticalBox>
                </DS.HorizontalBox>
            </DS.Paper>
        </DS.LinkWrapper>
    )
};


export default DesignCard;
