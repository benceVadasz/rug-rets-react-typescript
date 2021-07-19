import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import Rug from "./Rug";
import {useDispatch} from "react-redux";
import {setColorArray} from "../state/actions/shapes";
import {RootState} from "../state/store";

const Canvas = () => {
    const dispatch = useDispatch();
    const shape = useSelector((state: RootState) => state.shape)
    const color = useSelector((state: RootState) => state.color)
    const colorChosen = color.length > 0;
    const colorArray = useSelector((state: RootState) => state.shapeColorArray)

    const useStyles = makeStyles(() => ({
        canvas: {
            overflow: 'auto',
            cursor: colorChosen ? "pointer" : "",
        }
    }));
    const classes = useStyles();
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
        <div className={classes.canvas}>
            {colorArray.length>0?<Rug size={793.70076} file={shape} onFill={fill} fillColors={colorArray}/>:null}
        </div>
    );
}

export default Canvas;