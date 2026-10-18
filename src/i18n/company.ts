import { siteConfig } from "@/config/site";
import type { LocaleCode } from "./types";

// Official identity is centralized, independently of the draft legal dictionaries.
const labels: Record<LocaleCode, readonly [string, string, string, string, string, string, string]> = {
  fr: ["société à responsabilité limitée (SARL) de droit malgache", "Siège social", "Directeur de la publication et contact", "en qualité de gérant", "Centre d’appels mondial", "France & Suisse", "Belgique & Pays-Bas"],
  en: ["limited liability company (SARL) under Malagasy law", "Registered office", "Publication director and contact", "as managing director", "Global call centre", "France & Switzerland", "Belgium & Netherlands"],
  nl: ["vennootschap met beperkte aansprakelijkheid (SARL) naar Malagassisch recht", "Statutaire zetel", "Publicatiedirecteur en contact", "als zaakvoerder", "Wereldwijd callcenter", "Frankrijk & Zwitserland", "België & Nederland"],
  de: ["Gesellschaft mit beschränkter Haftung (SARL) nach madagassischem Recht", "Firmensitz", "Verantwortlicher für die Veröffentlichung und Kontakt", "als Geschäftsführer", "Weltweites Callcenter", "Frankreich & Schweiz", "Belgien & Niederlande"],
  es: ["sociedad de responsabilidad limitada (SARL) de derecho malgache", "Domicilio social", "Director de publicación y contacto", "en calidad de gerente", "Centro de llamadas mundial", "Francia y Suiza", "Bélgica y Países Bajos"],
  it: ["società a responsabilità limitata (SARL) di diritto malgascio", "Sede legale", "Direttore della pubblicazione e contatti", "in qualità di gerente", "Centro chiamate mondiale", "Francia e Svizzera", "Belgio e Paesi Bassi"],
  pt: ["sociedade de responsabilidade limitada (SARL) de direito malgaxe", "Sede social", "Diretor da publicação e contacto", "na qualidade de gerente", "Centro de chamadas mundial", "França e Suíça", "Bélgica e Países Baixos"],
  ar: ["شركة ذات مسؤولية محدودة (SARL) خاضعة لقانون مدغشقر", "المقر الرئيسي", "مدير النشر والتواصل", "بصفته المدير", "مركز الاتصال العالمي", "فرنسا وسويسرا", "بلجيكا وهولندا"],
  zh: ["依马达加斯加法律设立的有限责任公司（SARL）", "注册办公地址", "出版负责人及联系方式", "担任经理", "全球呼叫中心", "法国和瑞士", "比利时和荷兰"],
  ru: ["общество с ограниченной ответственностью (SARL) по законодательству Мадагаскара", "Юридический адрес", "Ответственный за публикацию и контакты", "в качестве управляющего", "Международный колл-центр", "Франция и Швейцария", "Бельгия и Нидерланды"],
};

export function companyTranslation(locale: LocaleCode, key: string): string | undefined {
  const [form, office, director, capacity, madagascar, france, belgium] = labels[locale];
  const identity = `${siteConfig.name}, ${form}. ${office} : ${siteConfig.company.address}. NIF : ${siteConfig.company.nif} — STAT : ${siteConfig.company.stat}.`;
  const values: Record<string, string> = {
    "company.form": form,
    "company.office": office,
    "company.director": director,
    "company.capacity": capacity,
    "company.identity": identity,
    "company.madagascar": madagascar,
    "company.franceSwitzerland": france,
    "company.belgiumNetherlands": belgium,
    "site.address": siteConfig.company.address,
    "legalContent.privacy.who.body.0": identity,
    "legalContent.notice.publisher.body.0": identity,
    "legalContent.notice.contact.heading": director,
  };
  return values[key];
}
