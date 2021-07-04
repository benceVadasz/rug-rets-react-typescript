import {ColorAction, CREATE, FETCH_ALL} from "../../types";

export const colors = (colors = [], action: ColorAction) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...colors, action.payload];
        default:
            return colors;
    }
}