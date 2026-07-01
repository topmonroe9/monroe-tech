import { createContext, useContext, useEffect, useState } from "react";
import { makeTheme } from "./theme.js";

const AppContext = createContext(null);

const initialLang = () => {
  const saved = typeof localStorage !== "undefined" && localStorage.getItem("mt-lang");
  if (saved === "en" || saved === "ru") return saved;
  const host = window.location.hostname;
  if (host === "monroe-tech.dev") return "en";
  if (host === "monroe-tech.ru") return "ru";
  const bl = navigator.language || navigator.userLanguage || "";
  return bl.startsWith("ru") ? "ru" : "en";
};

const initialDark = () => {
  const saved = typeof localStorage !== "undefined" && localStorage.getItem("mt-theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return !window.matchMedia?.("(prefers-color-scheme: light)").matches;
};

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);
  const [dark, setDark] = useState(initialDark);

  useEffect(() => { localStorage.setItem("mt-lang", lang); }, [lang]);
  useEffect(() => { localStorage.setItem("mt-theme", dark ? "dark" : "light"); }, [dark]);

  const th = makeTheme(dark);
  const value = {
    lang, dark, th,
    toggleLang: () => setLang((l) => (l === "en" ? "ru" : "en")),
    toggleDark: () => setDark((d) => !d),
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};
