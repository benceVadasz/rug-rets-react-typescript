import {AuthAction, EDIT, SIGN_IN, SIGN_OUT, SIGN_UP, SIGN_UP_ERROR} from "../../types";

export const auth = (auth = { authData: null }, action: AuthAction) => {
    switch (action.type) {
        case SIGN_IN:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
            return { ...auth, authData: action?.payload }
        case SIGN_UP:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
            return { ...auth, authData: action?.payload }
        case SIGN_OUT:
            localStorage.clear();
            return { ...auth, authData: null }
        case EDIT:
            const token = JSON.parse(localStorage.getItem('profile') as string)?.token
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload, token }))
            return { ...auth, authData: action?.payload }
        case SIGN_UP_ERROR:
            return { action }
        default:
            return auth;
    }
}
