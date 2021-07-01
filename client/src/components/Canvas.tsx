import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
// import {setColorArray} from "../actions/shapes";

const Canvas = () => {
    // const dispatch = useDispatch();
    // const shape = useSelector((state => state.shape))
    // const color = useSelector((state => state.color));
    // const colorChosen = color.length > 0;
    // const colorArray = useSelector((state => state.shapeColorArray))

    const useStyles = makeStyles(() => ({
        canvas: {
            overflow: 'auto',
            // cursor: colorChosen ? "pointer" : "",
        }
    }));
    const classes = useStyles();
    // todo: check what the design type selection is in redux store | fetch it in useEffect

    // const fill = (i) => {
    //     if (colorChosen) {
    //         const newFillColors = add(i);
    //         // dispatch(setColorArray(newFillColors))
    //     }
    // }
    //
    // const add = (index) => {
    //     const fin = []
    //     for (let i = 0; i < colorArray.length; i++) {
    //         if (i === index) {
    //             fin.push(color)
    //         } else if (colorArray[i] === 'white') {
    //             fin.push('white')
    //         } else {
    //             fin.push(colorArray[i])
    //         }
    //     }
    //     return fin;
    // }

    return (
        <div className={classes.canvas}>
            {/*<Rug size={793.70076} file={'flower'} onFill={fill} fillColors={colorArray}/>*/}
        </div>
    );
}

export default Canvas;