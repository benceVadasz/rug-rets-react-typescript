import React, {useEffect, useState} from "react";
import {COLORS} from "../data/colors";
import * as DS from '../pages/Design.styles'
import {useDispatch, useSelector} from "react-redux";
import {setColor} from "../state/actions/colors";
import {RootState} from "../state/store";
import AddNewColor from "./AddNewColor";
import {useQuery} from "@apollo/client";
import {GET_COLORS} from "../util/graphql";



const ColorBox = () => {
    const dispatch = useDispatch();
    const {data, loading} = useQuery(GET_COLORS);

    const [customColors, setColors] = useState([])

    const colorSelection = useSelector((state: RootState) => state.colorSelection)

    let colors = colorSelection === 'custom' ? customColors : COLORS;

    useEffect(() => {
        if (data) {
            setColors(data.getColors)
            console.log(colors)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);


    const selectColor = (value: string) => {
        dispatch(setColor(value))
    }


    return (
        <DS.ColorSelector>
            { loading? <h1>Loading</h1> :
                colors.map((color: { name: string, value: string }) =>
                (<DS.Color key={color.value} title={color.name}
                           style={{background: color.value}} onClick={() => selectColor(color.value)}>
                </DS.Color>)
            )}
            {colorSelection === 'custom' ? <AddNewColor/> : null}
        </DS.ColorSelector>
    );
}

export default ColorBox;