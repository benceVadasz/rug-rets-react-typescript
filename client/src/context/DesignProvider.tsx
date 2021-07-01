import React, {FunctionComponent as FC, useEffect, useState} from 'react'
import axios from 'axios';
import {DesignContextState} from "../types";
import {DesignContext} from "./store";

const DesignProvider: FC = ({children}) => {

    const contextDefaultValues: DesignContextState = {
        designs: [],
        setPage: page => setOffset(page),
        currentPage: 1,
        setParam: param => setParam(param),
        loading: false
    };

    const [designs, setDesigns] = useState(contextDefaultValues.designs);
    const [offset, setOffset] = useState<number>(0);
    const [currentPage, setPage] = useState(contextDefaultValues.currentPage);
    const [param, setParam] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)


    const paginate = (page: number) => {
        setPage(page)
        setOffset(page * 20)
    }

    useEffect(() => {
        setLoading(true)
        axios.get(`https://www.colourlovers.com/api/patterns${param}&format=json&resultOffset=${offset}`)
        .then(({data}) => setDesigns(data))
        setLoading(false)
    }, [offset, param])

    return (
        <DesignContext.Provider value={{designs, setPage: paginate, currentPage, setParam, loading}}>
            {children}
        </DesignContext.Provider>
    )
}

export default DesignProvider;

