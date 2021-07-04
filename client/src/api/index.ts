import axios from "axios";

const API = axios.create(({baseURL: 'http://localhost:5000'}));

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(<string>localStorage.getItem('profile')).token}`
    }

    return req;
})

// export const fetchShapes = () => API.get('/shapes');
// export const uploadShape = (shape: any) => API.post('/shapes', shape);
// export const deleteShape = (id) => API.delete(`/shapes/${id}`);
//
export const fetchColors = (userId: string) => API.get(`/colors/${userId}`);
// export const uploadColor = (color) => API.post('/colors', color);
// export const deleteColor = (id) => API.delete(`/colors/${id}`);
// export const checkIfColorExists = (hex) => API.post('/colors/check', hex);
//
// export const fetchDesigns = (userId) => API.get(`/designs/${userId}`);
// export const saveDesign = (designData) => API.post('/designs', designData);

export const signIn = (formData: any) => API.post('/user/signIn', formData);
export const signUp = (formData: any) => API.post('/user/signUp', formData);
export const editProfile = (formData: any, id:any) => API.put(`user/${id}`, formData);