import { createContext, useState } from "react";

export const LocaleContext = createContext({
    isLanguageBarOpen: false,
    setisLanguageBarOpen: ()=>{}
});

export const LocaleProvider = ({children}) => {

    const [isLanguageBarOpen, setisLanguageBarOpen] = useState(false);

    const value = {
        isLanguageBarOpen, 
        setisLanguageBarOpen,
    };
    return(
        <LocaleContext.Provider value={value} >{children}</LocaleContext.Provider>
    )
}