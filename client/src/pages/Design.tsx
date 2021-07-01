import React, {useContext, FunctionComponent as FC} from "react";
import * as DS from '../styles/Design.styles';
import DesignTypeSwitcher from '../components/DesignTypeSwitcher';
import {DesignContext} from '../context/DesignProvider'

const Design: FC = () => {

    const {designs} = useContext(DesignContext)

    console.log(designs)


    return (
        <DS.Wrapper>
            <DS.DesignTypesContainer>
                    <DesignTypeSwitcher/>
            </DS.DesignTypesContainer>
            {/* {!isAlertNeeded ? <div className={classes.zoom}>
                <Zoom/>
            </div> : null} */}
            <DS.ShapePicker>
                {/* <ShapePicker/> */}
            </DS.ShapePicker>
            <DS.Canvas>
                {/* <Canvas/> */}
            </DS.Canvas>
            <DS.ColorBtnContainer>
                {/* <ColorTypeSwitcher/> */}
            </DS.ColorBtnContainer>
            <DS.ColorPicker>
                {/* <ColorPicker/> */}
            </DS.ColorPicker>
            <DS.ButtonContainer>
                {/* <ButtonGroup/> */}
            </DS.ButtonContainer>
        </DS.Wrapper>
    );
}

export default Design;