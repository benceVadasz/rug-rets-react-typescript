import {ColorAction, CREATE, FETCH_ALL, SET, SET_TYPE} from "../../types";
import {Color} from "../../types";

const initialColorState: Color = {
    name: '',
    value: ''
}

export const colors = (colors = [], action: ColorAction): Color[] => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...colors, action.payload];
        default:
            return colors;
    }
}

export const color = (color = initialColorState, action: ColorAction): Color => {
    switch (action.type) {
        case SET:
            color = action.payload;
            return color;
        default:
            return color;
    }
}

export const colorSelection = (colorSelection = 'pre-made', action: ColorAction): string => {
    switch (action.type) {
        case SET_TYPE:
            colorSelection = action.payload;
            return colorSelection;
        default:
            return colorSelection;
    }
}