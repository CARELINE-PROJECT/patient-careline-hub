/**
 * LEGAL BASELINE CONTENT — DEMONSTRATION / DRAFT.
 * These texts are a professional starting point only. They must be reviewed and
 * validated by qualified legal counsel for every country in which Careline operates.
 * Placeholders in [brackets] must be replaced with verified company information.
 */

export interface LegalSection {
  heading: string;
  body: string[];
}

export const lastUpdated = "2026-01-01";

export const privacySections: LegalSection[] = [
  {
    heading: "1. Who we are",
    body: [
      "Careline (\"we\", \"us\") facilitates access to healthcare professionals and coordinates medical appointment requests on behalf of patients and organizations. The data controller is [legal entity name, registration number, registered address].",
    ],
  },
  {
    heading: "2. Data we collect",
    body: [
      "We collect only the information needed to handle your request: identity (first name, last name), contact details (email, telephone), the city and country in which you are seeking care, the type of practitioner requested, your consultation preference, your preferred period and any information you choose to add.",
      "We ask you not to include detailed medical information in free-text fields. Any health-related information you nevertheless provide is treated as sensitive data and processed only to route your request.",
    ],
  },
  {
    heading: "3. Purposes and legal bases",
    body: [
      "Handling and following up appointment requests (performance of a service you requested, and your explicit consent where health data is involved).",
      "Responding to contact and partnership enquiries (our legitimate interest in replying to you).",
      "Maintaining the security and integrity of the service (legitimate interest and legal obligations).",
    ],
  },
  {
    heading: "4. Recipients",
    body: [
      "Data may be shared with the healthcare professionals, practices or establishments needed to arrange your appointment, and with technical service providers acting on our instructions under contract. We do not sell personal data.",
    ],
  },
  {
    heading: "5. International transfers",
    body: [
      "Careline operates internationally. Where data is transferred outside your region, we apply appropriate safeguards required by the applicable regulations, such as standard contractual clauses.",
    ],
  },
  {
    heading: "6. Retention",
    body: [
      "Personal data is kept only for as long as necessary for the purposes described above and for the periods required by applicable law. Indicative retention periods must be confirmed per country: [to be completed].",
    ],
  },
  {
    heading: "7. Your rights",
    body: [
      "Depending on your jurisdiction, you may request access, rectification, erasure, restriction, portability, or object to certain processing, and withdraw your consent at any time. Contact us at [privacy contact email]. You may also lodge a complaint with your local supervisory authority.",
    ],
  },
  {
    heading: "8. Security",
    body: [
      "We apply technical and organizational measures adapted to the risk, including access control, encryption of data in transit and confidentiality obligations for staff. No claim of certification is made unless explicitly stated and held.",
    ],
  },
  {
    heading: "9. Contact",
    body: ["For any question about this policy, write to [privacy contact email]."],
  },
];

export const cookieSections: LegalSection[] = [
  {
    heading: "1. What cookies we use",
    body: [
      "Necessary cookies keep the site working (session integrity, security, your consent choice). They cannot be disabled.",
      "Functional cookies remember preferences such as your chosen language.",
      "Analytics cookies help us understand aggregated usage of the site.",
      "Marketing cookies measure and personalise campaigns.",
    ],
  },
  {
    heading: "2. Consent",
    body: [
      "Non-essential cookies are never loaded before you give consent. You may accept, refuse, or select categories, and you may change your choice at any time from the \"Manage privacy preferences\" link in the footer.",
    ],
  },
  {
    heading: "3. Duration",
    body: [
      "Your consent choice is stored on your device. Indicative durations for each cookie must be listed here once analytics or marketing tools are actually deployed: [to be completed].",
    ],
  },
  {
    heading: "4. Third parties",
    body: [
      "No third-party analytics or advertising tool is active on this site at present. Any future tool will be listed here before activation.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "1. Purpose",
    body: [
      "These terms govern the use of the Careline website and of the appointment facilitation service offered through it.",
    ],
  },
  {
    heading: "2. Nature of the service",
    body: [
      "Careline is an intermediation and coordination service. Careline does not provide medical care, does not give medical advice, and does not carry out diagnosis. Care is delivered by independent healthcare professionals who remain solely responsible for their acts.",
      "Careline is not an emergency service. In an emergency, contact your local emergency number.",
    ],
  },
  {
    heading: "3. Requests and appointments",
    body: [
      "Submitting a request does not create a confirmed appointment. Careline reviews each request and, where possible, proposes one or several practitioners matching the criteria provided, subject to availability and to the regulations applicable in the country concerned.",
    ],
  },
  {
    heading: "4. User obligations",
    body: [
      "You undertake to provide accurate information, to use the service lawfully, and not to submit content that is unlawful or that infringes the rights of others.",
    ],
  },
  {
    heading: "5. Liability",
    body: [
      "Careline undertakes to provide the coordination service with reasonable care. Careline cannot be held liable for the medical acts, availability, pricing or decisions of independent professionals. Liability limits must be adapted per jurisdiction: [to be completed].",
    ],
  },
  {
    heading: "6. Intellectual property",
    body: [
      "The site, its content and its trademarks are protected. No reproduction is permitted without prior written authorisation.",
    ],
  },
  {
    heading: "7. Applicable law",
    body: ["Governing law and competent courts: [to be completed by legal counsel]."],
  },
];

export const noticeSections: LegalSection[] = [
  {
    heading: "Publisher",
    body: [
      "[Legal entity name] — [legal form and share capital] — registered office: [address] — registration number: [number] — VAT: [number].",
      "Publication director: [name].",
    ],
  },
  {
    heading: "Contact",
    body: ["Email: [contact email] — Telephone: [phone number]."],
  },
  {
    heading: "Hosting",
    body: ["[Hosting provider name, address and contact details]."],
  },
  {
    heading: "Status",
    body: [
      "Careline is an intermediation service and is not a healthcare provider. Any professional registration or authorisation numbers required in a given country must be added here.",
    ],
  },
];
