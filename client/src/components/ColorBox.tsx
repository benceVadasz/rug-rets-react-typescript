import React, {useEffect} from "react";
import {COLORS} from "../data/colors";
import * as DS from '../pages/Design.styles'
import {useDispatch, useSelector} from "react-redux";
import {getColors, setColor} from "../state/actions/colors";
import {RootState} from "../state/store";
import AddNewColor from "./AddNewColor";
import {useLocalStorage} from "../customHooks/useLocalStorage";


const ColorBox = () => {
    const dispatch = useDispatch();
    const userState = useLocalStorage('profile')
    const userId = userState?.result._id ? userState.result._id : userState?.result.googleId

    const customColors = useSelector((state: RootState) => state.colors)
    const colorSelection = useSelector((state: RootState) => state.colorSelection)

    let colors = colorSelection === 'custom' ? customColors : COLORS;
    console.log(colors)

    useEffect(() => {
        if (userId) dispatch(getColors(userId))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const selectColor = (value: string) => {
        dispatch(setColor(value))
    }

    return (
        <DS.ColorSelector>
            {colors.map((color: { name: string, value: string }) =>
                (<DS.Color key={color.value} title={color.name}
                           style={{background: color.value}} onClick={() => selectColor(color.value)}>
                </DS.Color>)
            )}
            {colorSelection === 'custom' ? <AddNewColor/> : null}
        </DS.ColorSelector>
    );
}

export default ColorBox;