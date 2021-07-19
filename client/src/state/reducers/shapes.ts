import {FETCH_ALL, CREATE, SET_SHAPE_TYPE, SET_SHAPE, SET_SHAPE_COLOR_ARRAY} from '../constants/actionTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export const shapes = (shapes = [], action: any) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...shapes, action.payload];
        default:
            return shapes;
    }
}

export const shapeSelection = (shapeSelection = [], action: any) => {
    switch (action.type) {
        case SET_SHAPE_TYPE:
            return  action.payload;
        default:
            return shapeSelection;
    }
}

export const shape = (shape = [], action: any) => {
    switch (action.type) {
        case SET_SHAPE:
            return action.payload;
        default:
            return shape;
    }
}

export const shapeColorArray = (shapeColorArray = [], action: any) => {
    switch (action.type) {
        case SET_SHAPE_COLOR_ARRAY:
            return shapeColorArray = action.payload;
        default:
            return shapeColorArray;
    }
}