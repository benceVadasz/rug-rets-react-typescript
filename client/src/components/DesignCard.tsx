import React, {FunctionComponent as FC} from 'react';
import {DesignType} from "../types";
import {Card} from 'antd';
import * as FS from "../styles/DesignCard.styles";
import {CaretUpOutlined, HeartOutlined} from "@ant-design/icons";


export interface DesignCardProps {
    design: DesignType,
}

const DesignCard: FC<DesignCardProps> = ({design}: DesignCardProps) => {

    const {Meta} = Card;

    return (
        <FS.LinkWrapper to={`/design/${design.id}`}>
            <FS.Paper
                hoverable
                bordered={false}
                cover={<img alt="example" src={design.imageUrl}/>}
            >
                <Meta title={design.title} description={`by: ${design.userName}`}/>
                <FS.HorizontalBox>
                    <FS.VerticalBox>
                        <FS.Text>Rank:</FS.Text>
                        <CaretUpOutlined/>
                        <FS.Text> {design.rank}</FS.Text>
                    </FS.VerticalBox>
                    <FS.VerticalBox>
                        <FS.Text>Hearts:</FS.Text>
                        <HeartOutlined/>
                        <FS.Text> {design.numHearts}</FS.Text>
                    </FS.VerticalBox>
                </FS.HorizontalBox>
            </FS.Paper>
        </FS.LinkWrapper>
    )
};


export default DesignCard;
