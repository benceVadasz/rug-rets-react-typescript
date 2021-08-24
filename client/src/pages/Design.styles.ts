import styled from "@emotion/styled";
import {ToggleButton} from '@material-ui/lab';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {ThemeProps} from "../types";

type CanvasProps = {
    colorChosen: boolean
}

export const Wrapper = styled.div<ThemeProps>(
    (props: ThemeProps) => ({
        height: '100vh',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(9, 1fr)',
        gridColumnGap: 0,
        gridRowGap: 0,
        backgroundImage: props.dark ? 'linear-gradient(60deg, #29323c 0%, #485563 100%)' : ''
    })
);

export const DesignTypesContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: '1 / 1 / 2 / 6'
});

export const ShapePicker = styled.div({
    gridArea: '2 / 1 / 4 / 6'
});

export const CanvasContainer = styled.div({
    gridArea: '4 / 1 / 10 / 5',
    backgroundImage: "linear-gradient(rgba(209, 207, 197, 0.5) 1px, transparent 1px), linear-gradient(to right,rgba(209, 207, 197, 0.5) 1px,rgba(245, 243, 231, 0.5) 1px)",
    backgroundSize: '20px 20px',
    overflow: 'scroll',
});

export const CanvaS = styled.div<CanvasProps>(
    (props: CanvasProps) => ({
        overflow: 'auto',
        cursor: props.colorChosen ? "pointer" : "",
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    })
)

export const ColorPickerContainer = styled.div({
    overflow: 'scroll',
    boxShadow: '0 1em 1em -1em rgba(0, 0, 0, 0.10)',
    gridArea: '5 / 5 / 9 / 6'
});

export const ColorBtnContainer = styled.div({
    gridArea: '4 / 5 / 5 / 6',
    display: 'flex',
    justifyContent: 'center'
});

export const ButtonContainer = styled.div({
    margin: '0 auto',
    width: '70%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gridArea: '9 / 5 / 10 / 6'
});

export const ToggleGroup = styled(ToggleButtonGroup)({
    height: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px',
});

export const Toggle = styled(ToggleButton)<ThemeProps>(
    (props: ThemeProps) => ({
        color: props.dark ? 'white !important' : 'black !important'
    })
)

export const ColorSelector = styled.div({
    display: 'flex',
    margin: '0 auto',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    right: 0,
    left: 0
})

export const Color = styled.div({
    width: 70,
    height: 70,
    borderRadius: 5,
    cursor: 'pointer',
    marginBottom: 30,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 3px, rgba(0, 0, 0, 0.24) 0 1px 2px',
    position: 'absolute',
    overflow: 'hidden',
    '&:hover': {
        boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
    }
})

export const DeleteIcon = styled.img({
    zIndex: 2,
    width: 25,
    height: 25,
    padding: 2,
    position: 'absolute',
    top: 0,
    right: 0,
    cursor: 'pointer',
    '&:hover': {
        width: 30,
        height: 30,
        right: -3
    }
})

export const ColorWrapper = styled.div({
    width: 90,
    height: 90,
    position: 'relative',
    padding: 10
})