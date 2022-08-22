import { createContext, useState } from 'react'

export const AppContext = createContext()

export const ContextProvider = ({ children }) => {
    const [ logado, setLogado ] = useState(false)

    return(
        <AppContext.Provider value={{ logado, setLogado }}>
            {children}
        </AppContext.Provider>
    )
}
