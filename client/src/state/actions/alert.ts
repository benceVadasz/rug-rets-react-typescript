import {SET_ALERT_STATE, TOGGLE_ALERT_NEEDED} from "../constants/actionTypes";
import {alertState} from "../../types";
import {Dispatch} from "redux";

export const setAlertState = (alertState: alertState) => async (dispatch: Dispatch) => {
    try {
        dispatch({type: SET_ALERT_STATE, payload: alertState});
    } catch (e) {
        console.log(e)
    }
}

export const toggleAlertNeeded = () => async (dispatch: Dispatch) => {
    try {
        dispatch({type: TOGGLE_ALERT_NEEDED});
    } catch (error) {
        console.log(error.message);
    }
};
