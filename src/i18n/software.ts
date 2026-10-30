import type { LocaleCode } from "./types";

const baseSoftwareCopy = {
  fr: { title: "Plus de 100 Partenaires et API logiciels, dans le monde", note: "Sélection de 50 logiciels internationaux. Partenariats et connexions API à confirmer auprès de chaque éditeur.", pause: "Suspendre le défilement", play: "Reprendre le défilement", previous: "Logiciels précédents", next: "Logiciels suivants" },
  en: { title: "100+ Partners and software APIs, worldwide", note: "A selection of 50 international software platforms. Partnerships and API connections subject to confirmation with each vendor.", pause: "Pause scrolling", play: "Resume scrolling", previous: "Previous software", next: "Next software" },
  nl: { title: "Meer dan 100 partners en software-API’s, wereldwijd", note: "Een selectie van 50 internationale softwareplatforms. Partnerschappen en API-koppelingen moeten bij elke aanbieder worden bevestigd.", pause: "Scrollen pauzeren", play: "Scrollen hervatten", previous: "Vorige software", next: "Volgende software" },
  de: { title: "Über 100 Partner und Software-APIs, weltweit", note: "Eine Auswahl von 50 internationalen Softwareplattformen. Partnerschaften und API-Verbindungen sind mit den jeweiligen Anbietern zu bestätigen.", pause: "Scrollen pausieren", play: "Scrollen fortsetzen", previous: "Vorherige Software", next: "Nächste Software" },
  es: { title: "Más de 100 socios y API de software, en todo el mundo", note: "Selección de 50 plataformas internacionales. Las asociaciones y conexiones API deben confirmarse con cada proveedor.", pause: "Pausar desplazamiento", play: "Reanudar desplazamiento", previous: "Software anterior", next: "Software siguiente" },
  it: { title: "Oltre 100 partner e API software, nel mondo", note: "Una selezione di 50 piattaforme internazionali. Partnership e connessioni API da confermare con ciascun fornitore.", pause: "Pausa scorrimento", play: "Riprendi scorrimento", previous: "Software precedenti", next: "Software successivi" },
  pt: { title: "Mais de 100 parceiros e APIs de software, no mundo", note: "Seleção de 50 plataformas internacionais. Parcerias e ligações API a confirmar junto de cada fornecedor.", pause: "Pausar deslocamento", play: "Retomar deslocamento", previous: "Software anterior", next: "Software seguinte" },
  ar: { title: "أكثر من 100 شريك وواجهة برمجة برامج حول العالم", note: "مجموعة مختارة من 50 منصة دولية. يجب تأكيد الشراكات واتصالات واجهات البرمجة مع كل مزود.", pause: "إيقاف التمرير", play: "استئناف التمرير", previous: "البرامج السابقة", next: "البرامج التالية" },
  zh: { title: "全球 100 多个合作伙伴与软件 API", note: "精选50个国际软件平台。合作关系及API连接须向各供应商确认。", pause: "暂停滚动", play: "继续滚动", previous: "上一个软件", next: "下一个软件" },
  ru: { title: "Более 100 партнёров и API программ по всему миру", note: "Подборка из 50 международных платформ. Партнёрства и API-подключения требуют подтверждения у каждого поставщика.", pause: "Приостановить прокрутку", play: "Продолжить прокрутку", previous: "Предыдущие программы", next: "Следующие программы" },
};

// Newer locales fall back to English until fully translated.
export const softwareCopy: Record<LocaleCode, { title: string; note: string; pause: string; play: string; previous: string; next: string }> = {
  ...baseSoftwareCopy,
  ja: baseSoftwareCopy.en,
  ko: baseSoftwareCopy.en,
  hi: baseSoftwareCopy.en,
  tr: baseSoftwareCopy.en,
  pl: baseSoftwareCopy.en,
  sv: baseSoftwareCopy.en,
  uk: baseSoftwareCopy.en,
  id: baseSoftwareCopy.en,
};

/** Strip title without any unconfirmed figure (used while softwarePartners is unconfirmed). */
export const softwarePlainTitle: Record<LocaleCode, string> = {
  fr: "Partenaires et API logiciels, dans le monde",
  en: "Partners and software APIs, worldwide",
  nl: "Partners en software-API's, wereldwijd",
  de: "Partner und Software-APIs, weltweit",
  es: "Socios y API de software, en todo el mundo",
  it: "Partner e API software, nel mondo",
  pt: "Parceiros e APIs de software, no mundo",
  ar: "شركاء وواجهات برمجة برامج حول العالم",
  zh: "全球合作伙伴与软件 API",
  ru: "Партнёры и API программ по всему миру",
  ja: "世界中のパートナーとソフトウェアAPI",
  ko: "전 세계 파트너 및 소프트웨어 API",
  hi: "दुनिया भर में पार्टनर और सॉफ़्टवेयर API",
  tr: "Dünya genelinde iş ortakları ve yazılım API'leri",
  pl: "Partnerzy i API oprogramowania na całym świecie",
  sv: "Partners och programvaru-API:er, världen över",
  uk: "Партнери та програмні API по всьому світу",
  id: "Mitra dan API perangkat lunak, di seluruh dunia",
};

/** Label when the strip shows only actually-connected software. */
export const softwareCompatibleLabel: Record<LocaleCode, string> = {
  fr: "Compatible avec",
  en: "Compatible with",
  nl: "Compatibel met",
  de: "Kompatibel mit",
  es: "Compatible con",
  it: "Compatibile con",
  pt: "Compatível com",
  ar: "متوافق مع",
  zh: "兼容",
  ru: "Совместимо с",
  ja: "対応ソフトウェア",
  ko: "호환 가능",
  hi: "के साथ संगत",
  tr: "Şununla uyumlu",
  pl: "Kompatybilne z",
  sv: "Kompatibel med",
  uk: "Сумісно з",
  id: "Kompatibel dengan",
};
