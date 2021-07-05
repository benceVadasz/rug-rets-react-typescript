import {AUTH} from '../constants/actionTypes';
import * as api from '../../api';
import {AuthAction, EDIT, SIGN_IN, SIGN_UP, signInData, signUpData, updatedUser} from "../../types";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Dispatch} from "redux";


export const signIn = (formData: signInData, history: any): ThunkAction<void, RootState, null,AuthAction> =>
    async (dispatch: Dispatch<AuthAction>) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: SIGN_IN, payload: data})
        history.push('/');
    }
    catch (error) {
        console.log(error.message);
    }
}

export const signUp = (formData: signUpData, history: any): ThunkAction<void, RootState, null,AuthAction> =>
    async (dispatch: Dispatch<AuthAction>) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: SIGN_UP, payload: data })
        history.push('/');
    }
    catch (error) {
        console.log(error.message);
    }
}

export const editProfile = (formData: updatedUser, id: string): ThunkAction<void, RootState, null,AuthAction> =>
    async (dispatch: Dispatch<AuthAction>) => {
    try {
        const { data } = await api.editProfile(formData, id);
        dispatch({ type: EDIT, payload: data })
    }
    catch (error) {
        console.log(error.message)
    }
}