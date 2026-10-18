export type OfficeStatus = "proposed" | "validating" | "validated";
export type OfficeType = "virtual" | "representation" | "workspace";

export interface GlobalOffice {
  id: string;
  city: string;
  country: string;
  flag: string;
  district: string;
  address: string;
  status: OfficeStatus;
  type: OfficeType;
  serviceActive: boolean;
  contractedServices: string[];
  proposedServices: string[];
  coordinates: [number, number];
}

// Supplied reference locations, NOT Careline contracts or registered offices.
// Provider identities and links stay out of this catalog on purpose: they are
// never shown on the public site.
export const globalOffices: GlobalOffice[] = [
  { id: "new-york", city: "New York", country: "United States", flag: "🇺🇸", district: "Midtown Manhattan · Fifth Avenue", address: "New York, NY 10019", status: "proposed", type: "virtual", serviceActive: false, contractedServices: [], proposedServices: ["address", "mail", "phone", "meeting"], coordinates: [-73.9857, 40.7549] },
  { id: "dubai", city: "Dubai", country: "United Arab Emirates", flag: "🇦🇪", district: "Dubai International Financial Centre (DIFC)", address: "Gate Avenue, Dubai, UAE", status: "proposed", type: "workspace", serviceActive: false, contractedServices: [], proposedServices: ["workspace", "office", "professional"], coordinates: [55.281, 25.214] },
  { id: "singapore", city: "Singapore", country: "Singapore", flag: "🇸🇬", district: "Marina Bay", address: "Marina Bay Financial Centre Tower 2, 10 Marina Boulevard, Singapore 018983", status: "proposed", type: "virtual", serviceActive: false, contractedServices: [], proposedServices: ["address", "mail", "phone", "meeting"], coordinates: [103.854, 1.28] },
  { id: "london", city: "London", country: "United Kingdom", flag: "🇬🇧", district: "Hatton Garden", address: "63–66 Hatton Garden, London EC1N 8LE, United Kingdom", status: "proposed", type: "virtual", serviceActive: false, contractedServices: [], proposedServices: ["address", "mail", "scan"], coordinates: [-0.108, 51.52] },
  { id: "hong-kong", city: "Hong Kong", country: "Hong Kong SAR", flag: "🇭🇰", district: "Central", address: "7/F, Euro Trade Centre, 13–14 Connaught Road Central, Central, Hong Kong", status: "proposed", type: "virtual", serviceActive: false, contractedServices: [], proposedServices: ["address", "mail"], coordinates: [114.155, 22.285] },
];

export function isActiveOffice(office: GlobalOffice) {
  return office.status === "validated" && office.serviceActive;
}

export function mapPosition([longitude, latitude]: [number, number]) {
  return { x: (longitude + 180) / 360 * 100, y: (85 - latitude) / 145 * 100 };
}
