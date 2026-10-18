import { siteConfig } from "@/config/site";
import type { LocaleCode } from "./types";

// Official identity is centralized, independently of the draft legal dictionaries.
type BaseLocale = "en" | "fr" | "nl" | "de" | "es" | "it" | "pt" | "ar" | "zh" | "ru";

const baseLabels: Record<BaseLocale, readonly [string, string, string, string]> = {
  fr: ["société à responsabilité limitée (SARL) de droit malgache", "Siège social", "Directeur de la publication et contact", "en qualité de gérant"],
  en: ["limited liability company (SARL) under Malagasy law", "Registered office", "Publication director and contact", "as managing director"],
  nl: ["vennootschap met beperkte aansprakelijkheid (SARL) naar Malagassisch recht", "Statutaire zetel", "Publicatiedirecteur en contact", "als zaakvoerder"],
  de: ["Gesellschaft mit beschränkter Haftung (SARL) nach madagassischem Recht", "Firmensitz", "Verantwortlicher für die Veröffentlichung und Kontakt", "als Geschäftsführer"],
  es: ["sociedad de responsabilidad limitada (SARL) de derecho malgache", "Domicilio social", "Director de publicación y contacto", "en calidad de gerente"],
  it: ["società a responsabilità limitata (SARL) di diritto malgascio", "Sede legale", "Direttore della pubblicazione e contatti", "in qualità di gerente"],
  pt: ["sociedade de responsabilidade limitada (SARL) de direito malgaxe", "Sede social", "Diretor da publicação e contacto", "na qualidade de gerente"],
  ar: ["شركة ذات مسؤولية محدودة (SARL) خاضعة لقانون مدغشقر", "المقر الرئيسي", "مدير النشر والتواصل", "بصفته المدير"],
  zh: ["依马达加斯加法律设立的有限责任公司（SARL）", "注册办公地址", "出版负责人及联系方式", "担任经理"],
  ru: ["общество с ограниченной ответственностью (SARL) по законодательству Мадагаскара", "Юридический адрес", "Ответственный за публикацию и контакты", "в качестве управляющего"],
};

// Newer locales fall back to English until fully translated.
const labels: Record<LocaleCode, readonly [string, string, string, string]> = {
  ...baseLabels,
  ja: baseLabels.en,
  ko: baseLabels.en,
  hi: baseLabels.en,
  tr: baseLabels.en,
  pl: baseLabels.en,
  sv: baseLabels.en,
  uk: baseLabels.en,
  id: baseLabels.en,
};

export function companyTranslation(locale: LocaleCode, key: string): string | undefined {
  const [form, office, director, capacity] = labels[locale];
  const identity = `${siteConfig.name}, ${form}. ${office} : ${siteConfig.company.address}. NIF : ${siteConfig.company.nif} — STAT : ${siteConfig.company.stat}.`;
  const values: Record<string, string> = {
    "company.form": form,
    "company.office": office,
    "company.director": director,
    "company.capacity": capacity,
    "company.identity": identity,
    "site.address": siteConfig.company.address,
    "legalContent.privacy.who.body.0": identity,
    "legalContent.notice.publisher.body.0": identity,
    "legalContent.notice.contact.heading": director,
  };
  return values[key];
}
