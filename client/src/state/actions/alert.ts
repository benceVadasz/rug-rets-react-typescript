import {SET_ALERT_STATE, TOGGLE_ALERT_NEEDED} from "../constants/actionTypes";

export const setAlertState = (alertState: any) => async (dispatch: any) => {
    try {
        dispatch({type: SET_ALERT_STATE, payload: alertState});
    } catch (e) {
        console.log(e)
    }
}

export const toggleAlertNeeded = () => async (dispatch: any) => {
    try {
        dispatch({type: TOGGLE_ALERT_NEEDED});
    } catch (error) {
        console.log(error.message);
    }
};
