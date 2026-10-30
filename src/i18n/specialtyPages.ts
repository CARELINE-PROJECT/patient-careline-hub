import { hreflangLinks, localizedUrl } from "./head";
import { ogLaserImage, ogSpecialtiesImage } from "@/config/ogImages";
import { siteConfig } from "@/config/site";
import { locales, type LocaleCode } from "./types";

type BaseLocale = "en" | "fr" | "nl" | "de" | "es" | "it" | "pt" | "ar" | "zh" | "ru";

const baseLabels: Record<BaseLocale, [string, string, string, string, string]> = {
  fr: ["Spécialités", "Trouvez la spécialité qui vous correspond", "Laser des yeux Ophtalmologiste", "Comprendre les techniques et préparer votre parcours avec un ophtalmologiste.", "Découvrir le guide"],
  en: ["Specialties", "Find the right specialty for you", "Eye laser · Ophthalmologist", "Understand the techniques and prepare your journey with an ophthalmologist.", "Explore the guide"],
  nl: ["Specialismen", "Vind het juiste specialisme", "Ooglaser · Oogarts", "Ontdek de technieken en bereid uw traject met een oogarts voor.", "Bekijk de gids"],
  de: ["Fachgebiete", "Finden Sie das passende Fachgebiet", "Augenlaser · Augenarzt", "Verstehen Sie die Verfahren und planen Sie Ihren Weg mit einem Augenarzt.", "Zum Ratgeber"],
  es: ["Especialidades", "Encuentre la especialidad adecuada", "Láser ocular · Oftalmólogo", "Conozca las técnicas y prepare su proceso con un oftalmólogo.", "Ver la guía"],
  it: ["Specialità", "Trova la specialità giusta", "Laser occhi · Oculista", "Scopri le tecniche e prepara il tuo percorso con un oculista.", "Leggi la guida"],
  pt: ["Especialidades", "Encontre a especialidade adequada", "Laser ocular · Oftalmologista", "Conheça as técnicas e prepare o seu percurso com um oftalmologista.", "Ver o guia"],
  ar: ["التخصصات", "اعثر على التخصص المناسب لك", "ليزر العيون · طبيب العيون", "تعرّف على التقنيات واستعد لرحلتك مع طبيب العيون.", "استكشف الدليل"],
  zh: ["医疗专科", "找到适合您的专科", "眼部激光 · 眼科医生", "了解治疗技术，与眼科医生一起准备您的就诊过程。", "阅读指南"],
  ru: ["Специальности", "Найдите нужную специальность", "Лазерная коррекция · Офтальмолог", "Узнайте о методах и подготовьтесь к консультации офтальмолога.", "Открыть руководство"],
};

// Newer locales fall back to English until fully translated.
const labels: Record<LocaleCode, [string, string, string, string, string]> = {
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

export function specialtyPageCopy(locale: LocaleCode) {
  const [directory, title, eyeTitle, lead, guide] = labels[locale];
  return { directory, title, eyeTitle, lead, guide };
}

const specialtyPaths = { directory: "/specialties", eye: "/chirurgie-laser-yeux" } as const;

export function specialtyPageHead(kind: "directory" | "eye", locale: string) {
  const path = specialtyPaths[kind];
  const url = localizedUrl(locales.some((l) => l.code === locale) ? (locale as LocaleCode) : "fr", path);
  const ogLocale = locales.find((l) => l.code === locale)?.ogLocale ?? "fr_FR";
  const image = `${siteConfig.url}${kind === "eye" ? ogLaserImage : ogSpecialtiesImage}`;
  return {
    meta: [
      ...specialtyPageMeta(kind, locale),
      { property: "og:url", content: url },
      { property: "og:locale", content: ogLocale },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }, ...hreflangLinks(path)],
  };
}

/** SEO-tuned titles (50–60 chars) and descriptions (140–155 chars, with CTA) for fr and en. */
const specialtySeoMeta = {
  directory: {
    fr: {
      title: "Spécialités médicales : trouvez le bon praticien | Careline",
      description:
        "Parcourez les spécialités médicales couvertes par Careline et découvrez notre guide complet sur la correction de la vision au laser. Trouvez votre praticien.",
    },
    en: {
      title: "Medical Specialties: Find the Right Practitioner | Careline",
      description:
        "Browse the medical specialties covered by Careline and discover our complete guide to laser vision correction. Find the right practitioner for you.",
    },
  },
  eye: {
    fr: {
      title: "Chirurgie laser des yeux : guide patient complet | Careline",
      description:
        "LASIK, PKR et SMILE : bilan, préparation, intervention, récupération et risques. Un guide patient sans prix pour préparer votre consultation.",
    },
    en: {
      title: "Eye Laser Surgery: Techniques & Patient Journey | Careline",
      description:
        "LASIK, PRK and SMILE: assessment, preparation, procedure, recovery and risks. A price-free patient guide to prepare for your consultation.",
    },
  },
} as const;

export function specialtyPageMeta(kind: "directory" | "eye", locale: string = "fr") {
  const seo = specialtySeoMeta[kind];
  const tuned = locale === "fr" || locale === "en" ? seo[locale] : undefined;
  const c = specialtyPageCopy(locales.some((l) => l.code === locale) ? (locale as LocaleCode) : "fr");
  const title = tuned?.title ?? `${kind === "directory" ? c.title : c.eyeTitle} | Careline`;
  const description = tuned?.description ?? c.lead;
  return [
    { title }, { name: "description", content: description },
    { property: "og:title", content: title }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ];
}