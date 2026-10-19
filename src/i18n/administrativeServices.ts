import type { LocaleCode } from "./types";

const fr = {
  eyebrow: "Nos services administratifs",
  title: "Votre secrétariat administratif, sans contrainte",
  lead: "Careline gère la prise de rendez-vous, les confirmations et le suivi administratif de vos patients, avec des équipes formées et des outils traçables. Vous gardez la maîtrise de votre agenda et de votre pratique.",
  cta: "Devenir cabinet partenaire",
  freeTitle: "Inscription gratuite pour les praticiens",
  free: "Toute inscription est gratuite. Aucun abonnement, aucun droit d’entrée.",
  noShows: "Des rendez-vous mieux préparés, des absences mieux anticipées",
  noShowsLead: "Confirmations et rappels pour aider à limiter les rendez-vous non honorés, demandes clarifiées et informations pratiques transmises en amont : votre équipe dispose d’un suivi administratif structuré, y compris pour les rendez-vous préopératoires. Les décisions médicales restent exclusivement les vôtres.",
  servicesTitle: "Nos services",
  cards: [
    {
      title: "Gestion des rendez-vous",
      items: [
        "Réception et émission d’appels, SMS, e-mails et messages",
        "Plusieurs tentatives de contact pour chaque demande",
        "Prise, modification et annulation des rendez-vous dans votre agenda (Doctolib, Doctena, OneDoc…), selon les accès et connexions convenus avec votre cabinet",
        "Confirmation la veille et rappel le jour même",
        "Envoi des informations pratiques : adresse, accès, documents à apporter",
        "Gestion des absences, reports et annulations, créneaux libérés remis à disposition",
        "Horaires étendus et numéros locaux dans votre pays",
      ],
    },
    {
      title: "Technologie",
      items: [
        "CRM développé et maintenu par nos équipes",
        "Automatisations : SMS et e-mails à chaque étape, rappels, assistant vocal",
        "Intégration avec la téléphonie et les agendas en ligne, selon les connexions convenues",
        "Appels enregistrés pour le contrôle qualité, après information des interlocuteurs et selon les règles applicables",
      ],
    },
    {
      title: "Traçabilité et conformité",
      items: [
        "Chaque action horodatée et rattachée à son auteur, historique non modifiable",
        "Une prestation justifiable à tout moment en cas de contrôle",
        "Aucune donnée médicale sur nos outils",
        "Délégué à la protection des données, hébergement en Europe",
        "Accès nominatifs, chiffrement, accord de confidentialité signé par chaque collaborateur",
        "Respect des règles de démarchage et des oppositions",
      ],
    },
    {
      title: "Des équipes dédiées",
      items: [
        "Collaborateurs formés et validés avant toute prise d’appel",
        "Formation continue",
        "Encadrement par des responsables d’équipe et un directeur de plateau",
        "Écoute et contrôle qualité des appels",
        "Personnel dédié à la saisie et à la confirmation des rendez-vous",
        "Continuité de service assurée",
      ],
    },
    {
      title: "Un accompagnement personnalisé",
      items: [
        "Un interlocuteur dédié, en lien direct avec votre secrétariat",
        "Formation de votre équipe aux outils et support",
        "Relevé d’activité mensuel et tableaux de bord",
        "Satisfaction des patients suivie et réclamations traitées",
      ],
    },
  ],
  independenceTitle: "Votre indépendance garantie",
  independence: [
    "Vous gardez la maîtrise de vos décisions, de vos tarifs et de votre organisation",
    "Aucune exclusivité territoriale",
    "Le patient reste libre de choisir son praticien",
    "Un cadre contractuel transparent, conforme aux règles déontologiques de votre profession",
  ],
  stepsTitle: "Comment ça marche",
  steps: [
    "Signature du contrat",
    "Ouverture de vos accès au CRM",
    "Connexion à votre agenda en ligne",
    "Création de vos canaux de communication avec nos équipes",
    "Vidéo de prise en main et documents d’accueil",
    "Phase de test",
    "Démarrage : vos rendez-vous sont gérés au quotidien",
    "Relevé d’activité mensuel",
  ],
  formTitle: "Parlons de votre cabinet",
  formLead: "Présentez-nous votre organisation et vos besoins de secrétariat administratif.",
  professionalTitle: "Un accompagnement administratif pour votre cabinet",
  professionalLead: "Careline accompagne votre secrétariat dans le suivi des demandes et la gestion de votre agenda. Des rendez-vous préparés avec soin, sans intervenir dans vos décisions médicales.",
  benefits: [
    { title: "Limiter les rendez-vous non honorés", description: "Confirmations la veille et rappels le jour même pour aider à prévenir les absences et anticiper les reports." },
    { title: "Des demandes clarifiées", description: "Coordonnées, disponibilités et préférences de rendez-vous structurées, sans collecte de données médicales." },
    { title: "Des rendez-vous mieux préparés", description: "Informations pratiques et documents à apporter communiqués en amont, y compris pour les rendez-vous préopératoires." },
    { title: "Du temps pour votre pratique", description: "Prise, modification, annulation et confirmation des rendez-vous suivies par nos équipes." },
    { title: "Votre indépendance préservée", description: "Vous gardez la maîtrise de votre agenda, de vos décisions et de votre organisation, sans exclusivité territoriale." },
    { title: "Un interlocuteur dédié", description: "Un contact en lien direct avec votre secrétariat, un support continu et un relevé d’activité mensuel." },
  ],
  summary: [
    ["Gestion des rendez-vous", "Prise, modification et annulation dans votre agenda."],
    ["Confirmations et rappels", "Confirmation la veille et rappel le jour même pour aider à limiter les absences."],
    ["Suivi administratif", "Demandes clarifiées et informations pratiques transmises avant le rendez-vous."],
    ["Technologie", "CRM et automatisations maintenus par nos équipes."],
    ["Équipes dédiées", "Collaborateurs formés, encadrés et accompagnés en continu."],
    ["Accompagnement personnalisé", "Un interlocuteur en lien direct avec votre secrétariat."],
    ["Communication internationale", "Horaires étendus et canaux de communication adaptés à votre cabinet."],
    ["Continuité de service", "Suivi des demandes, reports et créneaux libérés."],
    ["Traçabilité et conformité", "Actions horodatées, accès nominatifs et confidentialité."],
    ["Votre indépendance", "Votre agenda, vos décisions et le libre choix du patient restent préservés."],
  ],
};

const en: typeof fr = {
  eyebrow: "Administrative services",
  title: "Your administrative secretariat, without constraints",
  lead: "Careline manages appointment booking, confirmations and administrative follow-up for your patients, with trained teams and traceable tools. You retain control of your schedule and your practice.",
  cta: "Become a partner practice",
  freeTitle: "Free registration for practitioners",
  free: "Registration is free. No subscription, no entry fee.",
  noShows: "Better-prepared appointments, better-anticipated absences",
  noShowsLead: "Confirmations and reminders to help limit missed appointments, clarified requests and practical information shared in advance give your team a structured administrative follow-up, including for preoperative appointments. Medical decisions remain exclusively yours.",
  servicesTitle: "Our services",
  cards: [
    { title: "Appointment management", items: ["Incoming and outgoing calls, SMS, emails and messages", "Several contact attempts for each request", "Booking, changing and cancelling appointments in your calendar (Doctolib, Doctena, OneDoc…), subject to access and connections agreed with your practice", "Confirmation the day before and reminder on the day", "Practical information: address, access and documents to bring", "Management of absences, rescheduling and cancellations, with released slots made available again", "Extended hours and local numbers in your country"] },
    { title: "Technology", items: ["CRM developed and maintained by our teams", "Automation: SMS and emails at each stage, reminders and voice assistant", "Integration with telephony and online calendars, subject to agreed connections", "Calls recorded for quality control, with prior notice to callers and in accordance with applicable rules"] },
    { title: "Traceability and compliance", items: ["Every action timestamped and attributed to its author, with an unalterable history", "A service that can be substantiated at any time during an audit", "No medical data in our tools", "Data protection officer and hosting in Europe", "Individual access, encryption and a confidentiality agreement signed by every team member", "Respect for solicitation rules and opt-outs"] },
    { title: "Dedicated teams", items: ["Team members trained and approved before handling calls", "Continuous training", "Supervision by team leaders and a call-centre director", "Call monitoring and quality control", "Staff dedicated to appointment entry and confirmation", "Service continuity ensured"] },
    { title: "Personalised support", items: ["A dedicated contact working directly with your secretariat", "Tool training for your team and support", "Monthly activity reports and dashboards", "Patient satisfaction monitored and complaints handled"] },
  ],
  independenceTitle: "Your independence guaranteed",
  independence: ["You retain control of your decisions, fees and organisation", "No territorial exclusivity", "Patients remain free to choose their practitioner", "A transparent contractual framework consistent with your profession’s ethical rules"],
  stepsTitle: "How it works",
  steps: ["Contract signing", "CRM access opened", "Connection to your online calendar", "Communication channels set up with our teams", "Getting-started video and welcome documents", "Test phase", "Launch: your appointments managed every day", "Monthly activity report"],
  formTitle: "Let’s talk about your practice",
  formLead: "Tell us about your organisation and administrative secretariat needs.",
  professionalTitle: "Administrative support for your practice",
  professionalLead: "Careline supports your secretariat with request follow-up and calendar management. Carefully prepared appointments, without intervening in your medical decisions.",
  benefits: [
    { title: "Help limit missed appointments", description: "Day-before confirmations and same-day reminders help prevent absences and anticipate rescheduling." },
    { title: "Clarified requests", description: "Structured contact details, availability and appointment preferences, without collecting medical data." },
    { title: "Better-prepared appointments", description: "Practical information and documents to bring shared in advance, including for preoperative appointments." },
    { title: "Time for your practice", description: "Booking, changes, cancellations and confirmations followed up by our teams." },
    { title: "Your independence preserved", description: "You retain control of your calendar, decisions and organisation, without territorial exclusivity." },
    { title: "A dedicated contact", description: "A contact working directly with your secretariat, ongoing support and a monthly activity report." },
  ],
  summary: [
    ["Appointment management", "Booking, changes and cancellations in your calendar."],
    ["Confirmations and reminders", "Day-before confirmations and same-day reminders to help limit absences."],
    ["Administrative follow-up", "Clarified requests and practical information shared before appointments."],
    ["Technology", "CRM and automation maintained by our teams."],
    ["Dedicated teams", "Trained, supervised staff with ongoing support."],
    ["Personalised support", "A contact working directly with your secretariat."],
    ["International communication", "Extended hours and communication channels suited to your practice."],
    ["Service continuity", "Follow-up of requests, rescheduling and released slots."],
    ["Traceability and compliance", "Timestamped actions, individual access and confidentiality."],
    ["Your independence", "Your calendar, decisions and the patient’s freedom of choice are preserved."],
  ],
};

export function administrativeServicesCopy(locale: LocaleCode) {
  return locale === "fr" ? fr : en;
}

/** Shared overrides keep homepage summaries and practitioner pages aligned. */
export function administrativeTranslation(locale: LocaleCode, key: string): string | undefined {
  const c = administrativeServicesCopy(locale);
  const values: Record<string, string> = {
    "professionals.title": c.professionalTitle,
    "professionals.lead": c.professionalLead,
    "professionals.cta": c.cta,
    "services.title": c.servicesTitle,
    "services.lead": c.lead,
    "services.eyebrow": c.eyebrow,
    "head.services.title": `${c.title} | Careline`,
    "head.services.ogTitle": `${c.title} | Careline`,
    "head.services.description": c.lead,
    "head.services.ogDescription": c.lead,
    "head.professionals.title": `${c.professionalTitle} | Careline`,
    "head.professionals.ogTitle": `${c.professionalTitle} | Careline`,
    "head.professionals.description": `${c.professionalLead} ${c.free}`,
    "head.professionals.ogDescription": `${c.professionalLead} ${c.free}`,
  };
  c.benefits.forEach((benefit, i) => {
    values[`professionals.b${i + 1}t`] = benefit.title;
    values[`professionals.b${i + 1}d`] = benefit.description;
  });
  c.summary.forEach(([title, description], i) => {
    if (title && description) {
      values[`services.i${i + 1}t`] = title;
      values[`services.i${i + 1}d`] = description;
    }
  });
  return values[key];
}