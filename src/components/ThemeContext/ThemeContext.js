import { React, createContext, useContext } from 'react'

const ThemeContext = createContext();

export function ThemeState({ children }) {

    const darkMode = (mode) => {
        if(mode === 'light'){
            return ""
        }else{
            return 'dark__mode-css'
        }
}

return (
    <ThemeContext.Provider value={{ darkMode }}>
        {children}
    </ThemeContext.Provider>
)
}

export function PageTheme() {
    return useContext(ThemeContext)
}
