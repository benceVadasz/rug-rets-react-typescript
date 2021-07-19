import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {setColorArray, setShape} from "../state/actions/shapes";
import {PATH_NUMBERS} from "../util/numOfPathsOfShapes";
import {setAlertState, toggleAlertNeeded} from "../state/actions/alert";

type ShapeProps = {
    name: keyof typeof PATH_NUMBERS,
    file: string
}

const Shape = ({name, file}: ShapeProps) => {
    const useStyles = makeStyles(() => ({
        paper: {
            minWidth: 250,
            height: 130,
            borderRadius: 5,
            cursor: 'pointer',
            border: '1px solid black',
            marginLeft: 10,
            marginBottom: 15
        },
        flexBox: {
            margin: '0 auto',
            display: 'flex',
            flexFlow: "column",
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        shapeImg: {
            width: 150,
            height: 120
        }
    }));
    const classes = useStyles();
    const dispatch = useDispatch();

    const selectShape = (shapeName: keyof typeof PATH_NUMBERS) => {
        const colorArray = Array(PATH_NUMBERS[shapeName]).fill('white')
        dispatch(setShape(name))
        dispatch(setColorArray(colorArray))
        dispatch(setAlertState({text: "You can customize size later!", severity: 'info'}))
        dispatch(toggleAlertNeeded())
        closeAlertIn5()
    }

    const closeAlertIn5 = () => {
        setTimeout(() => {
            dispatch(toggleAlertNeeded())
        }, 5000)
    }

    return (
        <Button onClick={() => selectShape(name)} className={classes.paper}>
            <div className={classes.flexBox}>
                <img alt="" src={file} className={classes.shapeImg} />
            </div>
        </Button>
    );
}

export default Shape;