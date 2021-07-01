import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import * as DS from "../styles/Design.styles";

const DesignTypeSwitcher = () => {
    // const dispatch = useDispatch();
    // const shapeSelection = useSelector((state => state.shapeSelection));
    // const currentShapeSelection = shapeSelection.length > 0 ? shapeSelection : 'pre-made';
    const [types, setTypes] = useState('pre-made');
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

    const handleTypes = (event: React.MouseEvent<HTMLElement, MouseEvent>, newSelection: string) => {
        setTypes(newSelection);
    };

    return (
        <DS.ToggleGroup
            value={types}
            exclusive
            onChange={handleTypes}
            aria-label="text alignment"
            className={classes.switcher}
        >
            <DS.Toggle className='lower-case' value="pre-made" aria-label="left aligned">
                Pre-made
            </DS.Toggle>
            <DS.Toggle className='lower-case' value="custom" aria-label="centered">
                Custom
            </DS.Toggle>

        </DS.ToggleGroup>
    );
}

export default DesignTypeSwitcher;