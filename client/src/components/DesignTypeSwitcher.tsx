import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {useDispatch, useSelector} from "react-redux";

const DesignTypeSwitcher = () => {
    // const dispatch = useDispatch();
    // const shapeSelection = useSelector((state => state.shapeSelection));
    // const currentShapeSelection = shapeSelection.length > 0 ? shapeSelection : 'pre-made';
    const [types, setTypes] = useState('current');
    const useStyles = makeStyles(() => ({
        switcher: {
            height: '50%',
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        }
    }));
    const classes = useStyles();
    // const handleTypes = (event, newSelection) => {
    //     setTypes(newSelection);
    //     dispatch(setShapeSelectionType(newSelection))
    // };
    
    const handleTypes = () => {
        setTypes('new');
    };
    // if (loading)
    //     return (
    //         <div className={classes.load}>
    //             <Loading/>
    //         </div>
    //     );

    return (
        <ToggleButtonGroup
            value={'types'}
            exclusive
            onChange={handleTypes}
            aria-label="text alignment"
            className={classes.switcher}
        >
            <ToggleButton className='lower-case' value="pre-made" aria-label="left aligned">
                Pre-made
            </ToggleButton>
            <ToggleButton className='lower-case' value="custom" aria-label="centered">
                Custom
            </ToggleButton>

        </ToggleButtonGroup>
    );
}

export default DesignTypeSwitcher;