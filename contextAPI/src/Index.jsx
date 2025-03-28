import React from 'react'
import { ThemeContext } from './Context'
import { useContext } from 'react'

const Index = () => {

    const {theme,handleTheme} = useContext(ThemeContext);
  return (
    <div className={`flex gap-3 flex-col items-center justify-center h-lvh ${theme === "light"?`bg-white`:`bg-gray-800`}`}>
        <div className={`${theme==="light"?`text-black`:`text-white`}`}>My Name is Prateek !</div>
        <div className={`${theme==="light"?`text-black`:`text-white`}`}>Hii everyone 👌</div>
        <button className={`border-2 rounded-lg p-3 cursor-pointer hover:bg-yellow-600 ${theme==="light"?`text-black`:`text-white`}`} onClick={handleTheme}>{theme==="light"?"Switch to dark mode":"Switch to light mode"}</button>
    </div>
  )
}

export default Index
