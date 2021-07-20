import React, {useState, FunctionComponent as FC, useContext} from "react";
import * as DS from "../pages/Design.styles";
import {useDispatch} from "react-redux";
import {setColorSelectionType} from "../state/actions/colors";
import {setShapeSelectionType} from "../state/actions/shapes";
import {ThemeContext} from "../context/store";


interface Props {
    type: string;
}

export const Switcher:FC<Props>  = ({type}: Props) => {

    const dispatch = useDispatch();
    const {dark} = useContext(ThemeContext)

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
            <DS.Toggle dark={dark} className={'lower-case'} value="pre-made" aria-label="left aligned">
                {type === 'shape' ? 'Pre-made' : 'On stock'}
            </DS.Toggle>
            <DS.Toggle dark={dark}  className={'lower-case'} value="custom" aria-label="centered">
                Custom
            </DS.Toggle>

        </DS.ToggleGroup>
    );
}