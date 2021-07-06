import {SET_SHAPE_TYPE} from "../../types";
import {Dispatch} from "redux";

export const setShapeSelectionType = (type: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({type: SET_SHAPE_TYPE, payload: type});
    } catch (error) {
        console.log(error.message);
    }
};