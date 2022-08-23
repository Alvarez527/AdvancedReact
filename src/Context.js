
import React, { createContext, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {

    const [isAuth, SetIsAuth] = useState(() => {
        return window.sessionStorage.getItem('token')
    });
    
    const login = (token) => {
        SetIsAuth(true)
        window.sessionStorage.setItem('token', token);
    }

    const removeAuth = () => {
        SetIsAuth(false);
        window.sessionStorage.removeItem('token');
    }

    return (
        <AppContext.Provider value={{isAuth, login, removeAuth}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext};