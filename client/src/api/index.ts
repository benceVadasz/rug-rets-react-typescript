import axios from "axios";
import {Color, DesignData, UploadedPost, signInData, signUpData, UpdatedUser} from "../types";
import {useLocalStorage} from "../customHooks/useLocalStorage";

const API = axios.create(({baseURL: 'http://localhost:5000'}));

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        console.log(useLocalStorage('profile'))
        req.headers.Authorization = `Bearer ${useLocalStorage('profile')?.token}`
    }
    return req;
})

export const fetchShapes = () => API.get('/shapes');
export const uploadShape = (shape: any) => API.post('/shapes', shape);
export const deleteShape = (id: string) => API.delete(`/shapes/${id}`);
//
export const fetchColors = (userId: string) => API.get(`/colors/${userId}`);
export const uploadColor = (color: Color) => API.post('/colors', color);
// export const deleteColor = (id) => API.delete(`/colors/${id}`);
export const checkIfColorExists = (hex: string) => API.post('/colors/check', hex);
//
export const fetchDesigns = (userId: string | undefined) => API.get(`/designs/${userId}`);
export const saveDesign = (designData: DesignData) => API.post('/designs', designData);

export const signIn = (formData: signInData) => API.post('/user/signIn', formData);
export const signUp = (formData: signUpData) => API.post('/user/signUp', formData);
export const editProfile = (formData: UpdatedUser, id: string | undefined) => API.put(`user/${id}`, formData);

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost: UploadedPost) => API.post('/posts', newPost);
// export const likePost = (id) => API.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => API.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`${url}/${id}`);