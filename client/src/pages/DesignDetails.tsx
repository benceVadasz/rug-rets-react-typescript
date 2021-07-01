import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {ParamTypes} from "../types";
import axios from "axios";
import {DesignType} from "../types";
import * as DS from '../styles/DesignDetail.styles';
import Loading from "../util/Loading";

const DesignDetails = () => {
    const {id} = useParams<ParamTypes>();

    const designDefaultValues: DesignType = {
            id: id,
            title: '',
            colors: [],
            imageUrl: '',
            description: '',
            userName: '',
            rank: 0,
            numVotes: 0
        }
    ;
    const [design, setDesign] = useState<DesignType>(designDefaultValues)
    const [loading, setLoading] = useState(false)
    const [copied, setCopied] = useState('')

    useEffect(() => {
        setLoading(true)
        axios
            .get(
                `https://www.colourlovers.com/api/pattern/${id}?format=json`)
            .then((res) => {
                setDesign(res.data[0])
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error)
                setLoading(false)
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const copy = (event: React.MouseEvent<HTMLDivElement>, color: string) => {
        navigator.clipboard.writeText(`#${color}`)
        setCopied(color)
        setTimeout(() => {
            setCopied('')
        }, 3000)
    }

    if (loading) {
        return <DS.LoadingWrapper><Loading/></DS.LoadingWrapper>
    }
    console.log(design)
    return (
        <DS.Wrapper>
            <DS.Paper style={{backgroundImage: `url(${design?.imageUrl}`}}>
                <DS.Text color={"white"}>{design.title}</DS.Text>
            </DS.Paper>
            <DS.Text color={"#444444"}>Author:</DS.Text>
            <DS.Text color={"black"}>{design.userName}</DS.Text><br/>
            <DS.Text color={"#444444"}>Colors:</DS.Text>
            <DS.ColorContainer>
                {design.colors.map(color => <DS.ColorBox
                    onClick={(e) => copy(e, color)}
                    color={`#${color}`}>
                    <DS.Hex>{copied !== color ? `#${color}` : 'copied'}</DS.Hex>
                </DS.ColorBox>)}
            </DS.ColorContainer>
        </DS.Wrapper>
    )
}

export default DesignDetails;