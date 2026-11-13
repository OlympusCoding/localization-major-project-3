import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageStateWrapper from "./components/LangaugeStateWrapper";
import TranslationDataWrapper from "./components/TranslationStateWrapper";
import PageStructure from "./components/PageStructure";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Localization Major Project 3",
  description: "Will Jacobs - ENGL 215",
};

export default function RootLayout({ children }: LayoutProps<"/">) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <LanguageStateWrapper>
          <TranslationDataWrapper>
            <PageStructure>
              {children}
            </PageStructure>

          </TranslationDataWrapper>
        </LanguageStateWrapper>
      </body>
    </html>
  );
}
