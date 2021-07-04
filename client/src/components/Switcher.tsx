import React, {useState, FunctionComponent as FC} from "react";
import {makeStyles} from '@material-ui/core/styles';
import * as DS from "../styles/Design.styles";


interface Props {
    type: string;
}

export const Switcher:FC<Props>  = ({type}: Props) => {

    // const dispatch = useDispatch();
    // const shapeSelection = useSelector((state => state.shapeSelection));
    // const currentShapeSelection = shapeSelection.length > 0 ? shapeSelection : 'pre-made';

    const [types, setTypes] = useState('pre-made');

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