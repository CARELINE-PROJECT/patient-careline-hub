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
  short: string;
  dir: "ltr" | "rtl";
  htmlLang: string;
}

export const locales: LocaleMeta[] = [
  { code: "en", short: "EN", dir: "ltr", htmlLang: "en" },
  { code: "fr", short: "FR", dir: "ltr", htmlLang: "fr" },
  { code: "nl", short: "NL", dir: "ltr", htmlLang: "nl" },
  { code: "de", short: "DE", dir: "ltr", htmlLang: "de" },
  { code: "es", short: "ES", dir: "ltr", htmlLang: "es" },
  { code: "it", short: "IT", dir: "ltr", htmlLang: "it" },
  { code: "pt", short: "PT", dir: "ltr", htmlLang: "pt" },
  { code: "ar", short: "AR", dir: "rtl", htmlLang: "ar" },
  { code: "zh", short: "ZH", dir: "ltr", htmlLang: "zh" },
  { code: "ru", short: "RU", dir: "ltr", htmlLang: "ru" },
];

export const defaultLocale: LocaleCode = "en";
