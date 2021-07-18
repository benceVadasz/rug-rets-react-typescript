import React, {FunctionComponent as FC, useState} from 'react'
import {ThemeContext} from "./store";

const ThemeProvider: FC = ({children}) => {

  const [dark, toggleMode] = useState(false)

    const changeMode = () => {
      toggleMode(!dark)
    }

  return (
    <ThemeContext.Provider value={{dark, changeMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider