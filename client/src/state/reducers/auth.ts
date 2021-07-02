import { AUTH, LOGOUT, EDIT } from '../constants/actionTypes';

const authReducer = (auth = { authData: null }, action: any) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...auth, authData: action?.data }
        case LOGOUT:
            localStorage.clear();
            return { ...auth, authData: null }
        case EDIT:
            return { ...auth, authData: action?.data }
        default:
            return auth;
    }
}

export default authReducer;