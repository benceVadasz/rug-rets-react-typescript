import React, {FunctionComponent as FC, useState} from 'react'
import {ThemeContext} from "./store";

const ThemeProvider: FC = ({children}) => {

  const initDark = localStorage.getItem('dark')


  console.log(initDark)
  const [dark, toggleMode] = useState(false)

    const changeMode = () => {
      toggleMode(!dark)
      localStorage.setItem('dark', ''+!dark)
    }

  return (
    <ThemeContext.Provider value={{dark: initDark === "true", changeMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider