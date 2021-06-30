import React, {createContext, FunctionComponent as FC, useEffect, useState} from 'react'
import axios from 'axios';
import { DesignContextState } from "../types";


export const DesignContext = createContext<DesignContextState>(
    {designs: [], setPage: page => console.log(page), currentPage: 1}
);

const DesignProvider: FC = ({children}) => {

    const contextDefaultValues: DesignContextState = {
        designs: [],
        setPage: page => setOffset(page),
        currentPage: 1
    };
    const [designs, setDesigns] = useState(contextDefaultValues.designs);
    const [offset, setOffset] = useState(0);
    const [currentPage, setPage] = useState(contextDefaultValues.currentPage);

    const paginate = (page: number) => {
        setPage(page)
        setOffset(page * 20)
    }

    useEffect(() => {
        axios.get(`https://www.colourlovers.com/api/patterns?format=json&resultOffset=${offset}`)
        .then(response =>
                setDesigns(response.data))
    }, [offset])

    return (
        <DesignContext.Provider value={{designs, setPage: paginate, currentPage}}>
            {children}
        </DesignContext.Provider>
    )
}

export default DesignProvider;

