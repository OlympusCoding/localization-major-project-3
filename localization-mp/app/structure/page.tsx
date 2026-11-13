"use client";
import { useTranslationState } from "../components/TranslationStateWrapper";


export default function Structure() {

    const translationState = useTranslationState();

    return (
        <div className={`flex flex-col px-20 py-8
        ${translationState.structure["page-orientation"] === "rtl" ? "justify-end items-end" : "justify-start items-start"}`}>
        <h1 className={`font-black text-2xl`}>{translationState.structure["page-title"]}</h1>
        <div className={`flex flex-col justify-start bg-white`}>
            {translationState.structure["page-content"].map((contentItem, index) => (
                <div key={index} className={`flex flex-col gap-2 my-4
                ${translationState.structure["page-orientation"] === "rtl" ? "justify-end items-end" : "justify-start items-start"}`}>
                    <h2 className={`font-bold text-xl
                        `}>{contentItem["section-title"]}</h2>
                    <p dangerouslySetInnerHTML={{ __html: contentItem["section-content"] }} className={`font-regular text-md
                         ${translationState.structure["page-orientation"] === "rtl" ? "text-right" : "text-left"}
                    `}></p>
                </div>
            ))}

        </div>
        </div>
    )

}