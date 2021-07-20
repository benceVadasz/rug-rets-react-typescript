import * as api from '../../api';
import {CREATE_POST, FETCH_ALL_POSTS, UploadedPost} from "../../types";

export const getPosts = () => async (dispatch: any) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL_POSTS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post: UploadedPost) => async (dispatch: any) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE_POST, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.updatePost(id, post);
//
//         dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// };
//
// export const likePost = (id) => async (dispatch) => {
//     try {
//         const { data } = await api.likePost(id);
//
//         dispatch({ type: LIKE, payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// };
//
// export const deletePost = (id) => async (dispatch) => {
//     try {
//         await api.deletePost(id);
//
//         dispatch({ type: DELETE, payload: id });
//     } catch (error) {
//         console.log(error.message);
//     }
// };