import React, {FunctionComponent as FC, useEffect, useState} from "react";
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
            userName: ''
        }
    ;
    const [design, setDesign] = useState<DesignType>(designDefaultValues)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get(
                `https://www.colourlovers.com/api/palette/${id}?format=json`)
            .then((res) => {
                setDesign(res.data[0])
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error)
                setLoading(false)
            });
    }, [id])

    if (loading) {
        return <DS.LoadingWrapper><Loading/></DS.LoadingWrapper>
    }
    console.log(design)
    return (
        <DS.Wrapper>
            <DS.Paper style={{backgroundImage: `url(${design.imageUrl}`}}>
                <DS.Text color={"white"}>{design.title}</DS.Text>
            </DS.Paper>
            <DS.Text color={"#444444"}>Author:</DS.Text><DS.Text color={"black"}>{design.userName}</DS.Text>
        </DS.Wrapper>
    )
}

export default DesignDetails;