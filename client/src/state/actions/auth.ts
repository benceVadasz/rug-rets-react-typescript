import * as api from '../../api';
import {AuthAction, EDIT} from "../../types";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import {Dispatch} from "redux";


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