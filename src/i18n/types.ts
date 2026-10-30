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
  ogLocale: string;
  flag: string;
  name: string;
}

export const locales: LocaleMeta[] = [
  { code: "en", short: "EN", dir: "ltr", htmlLang: "en", ogLocale: "en_US", flag: "🇬🇧", name: "English" },
  { code: "fr", short: "FR", dir: "ltr", htmlLang: "fr", ogLocale: "fr_FR", flag: "🇫🇷", name: "Français" },
  { code: "nl", short: "NL", dir: "ltr", htmlLang: "nl", ogLocale: "nl_NL", flag: "🇳🇱", name: "Nederlands" },
  { code: "de", short: "DE", dir: "ltr", htmlLang: "de", ogLocale: "de_DE", flag: "🇩🇪", name: "Deutsch" },
  { code: "es", short: "ES", dir: "ltr", htmlLang: "es", ogLocale: "es_ES", flag: "🇪🇸", name: "Español" },
  { code: "it", short: "IT", dir: "ltr", htmlLang: "it", ogLocale: "it_IT", flag: "🇮🇹", name: "Italiano" },
  { code: "pt", short: "PT", dir: "ltr", htmlLang: "pt", ogLocale: "pt_PT", flag: "🇵🇹", name: "Português" },
  { code: "ar", short: "AR", dir: "rtl", htmlLang: "ar", ogLocale: "ar_SA", flag: "🇸🇦", name: "العربية" },
  { code: "zh", short: "ZH", dir: "ltr", htmlLang: "zh", ogLocale: "zh_CN", flag: "🇨🇳", name: "中文" },
  { code: "ru", short: "RU", dir: "ltr", htmlLang: "ru", ogLocale: "ru_RU", flag: "🇷🇺", name: "Русский" },
  { code: "ja", short: "JA", dir: "ltr", htmlLang: "ja", ogLocale: "ja_JP", flag: "🇯🇵", name: "日本語" },
  { code: "ko", short: "KO", dir: "ltr", htmlLang: "ko", ogLocale: "ko_KR", flag: "🇰🇷", name: "한국어" },
  { code: "hi", short: "HI", dir: "ltr", htmlLang: "hi", ogLocale: "hi_IN", flag: "🇮🇳", name: "हिन्दी" },
  { code: "tr", short: "TR", dir: "ltr", htmlLang: "tr", ogLocale: "tr_TR", flag: "🇹🇷", name: "Türkçe" },
  { code: "pl", short: "PL", dir: "ltr", htmlLang: "pl", ogLocale: "pl_PL", flag: "🇵🇱", name: "Polski" },
  { code: "sv", short: "SV", dir: "ltr", htmlLang: "sv", ogLocale: "sv_SE", flag: "🇸🇪", name: "Svenska" },
  { code: "uk", short: "UK", dir: "ltr", htmlLang: "uk", ogLocale: "uk_UA", flag: "🇺🇦", name: "Українська" },
  { code: "id", short: "ID", dir: "ltr", htmlLang: "id", ogLocale: "id_ID", flag: "🇮🇩", name: "Bahasa Indonesia" },
];

export const defaultLocale: LocaleCode = "fr";
