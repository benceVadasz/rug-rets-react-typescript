import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const Canvas = () => {

    const useStyles = makeStyles(() => ({
        canvas: {
            overflow: 'auto',
        }
    }));
    const classes = useStyles();
    // todo: add rug component, fill function

    return (
        <div className={classes.canvas}>
        </div>
    );
}

export default Canvas;