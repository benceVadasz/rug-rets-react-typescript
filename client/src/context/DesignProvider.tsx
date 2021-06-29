import React, {createContext, FunctionComponent as FC, useEffect, useState} from 'react'
import axios from 'axios';
import { DesignContextState } from "../types";

const contextDefaultValues: DesignContextState = {
    designs: [],
  };

export const DesignContext = createContext<DesignContextState>(
    contextDefaultValues
  );

const DesignProvider: FC = ({children}) => {


    const [designs, setDesigns] = useState(contextDefaultValues.designs);


    useEffect(() => {
        axios.get('https://www.colourlovers.com/api/patterns?format=json')
        .then(response =>
                setDesigns(response.data))
    }, [])

    return (
        <DesignContext.Provider value={{designs}}>
            {children}
        </DesignContext.Provider>
    )
}

export default DesignProvider;
