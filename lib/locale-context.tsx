"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";
import { Locale, defaultLocale, getContent, Content } from "@/data/content";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: Content;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = "preferred-locale";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
  if (stored && (stored === "en" || stored === "fr")) {
    return stored;
  }
  return defaultLocale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ locale: Locale; mounted: boolean }>({
    locale: defaultLocale,
    mounted: false,
  });

  useEffect(() => {
    const initialLocale = getInitialLocale();
    requestAnimationFrame(() => {
      setState({
        locale: initialLocale,
        mounted: true,
      });
    });
  }, []);

  const setLocale = (newLocale: Locale) => {
    setState((prev) => ({ ...prev, locale: newLocale }));
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
  };

  const content = useMemo(() => getContent(state.locale), [state.locale]);

  if (!state.mounted) {
    return null;
  }

  return (
    <LocaleContext.Provider value={{ locale: state.locale, setLocale, content }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
