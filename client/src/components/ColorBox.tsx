import React, {useEffect, useState} from "react";
import {COLORS} from "../data/colors";
import * as DS from '../pages/Design.styles'
import {useDispatch, useSelector} from "react-redux";
import {setColor} from "../state/actions/colors";
import {RootState} from "../state/store";
import AddNewColor from "./AddNewColor";
import {useQuery} from "@apollo/client";
import {DELETE_COLOR, GET_COLORS} from "../util/graphql";
import x from '../assets/remove.svg'
import {useMutation} from "@apollo/client";
import {ColorType} from "../types";


const ColorBox = () => {
    const dispatch = useDispatch();
    const {data, loading} = useQuery(GET_COLORS);

    const [customColors, setColors] = useState([])

    const colorSelection = useSelector((state: RootState) => state.colorSelection)

    let colors = colorSelection === 'custom' ? customColors : COLORS;

    const paddingNeeded = colorSelection === 'custom' && colors.length % 2 === 1

    console.log(paddingNeeded)

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

    const [deleteColor] = useMutation(DELETE_COLOR)

    const removerColor = async (id: string | undefined) => {
        await deleteColor({variables: {id}, refetchQueries: [{ query: GET_COLORS }]})
    }

    return (
        <DS.ColorSelector>
            {loading ? <h1>Loading</h1> :
                colors.map((color: ColorType) =>
                    (<DS.ColorWrapper>
                        { colorSelection === 'custom' ?
                            <DS.DeleteIcon onClick={
                                () => {
                                    removerColor(color._id)
                                    console.log(color)
                                }} src={x}/>
                        : null}
                        <DS.Color key={color.value} title={color.name}
                                  style={{background: color.value}} onClick={() => selectColor(color.value)}>
                        </DS.Color>
                    </DS.ColorWrapper>)
                )}
            {colorSelection === 'custom' ? <AddNewColor paddingNeeded={paddingNeeded}/> : null}
        </DS.ColorSelector>
    );
}

export default ColorBox;