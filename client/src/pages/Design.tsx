import React, {useContext} from "react";
import {makeStyles} from '@material-ui/core/styles';
// import ColorPicker from "../components/ColorPicker";
// import DesignTypeSwitcher from "../components/DesignTypeSwitcher";
// import ButtonGroup from "../components/ButtonGroup";
// import ShapePicker from "../components/ShapePicker";
// import Canvas from "../components/Canvas";
// import ColorTypeSwitcher from "../components/ColorTypeSwitcher";
// import {SuccessAlert} from "../components/Alert";
// import {useSelector} from "react-redux";
// import {Zoom} from "../components/Zoom";
import * as DS from '../styles/Design.styles';
import DesignTypeSwitcher from '../components/DesignTypeSwitcher';
import {DesignContext} from '../context/DesignProvider'


const Design = () => {
    const useStyles = makeStyles(() => ({

        designContainer: {
            height: '90vh',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(9, 1fr)',
            gridColumnGap: 0,
            gridRowGap: 0,
        },
        designTypesContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gridArea: '1 / 1 / 2 / 6',
        },
        shapePicker: {
            gridArea: '2 / 1 / 4 / 6'
        },
        canvas: {
            gridArea: '4 / 1 / 10 / 5',
            backgroundColor: '#e5e5f7',
            backgroundImage: 'linear-gradient(rgba(209,207,197,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(209,207,197,0.5) 1px, rgba(245,243,231,0.5) 1px)',
            backgroundSize: '20px 20px',
            overflow: 'scroll'

        },
        colorPicker: {
            overflow: 'scroll',
            boxShadow: '0 1em 1em -1em rgba(0, 0, 0, .25)',
            gridArea: '5 / 5 / 9 / 6'
        },
        colorBtnContainer: {
            gridArea: '4 / 5 / 5 / 6'
        },
        buttonContainer: {
            margin: '0 auto',
            width: '70%',
            display: "flex",
            justifyContent: 'space-around',
            alignItems: 'center',
            gridArea: '9 / 5 / 10 / 6',
        },
        zoom: {
            gridArea: '1 / 5 / 2 / 6'
        }

    }));
    const classes = useStyles();

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