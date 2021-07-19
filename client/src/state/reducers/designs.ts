import {CREATE_DESIGN, FETCH_ALL} from "../constants/actionTypes";
import {DesignAction, DesignData} from "../../types";

export const designs = (designs: DesignData[] = [], action: DesignAction) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE_DESIGN:
            return [...designs, action.payload];
        default:
            return designs;
    }
}