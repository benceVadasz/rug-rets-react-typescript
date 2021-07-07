import React, {useState, FunctionComponent as FC} from "react";
import * as DS from "../styles/Design.styles";
import {useDispatch} from "react-redux";
import {setColorSelectionType} from "../state/actions/colors";
import {setShapeSelectionType} from "../state/actions/shapes";


interface Props {
    type: string;
}

export const Switcher:FC<Props>  = ({type}: Props) => {

    const dispatch = useDispatch();

    const [types, setTypes] = useState('pre-made');


    const handleTypes = (event: React.MouseEvent<HTMLElement, MouseEvent>, newSelection: string) => {
        setTypes(newSelection);
        type === 'color' ? dispatch(setColorSelectionType(newSelection))
            : dispatch(setShapeSelectionType(newSelection))
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