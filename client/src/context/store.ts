import { DesignContextState } from "../types";
import {createContext} from "react";


export const DesignContext = createContext<DesignContextState>(
    {designs: [], setPage: page => console.log(page),
                    currentPage: 1, setParam: param => console.log(param),
                    loading: false}
);