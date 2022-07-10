
import React, { createContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {

    const [isAuth, SetIsAuth] = useState(false)
    
    const login = () => {
        SetIsAuth(true)
    }

    return (
        <AppContext.Provider value={{isAuth, login}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext};