"use client";
import {useState} from "react";
import { createContext } from "react";
import {useContext} from "react";







interface LanguageContextType {
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default function LanguageStateWrapper({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState("en");

    

    const value = {language, setLanguage}

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )


}

export const useLanguageState = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguageState must be used within a LanguageStateWrapper");
    }
    return context;
}

export const ChangeLanguageButton = ({ language, children }: { language: string; children: React.ReactNode }) => {
    const languageState = useLanguageState();

    return (
        <button onClick={() => languageState.setLanguage(language)}>
            {children}
        </button>
    )
}