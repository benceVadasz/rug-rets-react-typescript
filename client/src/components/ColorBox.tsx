import React from "react";
// import AddNewColor from "./AddNewColor";
// import {useDispatch, useSelector} from "react-redux";
// import {setColor, getColors} from "../actions/colors";
import {COLORS} from "../data/colors";
import * as DS from '../styles/Design.styles'


const ColorBox = () => {
    console.log(COLORS);
    // const dispatch = useDispatch();
    // const userId = JSON.parse(localStorage.getItem('profile'))?.result?._id ||
    //     JSON.parse(localStorage.getItem('profile'))?.result?.googleId;
    // const customColors = useSelector((state => state.colors))
    // const colorSelection = useSelector((state => state.colorSelection))

    // let colors = colorSelection === 'custom' ? customColors : COLORS;
    // console.log(colors)
    //
    // useEffect(() => {
    //     dispatch(getColors(userId))
    // }, []);
    //
    // const selectColor = (value) => {
    //     dispatch(setColor(value))
    // }

    return (
        <DS.ColorSelector>
            {COLORS.map((color: {name: string, value: string}) =>
                (<DS.Color key={color.value} title={color.name}
                      style={{background: color.value}}>
                </DS.Color>)
            )}
        </DS.ColorSelector>
    );
}

export default ColorBox;