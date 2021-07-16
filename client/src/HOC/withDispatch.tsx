import React from 'react';
import {useAppDispatch} from "../useAppDispatch";
import {AppDispatch} from "../state/store";
import {useDispatch} from "react-redux";

interface WithDispatchProps {
    dispatch: AppDispatch;
}

const WithDispatch = (WrappedComponent: React.ComponentType<WithDispatchProps>) => {

    const dispatch = useDispatch()

    return (<WrappedComponent dispatch={dispatch} />);

};
export default WithDispatch;
