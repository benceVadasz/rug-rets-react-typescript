import {CREATE, DELETE, FETCH_ALL, SET, SET_TYPE} from '../constants/actionTypes';

import * as api from '../../api/index.js';

export const getColors = (userId: string) => async (dispatch: any) => {
    try {
        const {data} = await api.fetchColors(userId);

        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
};