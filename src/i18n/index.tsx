import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { useRouterState } from "@tanstack/react-router";

import { dictionaries, lookup } from "./dictionaries";
import { companyTranslation } from "./company";
import { administrativeTranslation } from "./administrativeServices";
import {
  defaultLocale,
  locales,
  type LocaleCode,
  type LocaleMeta,
} from "./types";

export { locales, defaultLocale } from "./types";
export type { LocaleCode, LocaleMeta } from "./types";

const STORAGE_KEY = "careline.locale";

export function isLocaleCode(value: string): value is LocaleCode {
  return locales.some((l) => l.code === value);
}

/** Locale prefix of a pathname ("/fr/services" → "fr"), or null when absent/invalid. */
export function localeFromPath(pathname: string): LocaleCode | null {
  const first = pathname.split("/")[1] ?? "";
  return isLocaleCode(first) ? first : null;
}

/** Pathname without its locale prefix ("/fr/services" → "/services", "/fr" → "/"). */
export function stripLocalePrefix(pathname: string): string {
  const locale = localeFromPath(pathname);
  if (!locale) return pathname;
  const rest = pathname.slice(locale.length + 1);
  return rest === "" ? "/" : rest;
}

interface I18nValue {
  locale: LocaleCode;
  meta: LocaleMeta;
  /** Stores the language preference; navigation to the localized URL is done via links. */
  setLocale: (code: LocaleCode) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const locale = localeFromPath(pathname) ?? defaultLocale;
  const meta = useMemo<LocaleMeta>(
    () => locales.find((l) => l.code === locale) ?? locales.find((l) => l.code === defaultLocale)!,
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.dir;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* storage unavailable */
    }
  }, [meta, locale]);

  const setLocale = useCallback((code: LocaleCode) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const path = key.split(".");
      const translated = administrativeTranslation(locale, key) ?? companyTranslation(locale, key) ?? lookup(dictionaries[locale], path) ?? lookup(dictionaries.en, path) ?? key;
      return key === "legalContent.terms.purpose.body.0"
        ? `${translated} ${companyTranslation(locale, "company.identity") ?? ""}`
        : translated;
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

/** Builds locale-prefixed paths for internal navigation: lp("/services") → "/fr/services". */
export function useLocalePath() {
  const { locale } = useI18n();
  return useCallback((path: string) => `/${locale}${path === "/" ? "" : path}`, [locale]);
}
