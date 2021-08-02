import * as api from '../../api';
import {AuthAction, EDIT, SIGN_IN, SIGN_UP, signInData, signUpData} from "../../types";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Dispatch} from "redux";


export const signIn = (formData: signInData): (dispatch: Dispatch<AuthAction>) => Promise<{ payload: any; type: string }> =>
    async (dispatch: Dispatch<AuthAction>) => {
    try {
        const { data } = await api.signIn(formData);

        return dispatch({ type: SIGN_IN, payload: data})
    }
    catch (error) {
        return error.response.data.message
    }
}


export const signUp = (formData: signUpData): ThunkAction<void, RootState, null,AuthAction> =>
    async (dispatch: Dispatch<AuthAction>) => {
    try {
        const { data } = await api.signUp(formData);

        return dispatch({ type: SIGN_UP, payload: data })

    }
    catch (error) {
        return error.response.data.message
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