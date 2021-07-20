import React, {useContext, FunctionComponent as FC} from "react";
import * as DS from './Design.styles';
import {Switcher} from "../components/Switcher";
import {DesignContext, ThemeContext} from '../context/store';
import ColorBox from "../components/ColorBox";
import ButtonGroup from "../components/ButtonGroup";
import Canvas from "../components/Canvas";
import ShapePicker from "../components/ShapePicker";
import {useSelector} from "react-redux";
import {RootState} from "../state/store";
import {CustomAlert} from "../components/CustomAlert";

const Design: FC = () => {

    const {designs} = useContext(DesignContext)
    const alertNeeded = useSelector((state: RootState) => state.alertNeeded)

    console.log(designs)

    const {dark} = useContext(ThemeContext)

    return (
        <DS.Wrapper dark={dark}>
            <DS.DesignTypesContainer>
                {!alertNeeded ? <Switcher type={'shape'}/> : <CustomAlert/>}
            </DS.DesignTypesContainer>
            {/* {!isAlertNeeded ? <div className={classes.zoom}>
                <Zoom/>
            </div> : null} */}
            <DS.ShapePicker>
                <ShapePicker/>
            </DS.ShapePicker>
            <DS.CanvasContainer>
                <Canvas/>
            </DS.CanvasContainer>
            <DS.ColorBtnContainer>
                <Switcher type={'color'}/>
            </DS.ColorBtnContainer>
            <DS.ColorPickerContainer>
                <ColorBox/>
            </DS.ColorPickerContainer>
            <DS.ButtonContainer>
                <ButtonGroup/>
            </DS.ButtonContainer>
        </DS.Wrapper>
    );
}

export default Design;