import {CREATE_DESIGN, FETCH_ALL_DESIGN} from "../../types";
import * as api from "../../api";
import {Dispatch} from "redux";
import {DesignData} from "../../types";

export const getDesigns = (userId: string | undefined) => async (dispatch: Dispatch) => {
    try {
        const {data} = await api.fetchDesigns(userId);

        dispatch({type: FETCH_ALL_DESIGN, payload: data});
    } catch (error) {
        console.log(error.message);
    }
};

export const saveDesign = (designData: DesignData) => async (dispatch: Dispatch) => {
    try {

        const {data} = await api.saveDesign(designData);

        dispatch({type: CREATE_DESIGN, payload: data});
    } catch (error) {
        console.log(error.message);
    }
};