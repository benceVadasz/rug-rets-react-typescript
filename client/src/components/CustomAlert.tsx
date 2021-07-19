import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import {useDispatch, useSelector} from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import {toggleAlertNeeded} from "../state/actions/alert";
import {RootState} from "../state/store";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const CustomAlert = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const dispatch = useDispatch();
    const alertState = useSelector((state: RootState) => state.alertState)
    const {text, severity} = alertState;

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                                dispatch(toggleAlertNeeded())
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    severity={severity}
                >
                    {text}
                </Alert>
            </Collapse>
        </div>
    );
}

