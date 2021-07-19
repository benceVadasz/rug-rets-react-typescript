import {CREATE_DESIGN, FETCH_ALL_DESIGN} from "../../types";
import {DesignAction, DesignData} from "../../types";

export const designs = (designs: DesignData[] = [], action: DesignAction) => {
    switch (action.type) {
        case FETCH_ALL_DESIGN:
            console.log(action.payload)
            return action.payload;
        case CREATE_DESIGN:
            return [...designs, action.payload];
        default:
            return designs;
    }
}