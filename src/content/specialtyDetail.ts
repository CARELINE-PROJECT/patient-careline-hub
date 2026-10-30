import guides from "./specialtyGuides.json";
import { specialtyIds, type SpecialtyId } from "@/config/specialties";
import { specialtyLabels } from "@/i18n/specialties";
import { hreflangLinks, localizedUrl } from "@/i18n/head";
import { locales, type LocaleCode } from "@/i18n/types";
import { siteConfig } from "@/config/site";
import { photoUrl, type PhotoId } from "@/lib/photos";

export type SpecialtyGuide = { fr: string; en: string; source: { url: string; title: string }; video: { id: string; title: string; publisher: string } | null };
export const specialtyGuides = guides as Record<SpecialtyId, SpecialtyGuide>;

export const specialtySlug = (id: SpecialtyId) => id.replace(/_/g, "-");
export const specialtyFromSlug = (slug: string) => specialtyIds.find((id) => specialtySlug(id) === slug);
export const specialtyPath = (id: SpecialtyId) => `/specialties/${specialtySlug(id)}`;
export const specialtyPhoto = (id: SpecialtyId) => `specialite-${specialtySlug(id)}-consultation` as PhotoId;

const safe = (l: string): LocaleCode => (locales.some((x) => x.code === l) ? (l as LocaleCode) : "fr");

export function specialtyDetailCopy(locale: LocaleCode) {
  const fr = locale === "fr";
  return fr ? {
    eyebrow: "Spécialité médicale", role: "Le rôle du spécialiste", when: "Quand consulter ?",
    whenItems: ["Sur conseil de votre médecin traitant ou d'un autre professionnel de santé.", "Pour un symptôme persistant ou un suivi relevant de cette spécialité.", "Pour un deuxième avis ou la poursuite d'un suivi existant."],
    prepare: "Préparer votre rendez-vous", prepareItems: ["Notez vos symptômes, leur durée et vos questions.", "Apportez vos ordonnances, comptes rendus et examens récents au praticien.", "Vérifiez les modalités pratiques : lieu, langue, accessibilité, téléconsultation."],
    careline: "Ce que fait Careline", carelineItems: ["Recherche de praticiens correspondant à vos critères (ville, langue, disponibilités).", "Organisation, confirmation et rappel du rendez-vous.", "Accompagnement humain et multilingue tout au long de la démarche."],
    note: "Information générale, sans valeur de diagnostic. Careline est un service administratif : il ne soigne pas, ne pose pas de diagnostic et ne demande aucune donnée de santé. En cas d'urgence, appelez les secours de votre pays.",
    video: "Vidéo explicative", play: "Lire la vidéo", privacy: "La lecture charge le lecteur YouTube. Aucun contenu YouTube n'est chargé avant votre clic.", external: "Voir sur YouTube",
    source: "Source fiable pour aller plus loin", sourceNote: "Ressource externe en anglais, consultée en octobre 2026.", related: "Spécialités proches",
    ctaTitle: "Besoin d'un rendez-vous ?", ctaText: "Décrivez votre besoin : notre équipe vous propose des praticiens et organise le rendez-vous.", cta: "Demander un rendez-vous", all: "Toutes les spécialités", more: "Voir la page",
    title: (n: string) => `${n} : rôle, consultation et rendez-vous | Careline`, desc: (n: string, s: string) => `${n} : ${s}`.slice(0, 150).replace(/\s+\S*$/, "") + "…",
  } : {
    eyebrow: "Medical specialty", role: "What the specialist does", when: "When to consult?",
    whenItems: ["On the advice of your GP or another health professional.", "For a persistent symptom or follow-up within this specialty.", "For a second opinion or to continue existing care."],
    prepare: "Preparing for your appointment", prepareItems: ["Write down your symptoms, how long they have lasted and your questions.", "Bring prescriptions, reports and recent test results to the practitioner.", "Check practical details: location, language, accessibility, teleconsultation."],
    careline: "What Careline does", carelineItems: ["Finding practitioners matching your criteria (city, language, availability).", "Arranging, confirming and reminding you of the appointment.", "Human, multilingual support throughout."],
    note: "General information, not a diagnosis. Careline is an administrative service: it does not treat, diagnose or request health data. In an emergency, call your local emergency number.",
    video: "Explainer video", play: "Play video", privacy: "Playing loads the YouTube player. Nothing from YouTube loads before you click.", external: "Watch on YouTube",
    source: "Trusted source to learn more", sourceNote: "External resource, consulted in October 2026.", related: "Related specialties",
    ctaTitle: "Need an appointment?", ctaText: "Describe your need: our team suggests practitioners and arranges the appointment.", cta: "Request an appointment", all: "All specialties", more: "View page",
    title: (n: string) => `${n}: role, consultation & appointments | Careline`, desc: (n: string, s: string) => `${n}: ${s}`.slice(0, 150).replace(/\s+\S*$/, "") + "…",
  };
}

export function specialtyDetailHead(slug: string, locale: string) {
  const id = specialtyFromSlug(slug);
  if (!id) return { meta: [{ title: "Careline" }, { name: "robots", content: "noindex" }] };
  const l = safe(locale);
  const c = specialtyDetailCopy(l);
  const name = specialtyLabels[l][id];
  const g = specialtyGuides[id];
  const title = c.title(name);
  const description = c.desc(name, l === "fr" ? g.fr : g.en);
  const path = specialtyPath(id);
  const url = localizedUrl(l, path);
  const image = `${siteConfig.url}${photoUrl(specialtyPhoto(id), 1600)}`;
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage", name: title, url, inLanguage: l, description, audience: { "@type": "Patient" }, about: { "@type": "MedicalSpecialty", name }, citation: g.source.url };
  return {
    meta: [
      { title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: url },
      { property: "og:locale", content: locales.find((x) => x.code === l)?.ogLocale ?? "fr_FR" }, { property: "og:image", content: image }, { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }, ...hreflangLinks(path)],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  };
}
