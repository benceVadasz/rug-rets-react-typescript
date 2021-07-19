import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Rug from "./Rug";
import {useDispatch} from "react-redux";
import {setColorArray} from "../state/actions/shapes";
import {RootState} from "../state/store";
import {CanvaS} from "../styles/Design.styles";

const Canvas = () => {
    const dispatch = useDispatch();
    const shape = useSelector((state: RootState) => state.shape)
    const color = useSelector((state: RootState) => state.color)
    console.log(color)
    const colorChosen = color.length > 0;
    const colorArray = useSelector((state: RootState) => state.shapeColorArray)

    // todo: check what the design type selection is in redux store | fetch it in useEffect

    const fill = (i: number) => {
        if (colorChosen) {
            const newFillColors = add(i);
            dispatch(setColorArray(newFillColors))
        }
    }

    const add = (index: number) => {
        const fin = []
        for (let i = 0; i < colorArray.length; i++) {
            if (i === index) {
                fin.push(color)
            } else if (colorArray[i] === 'white') {
                fin.push('white')
            } else {
                fin.push(colorArray[i])
            }
        }
        return fin;
    }

    return (
        <CanvaS colorChosen={colorChosen}>
            {colorArray.length>0?<Rug size={793.70076} file={shape} onFill={fill} fillColors={colorArray}/>:null}
        </CanvaS>
    );
}

export default Canvas;