import type { LocaleCode } from "./types";

export type SecurityFocusCopy = {
  badge: string;
  claim: string;
  claimDetail: string;
  gdprTitle: string;
  gdprBody: string;
  standardTitle: string;
  standardBody: string;
  imageAlt: string;
};

export const securityFocusCopy: Record<LocaleCode, SecurityFocusCopy> = {
  fr: {
    badge: "L'essentiel",
    claim: "Aucune donnée de santé n'est demandée, reçue ni stockée par Careline.",
    claimDetail:
      "Nous recueillons uniquement vos coordonnées, votre ville, le type de praticien recherché et vos préférences de rendez-vous. Ni diagnostic, ni ordonnance, ni dossier médical ne sont demandés, transmis ou conservés.",
    gdprTitle: "RGPD et exigences internationales équivalentes",
    gdprBody:
      "Careline applique le RGPD (règlement européen) et les exigences de protection des données équivalentes dans chaque pays où il opère : minimisation des données, finalité claire, durée de conservation limitée et droits que chacun peut exercer sans difficulté.",
    standardTitle: "Un niveau de sécurité aligné sur les standards internationaux les plus exigeants",
    standardBody:
      "Les informations sont traitées selon les exigences de sécurité les plus strictes applicables aux données de santé : accès limité par rôle, chiffrement en transit, obligations de confidentialité et prestataires sélectionnés avec soin.",
    imageAlt:
      "Un professionnel de santé travaille sur un ordinateur portable, avec un cadenas et un filtre de confidentialité posés sur le bureau.",
  },
  en: {
    badge: "The short version",
    claim: "Careline never asks for, receives or stores health data.",
    claimDetail:
      "We collect only your contact details, your city, the type of practitioner you are looking for and your scheduling preferences. No diagnosis, prescription or medical record is requested, shared or kept.",
    gdprTitle: "GDPR and equivalent international requirements",
    gdprBody:
      "Careline applies the GDPR (European regulation) and the equivalent data-protection requirements in every country it operates in: data minimisation, a clear purpose, limited retention and rights that people can exercise without difficulty.",
    standardTitle: "Security aligned with the strictest international standards",
    standardBody:
      "Information is handled under the strictest security requirements applied to health data: role-based access, encryption in transit, confidentiality obligations and carefully selected service providers.",
    imageAlt:
      "A healthcare professional types on a laptop, with a padlock and a privacy screen on the desk beside it.",
  },
  nl: {
    badge: "Het korte verhaal",
    claim: "Careline vraagt nooit gezondheidsgegevens op en bewaart ze niet.",
    claimDetail:
      "We verzamelen alleen uw contactgegevens, uw stad, het type zorgverlener dat u zoekt en uw voorkeuren voor de afspraak. Er wordt geen diagnose, recept of medisch dossier opgevraagd, gedeeld of bewaard.",
    gdprTitle: "AVG en equivalente internationale eisen",
    gdprBody:
      "Careline past de AVG (Europese verordening) toe en de equivalente eisen voor gegevensbescherming in elk land waarin het actief is: gegevensminimalisatie, een duidelijk doel, een beperkte bewaartermijn en rechten die mensen zonder moeite kunnen uitoefenen.",
    standardTitle: "Beveiliging afgestemd op de strengste internationale standaarden",
    standardBody:
      "Informatie wordt behandeld volgens de strengste beveiligingseisen die voor gezondheidsgegevens gelden: toegang per rol, versleuteling tijdens transport, geheimhoudingsplicht en zorgvuldig geselecteerde dienstverleners.",
    imageAlt:
      "Een zorgverlener typt op een laptop, met een hangslot en een privacyfilter naast de computer op het bureau.",
  },
  de: {
    badge: "Das Wichtigste in Kürze",
    claim: "Careline fragt keine Gesundheitsdaten an und speichert sie auch nicht.",
    claimDetail:
      "Wir erfassen ausschließlich Ihre Kontaktdaten, Ihre Stadt, die Art der gesuchten Fachperson und Ihre Terminvorlieben. Es wird keine Diagnose, kein Rezept und keine Krankenakte angefordert, weitergegeben oder aufbewahrt.",
    gdprTitle: "DSGVO und gleichwertige internationale Vorgaben",
    gdprBody:
      "Careline wendet die DSGVO (europäische Verordnung) sowie die gleichwertigen Anforderungen an den Datenschutz in jedem Land an, in dem es tätig ist: Datenminimierung, klarer Zweck, begrenzte Speicherdauer und Rechte, die Personen ohne Aufwand ausüben können.",
    standardTitle: "Sicherheit nach den strengsten internationalen Standards",
    standardBody:
      "Informationen werden nach den strengsten Sicherheitsanforderungen für Gesundheitsdaten verarbeitet: rollenbasierter Zugriff, Verschlüsselung bei der Übertragung, Geheimhaltungspflichten und sorgfältig ausgewählte Dienstleister.",
    imageAlt:
      "Eine Fachkraft tippt auf einem Laptop, neben dem Gerät liegen ein Schloss und eine Sichtschutzfolie auf dem Schreibtisch.",
  },
  es: {
    badge: "Lo esencial",
    claim: "Careline nunca pide, recibe ni guarda datos de salud.",
    claimDetail:
      "Solo recogemos sus datos de contacto, su ciudad, el tipo de profesional que busca y sus preferencias de cita. No se solicita, comparte ni conserva ningún diagnóstico, receta o historial médico.",
    gdprTitle: "RGPD y requisitos internacionales equivalentes",
    gdprBody:
      "Careline aplica el RGPD (reglamento europeo) y los requisitos equivalentes de protección de datos en cada país en el que opera: minimización de datos, finalidad clara, conservación limitada y derechos que las personas pueden ejercer sin dificultad.",
    standardTitle: "Seguridad alineada con los estándares internacionales más estrictos",
    standardBody:
      "La información se trata conforme a los requisitos de seguridad más exigentes aplicables a los datos de salud: acceso por roles, cifrado en tránsito, obligaciones de confidencialidad y proveedores seleccionados con criterio.",
    imageAlt:
      "Un profesional sanitario escribe en un portátil, con un candado y un filtro de privacidad junto al equipo sobre el escritorio.",
  },
  it: {
    badge: "L'essenziale",
    claim: "Careline non richiede, non riceve e non conserva dati sulla salute.",
    claimDetail:
      "Raccogliamo soltanto i Suoi recapiti, la Sua città, la tipologia di professionista cercato e le Sue preferenze di appuntamento. Nessuna diagnosi, prescrizione o cartella clinica viene richiesta, condivisa o conservata.",
    gdprTitle: "GDPR e requisiti internazionali equivalenti",
    gdprBody:
      "Careline applica il GDPR (regolamento europeo) e i requisiti equivalenti di protezione dei dati in ogni Paese in cui opera: minimizzazione dei dati, finalità chiara, conservazione limitata e diritti che le persone possono esercitare senza difficoltà.",
    standardTitle: "Sicurezza allineata agli standard internazionali più rigorosi",
    standardBody:
      "Le informazioni sono trattate secondo i requisiti di sicurezza più severi applicabili ai dati sanitari: accesso per ruoli, cifratura in transito, obblighi di riservatezza e fornitori selezionati con attenzione.",
    imageAlt:
      "Un professionista sanitario digita su un laptop, con un lucchetto e un filtro privacy accanto al computer sulla scrivania.",
  },
  pt: {
    badge: "O essencial",
    claim: "A Careline nunca pede, recebe nem armazena dados de saúde.",
    claimDetail:
      "Recolhemos apenas os seus contactos, a sua cidade, o tipo de profissional que procura e as suas preferências de agendamento. Nenhum diagnóstico, receita ou processo clínico é solicitado, partilhado ou conservado.",
    gdprTitle: "RGPD e requisitos internacionais equivalentes",
    gdprBody:
      "A Careline aplica o RGPD (regulamento europeu) e os requisitos equivalentes de proteção de dados em cada país onde opera: minimização dos dados, finalidade clara, conservação limitada e direitos que as pessoas podem exercer sem dificuldade.",
    standardTitle: "Segurança alinhada com os padrões internacionais mais rigorosos",
    standardBody:
      "As informações são tratadas segundo os requisitos de segurança mais exigentes aplicáveis aos dados de saúde: acesso por funções, cifra em trânsito, obrigações de confidencialidade e fornecedores selecionados com cuidado.",
    imageAlt:
      "Um profissional de saúde digita num portátil, com um cadeado e um filtro de privacidade ao lado do computador, sobre a secretária.",
  },
  ar: {
    badge: "الخلاصة",
    claim: "لا تطلب Careline أي بيانات صحية ولا تستقبلها ولا تخزّنها.",
    claimDetail:
      "نجمع فقط بيانات التواصل الخاصة بك، ومدينتك، ونوع الممارس الذي تبحث عنه، وتفضيلاتك لموعد الحجز. لا يُطلب أي تشخيص أو وصفة طبية أو ملف طبي، ولا يُشارك أو يُحفظ.",
    gdprTitle: "اللائحة العامة لحماية البيانات والقواعد الدولية المكافئة",
    gdprBody:
      "تطبّق Careline اللائحة الأوروبية العامة لحماية البيانات (GDPR) والقواعد المكافئة لحماية البيانات في كل بلد تعمل فيه: تقليل البيانات إلى الحد الأدنى، وغرض واضح، ومدّة تخزين محدودة، وحقوق يمارسها الأشخاص دون عوائق.",
    standardTitle: "أمن متوافق مع أشد المعايير الدولية صرامة",
    standardBody:
      "تُعالَج المعلومات وفق أشد متطلبات الأمن المطبَّقة على البيانات الصحية: وصول بحسب الدور، وتشفير أثناء النقل، والتزامات بالسرية، ومزوّدو خدمة مختارون بعناية.",
    imageAlt:
      "أخصائي صحة يكتب على حاسوب محمول، وبجانبه على المكتب قفل وحاجب خصوصية للشاشة.",
  },
  zh: {
    badge: "核心承诺",
    claim: "Careline 绝不索取、接收或存储任何健康数据。",
    claimDetail:
      "我们仅收集您的联系方式、所在城市、所需的专业人员类型以及预约偏好。我们不会索取、共享或保留任何诊断、处方或病历。",
    gdprTitle: "遵循欧盟 GDPR 及各国同等国际规范",
    gdprBody:
      "Careline 适用欧盟《通用数据保护条例》(GDPR)，并在其运营的每个国家遵循同等的数据保护要求：数据最小化、目的明确、保留期限有限，且个人可轻松行使其权利。",
    standardTitle: "按最严格的国际标准实施信息安全",
    standardBody:
      "信息的处理遵循适用于健康数据的最高安全要求：按角色授权访问、传输加密、保密义务以及经过筛选的服务提供商。",
    imageAlt:
      "一名医护人员正在笔记本电脑上输入，桌上的电脑旁放着一枚挂锁和一块防窥屏。",
  },
  ru: {
    badge: "Суть",
    claim: "Careline не запрашивает, не получает и не хранит данные о здоровье.",
    claimDetail:
      "Мы собираем только ваши контактные данные, город, тип нужного специалиста и предпочтения по записи. Никакие диагнозы, рецепты или медицинские карты не запрашиваются, не передаются и не хранятся.",
    gdprTitle: "GDPR и эквивалентные международные требования",
    gdprBody:
      "Careline применяет европейский GDPR и эквивалентные требования к защите данных в каждой стране своей работы: минимизация данных, ясная цель, ограниченный срок хранения и права, которые человек может реализовать без затруднений.",
    standardTitle: "Безопасность по самым строгим международным стандартам",
    standardBody:
      "Информация обрабатывается в соответствии с самыми строгими требованиями к безопасности, применимыми к данным о здоровье: доступ по ролям, шифрование при передаче, обязательства о конфиденциальности и отобранные подрядчики.",
    imageAlt:
      "Медработник печатает на ноутбуке, рядом на столе лежат замок и экран конфиденциальности.",
  },
};
