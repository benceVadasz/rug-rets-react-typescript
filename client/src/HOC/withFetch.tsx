import React from 'react';
import useFetch from "../customHooks/useFetch";
import {useParams} from "react-router-dom";

interface WithFetchProps {
    data?: any;
    fetchData?: (url?: string | undefined) => Promise<void>;
    id?: {};
    dark?: boolean
}

export const withFetch = (WrappedComponent: React.ComponentType<WithFetchProps>) => {

    // todo HOC props

    return (props: WithFetchProps) => {
        const {fetchData, data} = useFetch();
        const id = useParams()

        return <WrappedComponent {...props} fetchData={fetchData} id={id} data={data}/>;
    };
};
