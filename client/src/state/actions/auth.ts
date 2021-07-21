import * as api from '../../api';
import {AuthAction, EDIT, SIGN_IN, SIGN_UP, SIGN_UP_ERROR, signInData, signUpData, UpdatedUser} from "../../types";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Dispatch} from "redux";


export const signIn = (formData: signInData): ThunkAction<void, RootState, null,AuthAction> =>
    async (dispatch: Dispatch<AuthAction>) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: SIGN_IN, payload: data})
        return true
    }
    catch (error) {
        console.log(error.message);
        return false
    }
}


export const signUp = (formData: signUpData): ThunkAction<void, RootState, null,AuthAction> =>
    async (dispatch: Dispatch<AuthAction>) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: SIGN_UP, payload: data })
        return true
    }
    catch (error) {
        dispatch({ type: SIGN_UP_ERROR, payload: 'User already exists' })
        return false
    }
}

export const editProfile = (formData: { phone: string | undefined; givenName: string | undefined; familyName: string | undefined; email: string | undefined; username: string | undefined }, id: string | undefined): ThunkAction<void, RootState, null, AuthAction> =>
    async (dispatch: Dispatch<AuthAction>) => {
    try {
        console.log(formData)
        const { data } = await api.editProfile(formData, id);
        dispatch({ type: EDIT, payload: data })
    }
    catch (error) {
        console.log(error.message)
    }
}