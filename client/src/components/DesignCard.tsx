import React, {FunctionComponent as FC} from 'react';
import {Paper} from '../styles/DesignCard.styles';
import {DesignType} from "../types";
import {Card} from 'antd';
import {LinkWrapper} from "../styles/DesignCard.styles";


export interface DesignCardProps {
    design: DesignType,
}

const DesignCard: FC<DesignCardProps> = ({design}: DesignCardProps) => {

    const {Meta} = Card;

    return (
        <LinkWrapper to={`/design/${design.id}`}>
            <Paper
                hoverable
                bordered={false}
                cover={<img alt="example" src={design.imageUrl}/>}
            >
                <Meta title={design.title} description={`by: ${design.userName}`}/>
            </Paper>
        </LinkWrapper>
    )
};


export default DesignCard;
