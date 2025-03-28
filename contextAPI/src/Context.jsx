import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const ThemeContext = createContext();

const Context = ({children}) => {
    const [theme,setTheme] = useState("light");

    const handleTheme=()=>{
        setTheme((prev)=>prev === "light"?"dark":"light");
    }
  return (
    <ThemeContext.Provider value={{theme,handleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export {Context,ThemeContext}
