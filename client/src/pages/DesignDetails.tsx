import React, {FunctionComponent as FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import {ParamTypes} from "../types";
import axios from "axios";
import {DesignType} from "../types";

const DesignDetails: FC = () => {
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

    console.log(design)
    useEffect(() => {
        axios
            .get(
                `https://www.colourlovers.com/api/palette/${id}?format=json`)
            .then((res) => {
                setDesign(res.data[0])
            })
            .catch(function (error) {
                console.log(error)
            });
    }, [id])

    return (
        <div>
            <div>
                <h1>{design.title}</h1>
            </div>
        </div>
    )
}

export default DesignDetails;