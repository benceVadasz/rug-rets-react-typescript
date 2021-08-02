import React from 'react';
import useFetch from "../customHooks/useFetch";
import {useParams} from "react-router-dom";

interface WithDispatchProps {
    data: any;
    fetchData: (url?: string | undefined) => Promise<void>;
    id: {};
    dark?: boolean
}

export const withFetch = (WrappedComponent: React.ComponentType<WithDispatchProps>) => {

    // todo HOC props

    return () => {
        const {fetchData, data} = useFetch();
        const id = useParams()

        return <WrappedComponent fetchData={fetchData} id={id} data={data}/>;
    };
};
