import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {reducers} from "./reducers";

export const store = createStore(reducers, compose(applyMiddleware(thunk)))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

