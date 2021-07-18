import React, {useContext} from "react";
import {ThemeContext} from "../context/store";

interface ThemeProps {
    dark: boolean
}

export const withTheme = (WrappedComponent: React.ComponentType<ThemeProps>) => {



    return (props: any) => {
        const {dark} = useContext(ThemeContext)
        return <WrappedComponent dark={dark} {...props}/>;
    };

}