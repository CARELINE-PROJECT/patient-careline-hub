import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { nl } from "./locales/nl";
import { de } from "./locales/de";
import { es } from "./locales/es";
import { it } from "./locales/it";
import { pt } from "./locales/pt";
import { ar } from "./locales/ar";
import { zh } from "./locales/zh";
import { ru } from "./locales/ru";
import { ja } from "./locales/ja";
import { ko } from "./locales/ko";
import { hi } from "./locales/hi";
import { tr } from "./locales/tr";
import { pl } from "./locales/pl";
import { sv } from "./locales/sv";
import { uk } from "./locales/uk";
import { id } from "./locales/id";
import type { LocaleCode, PartialDictionary } from "./types";

export const dictionaries: Record<LocaleCode, PartialDictionary> = {
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
  ja,
  ko,
  hi,
  tr,
  pl,
  sv,
  uk,
  id,
};

export function lookup(source: unknown, path: string[]): string | undefined {
  let current: unknown = source;
  for (const key of path) {
    if (current === null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : undefined;
}
