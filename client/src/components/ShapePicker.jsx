import React from 'react';
import { useSelector } from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import ShapeAdder from "./ShapeAdder";
import {SHAPE_OBJECT} from '../util/shapeImports'
import Shape from "./Shape";


const ShapePicker = () => {

    // const shapes = useSelector((state => state.shapes))
    const shapeSelection = useSelector((state => state.shapeSelection));

    const useStyles = makeStyles(() => ({
        colorSelector: {
            display: 'flex',
            alignItems: 'flex-start',
            overflow: 'scroll'
        }
    }));
    const classes = useStyles();
    // todo: check what the design type selection is in redux store | fetch it in useEffect

    return (
        <div className={classes.colorSelector}>
            {shapeSelection === 'custom' ? <ShapeAdder/> : null}
            {Object.keys(SHAPE_OBJECT).map(function(key) {
                console.log(SHAPE_OBJECT[key])
                return <Shape name={key} key={key} file={SHAPE_OBJECT[key]} />
            })}
        </div>
    );
}

export default ShapePicker;