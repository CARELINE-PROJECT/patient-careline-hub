import type { Dictionary } from "./locales/en";

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends string
    ? string
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

export type PartialDictionary = DeepPartial<Dictionary>;

export type LocaleCode =
  | "en"
  | "fr"
  | "nl"
  | "de"
  | "es"
  | "it"
  | "pt"
  | "ar"
  | "zh"
  | "ru";

export interface LocaleMeta {
  code: LocaleCode;
  label: string;
  short: string;
  dir: "ltr" | "rtl";
  htmlLang: string;
}

export const locales: LocaleMeta[] = [
  { code: "en", label: "English", short: "EN", dir: "ltr", htmlLang: "en" },
  { code: "fr", label: "Français", short: "FR", dir: "ltr", htmlLang: "fr" },
  { code: "nl", label: "Nederlands (NL / BE)", short: "NL", dir: "ltr", htmlLang: "nl" },
  { code: "de", label: "Deutsch", short: "DE", dir: "ltr", htmlLang: "de" },
  { code: "es", label: "Español", short: "ES", dir: "ltr", htmlLang: "es" },
  { code: "it", label: "Italiano", short: "IT", dir: "ltr", htmlLang: "it" },
  { code: "pt", label: "Português", short: "PT", dir: "ltr", htmlLang: "pt" },
  { code: "ar", label: "العربية", short: "AR", dir: "rtl", htmlLang: "ar" },
  { code: "zh", label: "中文", short: "ZH", dir: "ltr", htmlLang: "zh" },
  { code: "ru", label: "Русский", short: "RU", dir: "ltr", htmlLang: "ru" },
];

export const defaultLocale: LocaleCode = "en";
