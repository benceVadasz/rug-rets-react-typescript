import {CREATE_POST, FETCH_ALL_POSTS, PostData} from "../../types";

export const posts = (posts:PostData[] = [], action: any) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return action.payload;
        case CREATE_POST:
            return [...posts, action.payload];
        // case LIKE:
        //     return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        // case UPDATE:
        //     return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        // case DELETE:
        //     return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
};