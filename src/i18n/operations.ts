import type { LocaleCode } from "./types";

export type OperationsCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  callCenterTitle: string;
  callCenterBody: string;
  itTitle: string;
  itBody: string;
  securityTitle: string;
  securityBody: string;
};

const baseOperationsCopy = {
  fr: {
    eyebrow: "Nos moyens",
    title: "Des outils de travail et de communication à la hauteur de nos engagements",
    lead: "Careline s'appuie sur un centre d'appels dédié et sur des capacités informatiques de pointe pour fluidifier chaque échange avec les patients et les partenaires.",
    callCenterTitle: "Centre d'appels Optiline Mada",
    callCenterBody:
      "Nos équipes de coordination travaillent depuis le centre d'appels Optiline Mada, notre plateforme de relation patient. Conseillers formés, suivi humain de chaque demande et disponibilité 24h/24, 7j/7 : chaque appel est traité avec attention, dans la langue du patient.",
    itTitle: "Capacités informatiques et logiciels d'IA avancés",
    itBody:
      "Careline utilise les logiciels d'intelligence artificielle les plus avancés au monde pour optimiser la prise de contact : qualification des demandes, orientation vers le bon professionnel, rappels et suivi des rendez-vous. La technologie accélère l'échange, l'humain reste au centre.",
    securityTitle: "Une relation sécurisée avec patients et partenaires",
    securityBody:
      "Nos outils sécurisent chaque étape de la relation : protection des données échangées, traçabilité des demandes et communications chiffrées avec les cabinets et établissements partenaires.",
  },
  en: {
    eyebrow: "Our capabilities",
    title: "Work and communication tools that match our commitments",
    lead: "Careline relies on a dedicated call centre and state-of-the-art IT capabilities to make every exchange with patients and partners smoother.",
    callCenterTitle: "Optiline Mada call centre",
    callCenterBody:
      "Our coordination teams work from the Optiline Mada call centre, our patient relations platform. Trained advisors, human follow-up on every request and 24/7 availability: every call is handled with care, in the patient's language.",
    itTitle: "IT capabilities and advanced AI software",
    itBody:
      "Careline uses the world's most advanced AI software to optimise contact: request qualification, routing to the right professional, appointment reminders and follow-up. Technology speeds up the exchange; people remain at the centre.",
    securityTitle: "A secure relationship with patients and partners",
    securityBody:
      "Our tools secure every step of the relationship: protection of exchanged data, request traceability and encrypted communications with partner practices and facilities.",
  },
  nl: {
    eyebrow: "Onze middelen",
    title: "Werk- en communicatietools die onze beloften waarmaken",
    lead: "Careline vertrouwt op een toegewijd callcenter en geavanceerde IT-capaciteiten om elke uitwisseling met patiënten en partners vloeiender te maken.",
    callCenterTitle: "Callcenter Optiline Mada",
    callCenterBody:
      "Onze coördinatieteams werken vanuit het callcenter Optiline Mada, ons platform voor patiëntrelaties. Opgeleide adviseurs, menselijke opvolging van elke aanvraag en 24/7 bereikbaarheid: elke oproep wordt met zorg behandeld, in de taal van de patiënt.",
    itTitle: "IT-capaciteiten en geavanceerde AI-software",
    itBody:
      "Careline gebruikt de meest geavanceerde AI-software ter wereld om het contact te optimaliseren: kwalificatie van aanvragen, doorverwijzing naar de juiste professional, herinneringen en opvolging van afspraken. Technologie versnelt de uitwisseling; de mens blijft centraal.",
    securityTitle: "Een beveiligde relatie met patiënten en partners",
    securityBody:
      "Onze tools beveiligen elke stap van de relatie: bescherming van uitgewisselde gegevens, traceerbaarheid van aanvragen en versleutelde communicatie met partnerpraktijken en -instellingen.",
  },
  de: {
    eyebrow: "Unsere Mittel",
    title: "Arbeits- und Kommunikationswerkzeuge, die unseren Versprechen gerecht werden",
    lead: "Careline stützt sich auf ein dediziertes Callcenter und modernste IT-Kapazitäten, um jeden Austausch mit Patienten und Partnern reibungsloser zu gestalten.",
    callCenterTitle: "Callcenter Optiline Mada",
    callCenterBody:
      "Unsere Koordinationsteams arbeiten vom Callcenter Optiline Mada aus, unserer Plattform für Patientenbeziehungen. Geschulte Berater, menschliche Nachverfolgung jeder Anfrage und 24/7-Erreichbarkeit: Jeder Anruf wird mit Sorgfalt behandelt, in der Sprache des Patienten.",
    itTitle: "IT-Kapazitäten und fortschrittliche KI-Software",
    itBody:
      "Careline nutzt die weltweit fortschrittlichste KI-Software, um den Kontakt zu optimieren: Qualifizierung von Anfragen, Weiterleitung an den richtigen Fachmann, Terminerinnerungen und Nachverfolgung. Technologie beschleunigt den Austausch; der Mensch bleibt im Mittelpunkt.",
    securityTitle: "Eine gesicherte Beziehung zu Patienten und Partnern",
    securityBody:
      "Unsere Werkzeuge sichern jeden Schritt der Beziehung: Schutz ausgetauschter Daten, Nachverfolgbarkeit von Anfragen und verschlüsselte Kommunikation mit Partnerpraxen und -einrichtungen.",
  },
  es: {
    eyebrow: "Nuestros medios",
    title: "Herramientas de trabajo y comunicación a la altura de nuestros compromisos",
    lead: "Careline se apoya en un centro de llamadas dedicado y en capacidades informáticas de vanguardia para hacer más fluido cada intercambio con pacientes y socios.",
    callCenterTitle: "Centro de llamadas Optiline Mada",
    callCenterBody:
      "Nuestros equipos de coordinación trabajan desde el centro de llamadas Optiline Mada, nuestra plataforma de relación con el paciente. Asesores formados, seguimiento humano de cada solicitud y disponibilidad 24/7: cada llamada se atiende con cuidado, en el idioma del paciente.",
    itTitle: "Capacidades informáticas y software de IA avanzado",
    itBody:
      "Careline utiliza los softwares de inteligencia artificial más avanzados del mundo para optimizar el contacto: calificación de solicitudes, orientación hacia el profesional adecuado, recordatorios y seguimiento de citas. La tecnología acelera el intercambio; la persona sigue en el centro.",
    securityTitle: "Una relación segura con pacientes y socios",
    securityBody:
      "Nuestras herramientas protegen cada etapa de la relación: protección de los datos intercambiados, trazabilidad de las solicitudes y comunicaciones cifradas con los consultorios y establecimientos socios.",
  },
  it: {
    eyebrow: "I nostri mezzi",
    title: "Strumenti di lavoro e comunicazione all'altezza dei nostri impegni",
    lead: "Careline si affida a un call center dedicato e a capacità informatiche all'avanguardia per rendere più fluido ogni scambio con pazienti e partner.",
    callCenterTitle: "Call center Optiline Mada",
    callCenterBody:
      "I nostri team di coordinamento lavorano dal call center Optiline Mada, la nostra piattaforma di relazione con il paziente. Consulenti formati, follow-up umano di ogni richiesta e disponibilità 24/7: ogni chiamata è gestita con attenzione, nella lingua del paziente.",
    itTitle: "Capacità informatiche e software di IA avanzati",
    itBody:
      "Careline utilizza i software di intelligenza artificiale più avanzati al mondo per ottimizzare il contatto: qualificazione delle richieste, indirizzamento verso il professionista giusto, promemoria e follow-up degli appuntamenti. La tecnologia accelera lo scambio; la persona resta al centro.",
    securityTitle: "Una relazione sicura con pazienti e partner",
    securityBody:
      "I nostri strumenti proteggono ogni fase della relazione: protezione dei dati scambiati, tracciabilità delle richieste e comunicazioni cifrate con studi e strutture partner.",
  },
  pt: {
    eyebrow: "Os nossos meios",
    title: "Ferramentas de trabalho e comunicação à altura dos nossos compromissos",
    lead: "A Careline apoia-se num centro de chamadas dedicado e em capacidades informáticas de ponta para tornar mais fluido cada intercâmbio com pacientes e parceiros.",
    callCenterTitle: "Centro de chamadas Optiline Mada",
    callCenterBody:
      "As nossas equipas de coordenação trabalham a partir do centro de chamadas Optiline Mada, a nossa plataforma de relação com o paciente. Conselheiros formados, acompanhamento humano de cada pedido e disponibilidade 24/7: cada chamada é tratada com atenção, na língua do paciente.",
    itTitle: "Capacidades informáticas e software de IA avançado",
    itBody:
      "A Careline utiliza os softwares de inteligência artificial mais avançados do mundo para otimizar o contacto: qualificação de pedidos, encaminhamento para o profissional certo, lembretes e acompanhamento de consultas. A tecnologia acelera o intercâmbio; a pessoa permanece no centro.",
    securityTitle: "Uma relação segura com pacientes e parceiros",
    securityBody:
      "As nossas ferramentas protegem cada etapa da relação: proteção dos dados trocados, rastreabilidade dos pedidos e comunicações cifradas com consultórios e estabelecimentos parceiros.",
  },
  ar: {
    eyebrow: "وسائلنا",
    title: "أدوات عمل وتواصل في مستوى التزاماتنا",
    lead: "تعتمد كيرلاين على مركز اتصال مخصص وقدرات معلوماتية متطورة لجعل كل تبادل مع المرضى والشركاء أكثر سلاسة.",
    callCenterTitle: "مركز الاتصال Optiline Mada",
    callCenterBody:
      "تعمل فرق التنسيق لدينا من مركز الاتصال Optiline Mada، منصتنا لعلاقات المرضى. مستشارون مدرّبون، ومتابعة بشرية لكل طلب، وتوافر على مدار الساعة طوال أيام الأسبوع: تُعالج كل مكالمة بعناية، بلغة المريض.",
    itTitle: "قدرات معلوماتية وبرمجيات ذكاء اصطناعي متقدمة",
    itBody:
      "تستخدم كيرلاين أكثر برمجيات الذكاء الاصطناعي تقدماً في العالم لتحسين التواصل: تأهيل الطلبات، والتوجيه نحو المختص المناسب، والتذكير بالمواعيد ومتابعتها. التكنولوجيا تسرّع التبادل، والإنسان يبقى في المركز.",
    securityTitle: "علاقة آمنة مع المرضى والشركاء",
    securityBody:
      "تؤمّن أدواتنا كل مرحلة من العلاقة: حماية البيانات المتبادلة، وتتبّع الطلبات، واتصالات مشفّرة مع العيادات والمؤسسات الشريكة.",
  },
  zh: {
    eyebrow: "我们的能力",
    title: "与我们承诺相匹配的工作与沟通工具",
    lead: "Careline 依托专属呼叫中心和尖端信息技术能力，让与患者及合作伙伴的每一次沟通更加顺畅。",
    callCenterTitle: "Optiline Mada 呼叫中心",
    callCenterBody:
      "我们的协调团队在 Optiline Mada 呼叫中心——我们的患者关系平台——工作。经过培训的顾问、对每项请求的人工跟进以及全天候 24/7 服务：每一通电话都以患者的语言得到悉心处理。",
    itTitle: "信息技术能力与先进 AI 软件",
    itBody:
      "Careline 使用全球最先进的 AI 软件来优化沟通：请求筛选、转介至合适的专业人士、预约提醒与跟进。技术加速交流，人始终是核心。",
    securityTitle: "与患者和合作伙伴的安全关系",
    securityBody:
      "我们的工具保障关系的每个环节：交换数据的保护、请求的可追溯性，以及与合作诊所和机构的加密通信。",
  },
  ru: {
    eyebrow: "Наши возможности",
    title: "Рабочие и коммуникационные инструменты на уровне наших обязательств",
    lead: "Careline опирается на выделенный колл-центр и передовые IT-возможности, чтобы сделать каждый обмен с пациентами и партнёрами более плавным.",
    callCenterTitle: "Колл-центр Optiline Mada",
    callCenterBody:
      "Наши координационные команды работают из колл-центра Optiline Mada — нашей платформы взаимоотношений с пациентами. Обученные консультанты, человеческое сопровождение каждого запроса и доступность 24/7: каждый звонок обрабатывается с вниманием, на языке пациента.",
    itTitle: "IT-возможности и передовое ПО с ИИ",
    itBody:
      "Careline использует самое передовое в мире ПО с искусственным интеллектом для оптимизации контакта: квалификация запросов, направление к нужному специалисту, напоминания и сопровождение приёмов. Технологии ускоряют обмен, человек остаётся в центре.",
    securityTitle: "Безопасные отношения с пациентами и партнёрами",
    securityBody:
      "Наши инструменты защищают каждый этап отношений: защита передаваемых данных, отслеживаемость запросов и шифрованная связь с партнёрскими клиниками и учреждениями.",
  },
};

// Newer locales fall back to English until fully translated.
export const operationsCopy: Record<LocaleCode, OperationsCopy> = {
  ...baseOperationsCopy,
  ja: baseOperationsCopy.en,
  ko: baseOperationsCopy.en,
  hi: baseOperationsCopy.en,
  tr: baseOperationsCopy.en,
  pl: baseOperationsCopy.en,
  sv: baseOperationsCopy.en,
  uk: baseOperationsCopy.en,
  id: baseOperationsCopy.en,
};
