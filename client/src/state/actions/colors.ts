import {CREATE, FETCH_ALL, SET, SET_TYPE} from '../../types';

import * as api from '../../api';
import {ColorAction, UploadColorData} from "../../types";
import {RootState} from "../store";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux"

// export const getColors = (userId: string) => async (dispatch: any) => {
//     try {
//         const {data} = await api.fetchColors(userId);
//
//         dispatch({type: FETCH_ALL, payload: data});
//     } catch (error) {
//         console.log(error.message);
//     }
// };

export const colorExists = (hex: string) =>
    async () => {
    try {
        return await api.checkIfColorExists(hex)
    } catch (error) {
        console.log(error.message);
    }
};

export const setColorSelectionType = (type: string) =>
    async (dispatch: Dispatch<ColorAction>) => {
    try {
        dispatch({type: SET_TYPE, payload: type});
    } catch (error) {
        console.log(error.message);
    }
};

export const setColor = (value: string) =>
    async (dispatch: Dispatch) => {
    try {
        dispatch({type: SET, payload: value});
    } catch (error) {
        console.log(error.message)
    }
}