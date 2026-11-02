import type { LocaleCode } from "./types";

export const humanitarianLabels: Record<LocaleCode, string> = {
  fr: "Humanitaire", en: "Humanitarian", nl: "Humanitair", de: "Humanitäre Hilfe",
  es: "Ayuda humanitaria", it: "Solidarietà", pt: "Humanitário", ar: "العمل الإنساني",
  zh: "人道援助", ru: "Гуманитарная помощь", ja: "人道支援", ko: "인도적 지원",
  hi: "मानवीय सहायता", tr: "İnsani yardım", pl: "Pomoc humanitarna", sv: "Humanitärt arbete",
  uk: "Гуманітарна допомога", id: "Kemanusiaan",
};

const fr = {
  title: "La santé pour tous, sans frontières",
  introduction: "Careline s’engage pour la santé de tous, partout dans le monde.",
  lead: "Notre ambition : mettre la technologie et l’innovation au service d’une santé plus accessible, plus inclusive et plus solidaire.",
  presentation: "Careline souhaite agir aux côtés d’associations, d’ONG et de fondations de santé à travers le monde pour rendre les soins médicaux accessibles au plus grand nombre, notamment aux populations les plus vulnérables.",
  partnerships: "À travers le développement de partenariats solidaires, nous souhaitons contribuer à faciliter l’accès aux consultations médicales, aux traitements, aux vaccins et à une alimentation saine et équilibrée.",
  action: "Construire un projet solidaire", directory: "Découvrir les organisations",
  priorities: "Connecter les acteurs de la santé pour aider ceux qui en ont le plus besoin",
  consultation: "Faciliter l’accès aux soins",
  consultationLead: "Soutenir la coordination administrative des rendez-vous et la mise en relation avec les structures de santé, notamment dans les territoires où l’accès aux consultations est difficile.",
  prevention: "Accompagner la prévention",
  preventionLead: "Mettre les outils de coordination au service des acteurs qui organisent le dépistage, la vaccination et l’accès aux traitements. Les décisions médicales restent celles des professionnels de santé.",
  nutrition: "Soutenir une santé durable",
  nutritionLead: "Favoriser la coopération avec les acteurs de la nutrition et de la santé communautaire pour une alimentation saine, équilibrée et adaptée aux besoins des populations.",
  technology: "La technologie au service de la solidarité médicale mondiale",
  technologyLead: "Gestion des rendez-vous, accompagnement multilingue et suivi administratif : Careline veut mettre son savoir-faire administratif et technique au service des équipes de terrain, dans le respect de leur autonomie.",
  contact: "Associations, ONG, fondations : échangeons sur votre projet",
  contactLead: "Vous portez une initiative de santé solidaire ? Parlons de vos besoins de coordination et de l’accompagnement administratif et technique que Careline pourrait vous apporter.",
  illustration: "Images d’illustration générées ; elles ne représentent pas des missions réalisées par Careline ni par les organisations citées.",
  description: "Découvrez l’ambition humanitaire de Careline : mettre la technologie au service d’une santé accessible, inclusive et solidaire, sans frontières.",
};
const en = {
  title: "Health for everyone, without borders",
  introduction: "Careline is committed to health for everyone, everywhere in the world.",
  lead: "Our ambition: put technology and innovation to work for more accessible, inclusive and compassionate healthcare.",
  presentation: "Careline aims to work alongside health associations, NGOs and foundations around the world to make medical care accessible to as many people as possible, especially the most vulnerable communities.",
  partnerships: "By developing solidarity partnerships, we hope to help improve access to medical consultations, treatment, vaccines and a healthy, balanced diet.",
  action: "Discuss a solidarity project", directory: "Explore the organizations",
  priorities: "Connecting healthcare stakeholders to help those who need it most",
  consultation: "Make healthcare more accessible",
  consultationLead: "Support administrative appointment coordination and connections with healthcare facilities, especially in areas where access to consultations is difficult.",
  prevention: "Support prevention",
  preventionLead: "Offer coordination tools to organizations working on screening, vaccination and access to treatment. Medical decisions remain with healthcare professionals.",
  nutrition: "Support lasting health",
  nutritionLead: "Encourage cooperation with nutrition and community health organizations to support healthy, balanced diets that meet local needs.",
  technology: "Technology in support of worldwide medical solidarity",
  technologyLead: "Appointment management, multilingual assistance and administrative follow-up: Careline aims to put its administrative and technical expertise at the service of teams on the ground, respecting their independence.",
  contact: "Associations, NGOs and foundations: let’s discuss your project",
  contactLead: "Are you developing a health solidarity initiative? Let’s discuss your coordination needs and the administrative and technical support Careline could provide.",
  illustration: "Generated illustrative images; they do not depict missions carried out by Careline or the organizations listed.",
  description: "Discover Careline’s humanitarian ambition: technology in support of accessible, inclusive and compassionate healthcare, without borders.",
};

export function humanitarianCopy(locale: string) {
  return locale === "fr" ? fr : en;
}