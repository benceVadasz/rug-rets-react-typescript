import {CREATE, DELETE, FETCH_ALL, SET, SET_TYPE} from '../constants/actionTypes';

import * as api from '../../api';
import {Color, ColorAction, UploadColorData} from "../../types";
import {RootState, useAppDispatch} from "../store";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "redux"
import {Col} from "antd";

export const getColors = (userId: string) => async (dispatch: any) => {
    try {
        const {data} = await api.fetchColors(userId);

        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
};

export const uploadColor = (colorData: UploadColorData): ThunkAction<void, RootState, null, ColorAction> =>
    async (dispatch: Dispatch<ColorAction>) => {
    try {
        const {data} = await api.uploadColor(colorData);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
};

export const colorExists = (hex: string) =>
    async (dispatch: Dispatch<ColorAction>) => {
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