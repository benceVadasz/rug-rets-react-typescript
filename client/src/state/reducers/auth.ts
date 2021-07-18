import {AuthAction, SIGN_IN, SIGN_OUT, SIGN_UP, EDIT} from "../../types";

export const auth = (auth = { authData: null }, action: AuthAction) => {
    switch (action.type) {
        case SIGN_IN:
            console.log(action)
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
            return { ...auth, authData: action?.payload }
        case SIGN_UP:
            localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
            return { ...auth, authData: action?.payload }
        case SIGN_OUT:
            localStorage.clear();
            return { ...auth, authData: null }
        case EDIT:
            return { ...auth, authData: action?.payload }
        default:
            return auth;
    }
}
