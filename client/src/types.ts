export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';
export const EDIT = 'EDIT';
export const CREATE = 'CREATE';
export const FETCH_ALL = 'FETCH_ALL';
export const SET = 'SET';
export const SET_TYPE = 'SET_TYPE';
export const SET_SHAPE_TYPE = 'SET_SHAPE_TYPE';


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
    email: string,
    phone?: string
}

export interface profileData {
    givenName: string,
    familyName: string,
    email: string,
    phone?: string
}

export interface Color {
    name: string,
    value: string
}

export interface UploadColorData {
    name: string,
    value: string,
    id: string
}

interface SignInAction {
    type: typeof SIGN_IN;
    payload: User;
}

interface SignUpAction {
    type: typeof SIGN_UP;
    payload: User;
}

interface SignOutAction {
    type: typeof SIGN_OUT;
}

export interface UpdatedUser {
    givenName: string,
    familyName: string,
    email: string,
    phone?: string
}

interface EditAction {
    type: typeof EDIT;
    payload: UpdatedUser;
}

export type AuthAction = SignUpAction | SignInAction | SignOutAction | EditAction;

interface uploadColorAction {
    type: typeof CREATE;
    payload: Color;
}

interface fetchColorsAction {
    type: typeof FETCH_ALL;
    payload: Color[];
}

interface setColorAction {
    type: typeof SET;
    payload: Color;
}

interface setColorType {
    type: typeof SET_TYPE;
    payload: string;
}

export type ColorAction = uploadColorAction | fetchColorsAction | setColorAction | setColorType;