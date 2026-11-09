import type { FigureKey } from "@/config/figures";

type Copy = {
  language: string;
  press: string; pressDescription: string; providers: string; providersDescription: string;
  about: string; aboutBody: string; figuresTitle: string; figuresNote: string;
  labels: Record<FigureKey, string>; contact: string; contactBody: string;
  scope: string; scopeBody: string; name: string; purpose: string; data: string; activation: string;
  services: Record<string, [string, string, string]>;
  contracts: string; contractsBody: string; rights: string;
};

const fr: Copy = {
  language: "fr", press: "Presse et informations Careline",
  pressDescription: "Présentation de Careline, repères publiés et contact presse : services administratifs et techniques pour les professionnels de santé.",
  providers: "Registre des prestataires techniques",
  providersDescription: "Services techniques utilisés par le site Careline, finalités, catégories de données et conditions d’activation.",
  about: "Careline en bref",
  aboutBody: "Careline accompagne les professionnels de santé dans la gestion administrative des demandes et des rendez-vous. Les praticiens conservent leur indépendance médicale et leurs outils habituels. Careline ne propose pas de téléconsultation et le site n’est pas destiné à recevoir des dossiers médicaux.",
  figuresTitle: "Repères publiés", figuresNote: "Chiffres de présentation validés pour publication par Careline, et non un audit indépendant. Les volumes de professionnels et de rendez-vous se rapportent à l’écosystème des logiciels présentés ; ils ne représentent pas le nombre de clients Careline ni de rendez-vous directement traités par Careline.",
  labels: { professionals: "Professionnels dans l’écosystème logiciel", countries: "Pays représentés", specialties: "Spécialités", languages: "Langues du site", appointments: "RDV synchronisés par an dans l’écosystème logiciel", availability: "Disponibilité annoncée", softwarePartners: "Logiciels présentés" },
  contact: "Contact presse", contactBody: "Pour une interview, une demande d’information ou l’utilisation du logo officiel, contactez notre équipe.",
  scope: "Périmètre de ce registre", scopeBody: "Cette page décrit les services identifiables dans le site. Elle ne vaut pas confirmation d’un contrat de sous-traitance signé. Les logiciels et associations présentés ailleurs ne sont pas automatiquement des sous-traitants de Careline.",
  name: "Service", purpose: "Finalité", data: "Données concernées", activation: "Activation",
  services: {
    lovable: ["Hébergement du site, diffusion des images et service d’envoi des formulaires par email.", "Données techniques de connexion ; coordonnées et message saisis lors d’un envoi de formulaire.", "Site et images à la consultation ; email lors de l’envoi d’un formulaire, sous réserve de validation du domaine d’envoi."],
    fonts: ["Chargement des polices de caractères.", "Adresse IP et informations techniques de la requête du navigateur.", "Lors de la consultation du site."],
    youtube: ["Lecture de vidéos d’information via le lecteur à confidentialité renforcée.", "Adresse IP et informations techniques ; données de lecture selon les règles de YouTube.", "Uniquement après un clic explicite sur le bouton de lecture."],
    analytics: ["Gestion de balises de mesure d’audience, si un conteneur est configuré.", "Événements de navigation selon les balises effectivement configurées ; aucun contenu des formulaires.", "Chargement soumis au consentement et à la configuration d’un identifiant de conteneur."],
  },
  contracts: "Informations contractuelles", contractsBody: "Les entités contractantes exactes, lieux de traitement, éventuels transferts internationaux, garanties contractuelles et durées de conservation restent à confirmer dans les contrats de Careline. Ces informations ne sont pas déduites du seul nom d’un service. Vous pouvez demander des précisions à notre équipe.",
  rights: "Confidentialité et droits",
};
const en: Copy = {
  language: "en", press: "Careline press and company information", pressDescription: "Careline company overview, published figures and press contact for administrative and technical healthcare services.",
  providers: "Technical service provider register", providersDescription: "Technical services used by Careline, their purposes, data categories and activation conditions.",
  about: "About Careline", aboutBody: "Careline supports healthcare professionals with the administrative handling of requests and appointments. Practitioners retain their clinical independence and existing tools. Careline does not provide teleconsultations and this website is not intended to receive medical records.",
  figuresTitle: "Published figures", figuresNote: "Presentation figures approved for publication by Careline, not independently audited. Professional and appointment volumes refer to the ecosystem of the software presented, not to Careline clients or appointments directly handled by Careline.",
  labels: { professionals: "Professionals in the software ecosystem", countries: "Countries represented", specialties: "Specialties", languages: "Website languages", appointments: "Appointments synchronized annually in the software ecosystem", availability: "Announced availability", softwarePartners: "Software products presented" },
  contact: "Press contact", contactBody: "Contact our team for interviews, information requests or use of the official logo.",
  scope: "Scope of this register", scopeBody: "This page describes services identifiable in the website. It does not confirm signed data processing agreements. Software vendors and organizations listed elsewhere are not automatically Careline processors.",
  name: "Service", purpose: "Purpose", data: "Data involved", activation: "Activation",
  services: {
    lovable: ["Website hosting, image delivery and form notification emails.", "Technical connection data; contact details and messages submitted through forms.", "Website and images on visits; email on form submission, subject to sender-domain verification."],
    fonts: ["Loading typefaces.", "IP address and technical browser request information.", "When visiting the website."],
    youtube: ["Educational videos using the privacy-enhanced player.", "IP address, technical information and playback data under YouTube’s policies.", "Only after an explicit click on the play button."],
    analytics: ["Audience measurement tags, if a container is configured.", "Navigation events according to configured tags; no form contents.", "Subject to consent and configuration of a container identifier."],
  },
  contracts: "Contractual information", contractsBody: "Exact contracting entities, processing locations, international transfers, contractual safeguards and retention periods remain subject to confirmation in Careline’s contracts. They cannot be inferred from a service name alone. Contact our team for further information.", rights: "Privacy and your rights",
};
const he: Copy = {
  language: "he", press: "מידע לעיתונות על Careline", pressDescription: "היכרות עם Careline, נתונים שפורסמו ויצירת קשר לעיתונות בנושא שירותים מנהליים וטכניים לאנשי מקצוע בתחום הבריאות.",
  providers: "רשימת ספקי שירותים טכניים", providersDescription: "השירותים הטכניים באתר Careline, מטרותיהם, סוגי המידע ותנאי הפעלתם.",
  about: "על Careline", aboutBody: "Careline מסייעת לאנשי מקצוע בתחום הבריאות בטיפול המנהלי בפניות ובתורים. המטפלים שומרים על עצמאותם הרפואית ועל כלי העבודה שלהם. Careline אינה מציעה ייעוץ רפואי מרחוק והאתר אינו מיועד לקבלת תיקים רפואיים.",
  figuresTitle: "נתונים שפורסמו", figuresNote: "נתוני הצגה שאושרו לפרסום על ידי Careline, ללא ביקורת עצמאית. היקפי אנשי המקצוע והתורים מתייחסים למערכת התוכנות המוצגות, ולא ללקוחות Careline או לתורים שטופלו ישירות על ידה.",
  labels: { professionals: "אנשי מקצוע במערכת התוכנות", countries: "מדינות מיוצגות", specialties: "התמחויות", languages: "שפות האתר", appointments: "תורים מסונכרנים בשנה במערכת התוכנות", availability: "זמינות מוצהרת", softwarePartners: "תוכנות מוצגות" },
  contact: "יצירת קשר לעיתונות", contactBody: "לראיונות, בקשות מידע או שימוש בלוגו הרשמי, פנו לצוות שלנו.",
  scope: "היקף הרשימה", scopeBody: "עמוד זה מתאר שירותים שניתן לזהות באתר. הוא אינו מאשר שנחתמו הסכמי עיבוד מידע. ספקי תוכנה וארגונים המופיעים בעמודים אחרים אינם בהכרח מעבדי מידע עבור Careline.",
  name: "שירות", purpose: "מטרה", data: "מידע מעובד", activation: "הפעלה",
  services: {
    lovable: ["אירוח האתר, הצגת תמונות ושליחת פניות מהטפסים בדואר אלקטרוני.", "נתוני חיבור טכניים; פרטי קשר והודעות שנשלחו בטפסים.", "האתר והתמונות בעת ביקור; דואר אלקטרוני בעת שליחת טופס, בכפוף לאימות דומיין השליחה."],
    fonts: ["טעינת גופנים.", "כתובת IP ונתונים טכניים של בקשת הדפדפן.", "בעת ביקור באתר."],
    youtube: ["סרטוני מידע באמצעות נגן עם פרטיות מוגברת.", "כתובת IP, נתונים טכניים ונתוני צפייה לפי מדיניות YouTube.", "רק לאחר לחיצה מפורשת על כפתור הניגון."],
    analytics: ["ניהול תגיות למדידת שימוש, אם הוגדר מזהה מערכת.", "אירועי ניווט לפי התגיות שהוגדרו; ללא תוכן הטפסים.", "בכפוף להסכמה ולהגדרת מזהה מערכת."],
  },
  contracts: "מידע חוזי", contractsBody: "הישויות החוזיות המדויקות, מקומות עיבוד המידע, העברות בין־לאומיות, הגנות חוזיות ותקופות שמירה טעונים אישור בחוזי Careline. אין להסיק פרטים אלה משם השירות בלבד. ניתן לפנות לצוות לקבלת פרטים.", rights: "פרטיות וזכויות",
};

export function transparencyCopy(locale: string): Copy {
  return locale === "fr" ? fr : locale === "he" ? he : en;
}