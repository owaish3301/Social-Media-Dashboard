import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [isDark, setDark] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const setMode = () => {
        setIsMobile(window.innerWidth <= 768);
    }
    useEffect(()=>{
        window.addEventListener('resize', setMode);
        return()=>{
            window.removeEventListener('resize', setMode)
        }
    },[])

    const values = {
        isDark,
        setDark,
        isMobile
    };

    return(
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}