export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';

export type DesignContextState = {
    designs: [];
    setPage: (page: number) => void;
    currentPage: number;
    setParam: (param: string) => void;
    loading: boolean
  };

export type DesignType = {
    id: string,
    title: string,
    colors: string[],
    imageUrl: string,
    description: string,
    userName: string,
    rank: number,
    numVotes: number,
}

export interface ParamTypes {
    id: string;
}

export interface signUpData {
    givenName: string,
    familyName: string,
    email: string,
    password: string,
    confirmPassword: string
}

export interface signInData {
    email: string,
    password: string
}

export interface User {
    givenName: string,
    familyName: string,
    password: string,
    email: string
}

interface SignInAction {
    type: typeof SIGN_IN;
    payload: User;
}

interface SignUPAction {
    type: typeof SIGN_UP;
    payload: User;
}

export type AuthAction = SignInAction | SignInAction