"use client";

import { ChangeLanguageButton } from "./LangaugeStateWrapper";
import { useTranslationState } from "./TranslationStateWrapper";


export default function PageStructure({ children }: { children: React.ReactNode }) {

    const translationState = useTranslationState();

    return (
        <>
            <header className={`flex flex-row items-start h-fit py-8 px-20 justify-between bg-blue-400
            ${translationState.translation["page-orientation"] === "rtl" ? "text-right" : "text-left"} 
            ${translationState.translation["page-orientation"] === "rtl" ? "flex-row-reverse" : "flex-row"}`
            }>
                <h1 className={`font-black text-3xl`}>{translationState["website-title"]}</h1>

                <nav className={`flex gap-10  ${translationState.translation["page-orientation"] === "rtl" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`flex gap-8 ${translationState.translation["page-orientation"] === "rtl" ? "flex-row-reverse" : "flex-row"}`}>
                        <a href="/translation">{translationState.translation["nav-items"]["translation"]}</a>
                        <a href="/conversion">{translationState.translation["nav-items"]["conversions"]}</a>
                        <a href="/structure">{translationState.translation["nav-items"]["structure"]}</a>
                        <a href="/works-cited">{translationState.translation["nav-items"]["works-cited"]}</a>
                    </div>
                    <ChangeLanguageButton language={translationState.translation["next-lang-code"]}>
                        {translationState.translation["change-button-text"]}
                    </ChangeLanguageButton>
                </nav>


            </header>
            <main>
                {children}
            </main>
        </>
    )

}