import React, {useEffect} from "react";
import {COLORS} from "../data/colors";
import * as DS from '../styles/Design.styles'
import {useDispatch, useSelector} from "react-redux";
import {getColors} from "../state/actions/colors";
import {RootState} from "../state/store";
import AddNewColor from "./AddNewColor";
// import {useDispatch, useSelector} from "react-redux";
// import {setColor, getColors} from "../actions/colors";


const ColorBox = () => {
    const dispatch = useDispatch();
    const userId = JSON.parse(localStorage.getItem('profile') as string)?.result?._id ||
        JSON.parse(localStorage.getItem('profile') as string)?.result?.googleId;
    const customColors = useSelector((state: RootState) => state.colors)
    const colorSelection = useSelector((state: RootState) => state.colorSelection)

    let colors = colorSelection === 'custom' ? customColors : COLORS;
    console.log(colors)

    useEffect(() => {
        if (userId) dispatch(getColors(userId))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //
    // const selectColor = (value) => {
    //     dispatch(setColor(value))
    // }

    return (
        <DS.ColorSelector>
            {colors.map((color: { name: string, value: string }) =>
                (<DS.Color key={color.value} title={color.name}
                           style={{background: color.value}}>
                </DS.Color>)
            )}
            {colorSelection === 'custom' ? <AddNewColor/> : null}
        </DS.ColorSelector>
    );
}

export default ColorBox;