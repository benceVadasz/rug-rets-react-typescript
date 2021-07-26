import {UserState} from "../types";

export const useLocalStorage = (key: string): undefined | UserState => {

    if (localStorage.getItem(key) === null) {
        return
    }

    return JSON.parse(localStorage.getItem(key) as string)
}