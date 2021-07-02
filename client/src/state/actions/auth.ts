import {AUTH, EDIT} from '../constants/actionTypes';
import * as api from '../../api';

export const signIn = (formData: any, history: any) => async (dispatch: any) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data })
        history.push('/');
    }
    catch (error) {
        console.log(error.message);
    }
}

export const signUp = (formData: any, history: any) => async (dispatch: any) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data })
        history.push('/');
    }
    catch (error) {
        console.log(error.message);
    }
}

export const editProfile = (formData: any, id: any) => async (dispatch: any) => {
    try {
        const { data } = await api.editProfile(formData, id);
        dispatch({ type: AUTH, data })
    }
    catch (error) {
        console.log(error.message)
    }
}