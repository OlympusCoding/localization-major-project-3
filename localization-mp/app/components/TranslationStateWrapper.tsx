"use client";
import translation_en from "../../public/resources/translation_en.json";
import translation_ar from "../../public/resources/translation_ar.json";
import {createContext, useContext} from "react";
import { useLanguageState } from "./LangaugeStateWrapper";

export type JSONType = typeof translation_en;

const translationCodeMapping: { [key: string]: JSONType } = {
    "en": translation_en,
    "ar": translation_ar
};



const TranslationContext = createContext<JSONType | undefined>(undefined);

export default function TranslationDataWrapper({ children }: { children: React.ReactNode }) {

    const languageState = useLanguageState();
    // const [translation, setTranslation] = useState<JSONType>(translationCodeMapping[languageState.language] || translation_en);

    const currentTranslationData: JSONType = translationCodeMapping[languageState.language] || translation_en;

    // const value = {translation, setTranslation}

    // useEffect(() => {
    //     const newTranslation = translationCodeMapping[languageState.language] || translation_en;
    //     setTranslation(newTranslation);
    // }, [languageState.language]);

    return (
        <TranslationContext.Provider value={currentTranslationData}>
            {children}
        </TranslationContext.Provider>
    );

}

export const useTranslationState = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error("useTranslationState must be used within a TranslationStateWrapper");
    }
    return context;
}