import {SET_ALERT_STATE, TOGGLE_ALERT_NEEDED} from '../constants/actionTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export const alertState = (alertState = {}, action: any) => {
    switch (action.type) {
        case SET_ALERT_STATE:
            alertState = action.payload;
            return alertState;
        default:
            return alertState;
    }
}

export const alertNeeded = (alertNeeded = false, action: any) => {
    switch (action.type) {
        case TOGGLE_ALERT_NEEDED:
            alertNeeded = !alertNeeded;
            return alertNeeded;
        default:
            return alertNeeded;
    }
}
