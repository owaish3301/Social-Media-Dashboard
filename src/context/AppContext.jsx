import { Children, createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider(){
    const [isDark, setDark] = useState(false);

    const values = {
        isDark,
        setDark
    };

    return(
        <AppContext.Provider value={values}>
            {Children}
        </AppContext.Provider>
    )
}