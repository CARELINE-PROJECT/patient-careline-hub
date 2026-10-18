import type { LocaleCode } from "./types";

export interface FooterGlobalCopy {
  title: string;
  lead: string;
  languages: string;
  support: string;
  reach: string;
}

/**
 * Worldwide positioning band shown at the top of the footer.
 * Facts kept deliberately soft: only the language count and the 24/7 support
 * hours the company has confirmed are stated; nothing else is quantified.
 */
const baseFooterGlobalCopy = {
  fr: {
    title: "Une assistance humaine, partout dans le monde",
    lead: "Careline accompagne patients et professionnels de santé dans leur langue, à toute heure, sur plusieurs continents.",
    languages: "18 langues",
    support: "Assistance humaine 24h/24, 7j/7",
    reach: "Patients et professionnels sur plusieurs continents",
  },
  en: {
    title: "Human assistance, wherever you are",
    lead: "Careline supports patients and healthcare professionals in their own language, at any hour, across several continents.",
    languages: "18 languages",
    support: "24/7 human support",
    reach: "Patients and professionals across several continents",
  },
  nl: {
    title: "Menselijke ondersteuning, overal ter wereld",
    lead: "Careline begeleidt patiënten en zorgverleners in hun eigen taal, op elk moment, op meerdere continenten.",
    languages: "18 talen",
    support: "24/7 menselijke ondersteuning",
    reach: "Patiënten en zorgverleners op meerdere continenten",
  },
  de: {
    title: "Menschliche Unterstützung, überall auf der Welt",
    lead: "Careline begleitet Patienten und Gesundheitsfachkräfte in ihrer eigenen Sprache, rund um die Uhr, auf mehreren Kontinenten.",
    languages: "18 Sprachen",
    support: "24/7 menschliche Unterstützung",
    reach: "Patienten und Fachkräfte auf mehreren Kontinenten",
  },
  es: {
    title: "Asistencia humana, estés donde estés",
    lead: "Careline acompaña a pacientes y profesionales sanitarios en su propio idioma, a cualquier hora, en varios continentes.",
    languages: "18 idiomas",
    support: "Asistencia humana 24/7",
    reach: "Pacientes y profesionales en varios continentes",
  },
  it: {
    title: "Assistenza umana, ovunque tu sia",
    lead: "Careline accompagna pazienti e professionisti sanitari nella loro lingua, a ogni ora, su più continenti.",
    languages: "18 lingue",
    support: "Assistenza umana 24/7",
    reach: "Pazienti e professionisti su più continenti",
  },
  pt: {
    title: "Apoio humano, onde quer que esteja",
    lead: "A Careline acompanha pacientes e profissionais de saúde na sua própria língua, a qualquer hora, em vários continentes.",
    languages: "18 idiomas",
    support: "Apoio humano 24/7",
    reach: "Pacientes e profissionais em vários continentes",
  },
  ar: {
    title: "دعم بشري أينما كنت",
    lead: "ترافق Careline المرضى والمهنيين الصحيين بلغتهم الخاصة، على مدار الساعة، عبر عدة قارات.",
    languages: "18 لغة",
    support: "دعم بشري على مدار 24 ساعة طوال أيام الأسبوع",
    reach: "مرضى ومهنيون عبر عدة قارات",
  },
  zh: {
    title: "无论您身在何处，都有人工协助",
    lead: "Careline 以您自己的语言，全天候为多个大洲的患者与医疗专业人员提供支持。",
    languages: "18 种语言",
    support: "全天候 24 小时人工支持",
    reach: "患者与专业人员遍布多个大洲",
  },
  ru: {
    title: "Живая помощь, где бы вы ни были",
    lead: "Careline поддерживает пациентов и медицинских специалистов на их родном языке, круглосуточно, на нескольких континентах.",
    languages: "18 языков",
    support: "Круглосуточная поддержка живыми людьми",
    reach: "Пациенты и специалисты на нескольких континентах",
  },
};

// Newer locales fall back to English until fully translated.
export const footerGlobalCopy: Record<LocaleCode, FooterGlobalCopy> = {
  ...baseFooterGlobalCopy,
  ja: baseFooterGlobalCopy.en,
  ko: baseFooterGlobalCopy.en,
  hi: baseFooterGlobalCopy.en,
  tr: baseFooterGlobalCopy.en,
  pl: baseFooterGlobalCopy.en,
  sv: baseFooterGlobalCopy.en,
  uk: baseFooterGlobalCopy.en,
  id: baseFooterGlobalCopy.en,
};
