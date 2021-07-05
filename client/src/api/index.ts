import axios from "axios";
import {Color, profileData, signInData, signUpData} from "../types";

const API = axios.create(({baseURL: 'http://localhost:5000'}));

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile') as string).token}`
    }
    return req;
})

// export const fetchShapes = () => API.get('/shapes');
// export const uploadShape = (shape: any) => API.post('/shapes', shape);
// export const deleteShape = (id) => API.delete(`/shapes/${id}`);
//
export const fetchColors = (userId: string) => API.get(`/colors/${userId}`);
export const uploadColor = (color: Color) => API.post('/colors', color);
// export const deleteColor = (id) => API.delete(`/colors/${id}`);
export const checkIfColorExists = (hex: string) => API.post('/colors/check', hex);
//
// export const fetchDesigns = (userId) => API.get(`/designs/${userId}`);
// export const saveDesign = (designData) => API.post('/designs', designData);

export const signIn = (formData: signInData) => API.post('/user/signIn', formData);
export const signUp = (formData: signUpData) => API.post('/user/signUp', formData);
export const editProfile = (formData: profileData, id:string) => API.put(`user/${id}`, formData);
