import React from 'react';
import useFetch from "../components/customHooks/useFetch";
import {useParams} from "react-router-dom";

interface WithDispatchProps {
    data: any;
    fetchData: (url?: string | undefined) => Promise<void>;
    id: { id: string }
}

export const withFetch = (WrappedComponent: React.ComponentType<WithDispatchProps>) => {


    return (props: any) => {
        const {fetchData, data} = useFetch();
        const id = useParams()

        return <WrappedComponent fetchData={fetchData} id={id}  {...props} data={data}/>;
    };
};
