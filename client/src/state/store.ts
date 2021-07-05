import {createStore, applyMiddleware, compose, Store} from "redux";
import thunk from "redux-thunk";
import {reducers} from "./reducers";
import {useDispatch} from "react-redux";

export const store: Store = createStore(reducers, compose(applyMiddleware(thunk)))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

