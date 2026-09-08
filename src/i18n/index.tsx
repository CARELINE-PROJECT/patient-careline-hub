import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { nl, de, es, it, pt, ar, zh, ru } from "./locales/others";
import {
  defaultLocale,
  locales,
  type LocaleCode,
  type LocaleMeta,
  type PartialDictionary,
} from "./types";

export { locales, defaultLocale } from "./types";
export type { LocaleCode, LocaleMeta } from "./types";

const dictionaries: Record<LocaleCode, PartialDictionary> = {
  en,
  fr,
  nl,
  de,
  es,
  it,
  pt,
  ar,
  zh,
  ru,
};

const STORAGE_KEY = "careline.locale";

function lookup(source: unknown, path: string[]): string | undefined {
  let current: unknown = source;
  for (const key of path) {
    if (current === null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : undefined;
}

interface I18nValue {
  locale: LocaleCode;
  meta: LocaleMeta;
  setLocale: (code: LocaleCode) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
    if (stored && locales.some((l) => l.code === stored)) {
      setLocaleState(stored);
    }
  }, []);

  const meta = useMemo(
    () => locales.find((l) => l.code === locale) ?? locales[0]!,
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.dir;
  }, [meta]);

  const setLocale = useCallback((code: LocaleCode) => {
    setLocaleState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const path = key.split(".");
      return lookup(dictionaries[locale], path) ?? lookup(en, path) ?? key;
    },
    [locale],
  );

  const value = useMemo<I18nValue>(
    () => ({ locale, meta, setLocale, t, dir: meta.dir }),
    [locale, meta, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
