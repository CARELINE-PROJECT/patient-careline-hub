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
  | "ru"
  | "ja"
  | "ko"
  | "hi"
  | "tr"
  | "pl"
  | "sv"
  | "uk"
  | "id";

export interface LocaleMeta {
  code: LocaleCode;
  short: string;
  dir: "ltr" | "rtl";
  htmlLang: string;
  flag: string;
  name: string;
}

export const locales: LocaleMeta[] = [
  { code: "en", short: "EN", dir: "ltr", htmlLang: "en", flag: "🇬🇧", name: "English" },
  { code: "fr", short: "FR", dir: "ltr", htmlLang: "fr", flag: "🇫🇷", name: "Français" },
  { code: "nl", short: "NL", dir: "ltr", htmlLang: "nl", flag: "🇳🇱", name: "Nederlands" },
  { code: "de", short: "DE", dir: "ltr", htmlLang: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "es", short: "ES", dir: "ltr", htmlLang: "es", flag: "🇪🇸", name: "Español" },
  { code: "it", short: "IT", dir: "ltr", htmlLang: "it", flag: "🇮🇹", name: "Italiano" },
  { code: "pt", short: "PT", dir: "ltr", htmlLang: "pt", flag: "🇵🇹", name: "Português" },
  { code: "ar", short: "AR", dir: "rtl", htmlLang: "ar", flag: "🇸🇦", name: "العربية" },
  { code: "zh", short: "ZH", dir: "ltr", htmlLang: "zh", flag: "🇨🇳", name: "中文" },
  { code: "ru", short: "RU", dir: "ltr", htmlLang: "ru", flag: "🇷🇺", name: "Русский" },
  { code: "ja", short: "JA", dir: "ltr", htmlLang: "ja", flag: "🇯🇵", name: "日本語" },
  { code: "ko", short: "KO", dir: "ltr", htmlLang: "ko", flag: "🇰🇷", name: "한국어" },
  { code: "hi", short: "HI", dir: "ltr", htmlLang: "hi", flag: "🇮🇳", name: "हिन्दी" },
  { code: "tr", short: "TR", dir: "ltr", htmlLang: "tr", flag: "🇹🇷", name: "Türkçe" },
  { code: "pl", short: "PL", dir: "ltr", htmlLang: "pl", flag: "🇵🇱", name: "Polski" },
  { code: "sv", short: "SV", dir: "ltr", htmlLang: "sv", flag: "🇸🇪", name: "Svenska" },
  { code: "uk", short: "UK", dir: "ltr", htmlLang: "uk", flag: "🇺🇦", name: "Українська" },
  { code: "id", short: "ID", dir: "ltr", htmlLang: "id", flag: "🇮🇩", name: "Bahasa Indonesia" },
];

export const defaultLocale: LocaleCode = "en";
