import { createContext, useContext, useState, useMemo } from "react";
import es from "../i18n/es";
import en from "../i18n/en";

const translations = { es, en };

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("es");

  const value = useMemo(() => ({
    lang,
    setLang,
    t: translations[lang],
  }), [lang]);

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}