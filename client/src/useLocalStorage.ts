type UserState = {
    givenName: string,
    familyName: string,
    email:string,
    phone: string,
    _id?: string | undefined
    googleId?: string | undefined
}

export const useLocalStorage = (key: string): undefined | UserState => {

    if (localStorage.getItem(key) === null) return undefined

    return JSON.parse(localStorage.getItem(key) as string)?.result
}