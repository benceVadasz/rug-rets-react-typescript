import React, {useState, FunctionComponent as FC} from "react";
import {makeStyles} from '@material-ui/core/styles';
import * as DS from "../styles/Design.styles";
import {useDispatch, useSelector} from "react-redux";
import {setColorSelectionType} from "../state/actions/colors";
import {RootState} from "../state/store";


interface Props {
    type: string;
}

export const Switcher:FC<Props>  = ({type}: Props) => {

    const dispatch = useDispatch();
    const colorSelection = useSelector((state: RootState) => state.colorSelection);
    // const currentShapeSelection = shapeSelection.length > 0 ? shapeSelection : 'pre-made';

    const [types, setTypes] = useState('pre-made');

    // const handleTypes = (event, newSelection) => {
    //     setTypes(newSelection);
    //     dispatch(setShapeSelectionType(newSelection))
    // };

    const handleTypes = (event: React.MouseEvent<HTMLElement, MouseEvent>, newSelection: string) => {
        setTypes(newSelection);
        dispatch(setColorSelectionType(newSelection))
        // types === 'pre-made' ? dispatch(setShapeSelectionType(newSelection)) :
    };

    return (
        <DS.ToggleGroup
            value={types}
            exclusive
            onChange={handleTypes}
            aria-label="text alignment"
        >
            <DS.Toggle className='lower-case' value="pre-made" aria-label="left aligned">
                {type === 'shape' ? 'Pre-made' : 'On stock'}
            </DS.Toggle>
            <DS.Toggle className='lower-case' value="custom" aria-label="centered">
                Custom
            </DS.Toggle>

        </DS.ToggleGroup>
    );
}