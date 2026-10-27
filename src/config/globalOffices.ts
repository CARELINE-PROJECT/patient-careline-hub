import { siteConfig } from "@/config/site";

export type OfficeStatus = "proposed" | "validating" | "validated";
export type OfficeType = "headquarters" | "virtual" | "representation" | "workspace";

export interface GlobalOffice {
  id: string;
  city: string;
  country: string;
  /** ISO 3166-1 alpha-2 code, drawn by the inline SVG Flag component. */
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

// Antsirabe is the confirmed registered office (siteConfig.company).
// The other entries are supplied reference locations, NOT Careline contracts or
// registered offices. Provider identities and links stay out of this catalog on
// purpose: they are never shown on the public site.
export const globalOffices: GlobalOffice[] = [
  { id: "antsirabe", city: "Antsirabe", country: "Madagascar", flag: "MG", district: "Antsirabe I", address: siteConfig.company.address, status: "validated", type: "headquarters", serviceActive: true, contractedServices: ["address", "phone"], proposedServices: [], coordinates: [47.0238, -19.8575] },
  { id: "silicon-valley", city: "Silicon Valley", country: "United States", flag: "US", district: "Palo Alto · El Camino Real", address: "3790 El Camino Real, Palo Alto, CA 94306, USA", status: "proposed", type: "virtual", serviceActive: false, contractedServices: [], proposedServices: ["address", "mail", "phone", "meeting"], coordinates: [-122.126, 37.419] },
  { id: "miami", city: "Miami", country: "United States", flag: "US", district: "Design District · Biscayne Boulevard", address: "4300 Biscayne Blvd, Suite 203, Miami, FL 33137, USA", status: "proposed", type: "virtual", serviceActive: false, contractedServices: [], proposedServices: ["address", "mail", "phone", "meeting"], coordinates: [-80.189, 25.817] },
  { id: "dubai", city: "Dubai", country: "United Arab Emirates", flag: "AE", district: "Dubai International Financial Centre (DIFC)", address: "Gate Avenue, Dubai, UAE", status: "proposed", type: "workspace", serviceActive: false, contractedServices: [], proposedServices: ["workspace", "office", "professional"], coordinates: [55.281, 25.214] },
  { id: "singapore", city: "Singapore", country: "Singapore", flag: "SG", district: "Marina Bay", address: "Marina Bay Financial Centre Tower 2, 10 Marina Boulevard, Singapore 018983", status: "proposed", type: "virtual", serviceActive: false, contractedServices: [], proposedServices: ["address", "mail", "phone", "meeting"], coordinates: [103.854, 1.28] },
  { id: "london", city: "London", country: "United Kingdom", flag: "GB", district: "Hatton Garden", address: "63–66 Hatton Garden, London EC1N 8LE, United Kingdom", status: "proposed", type: "virtual", serviceActive: false, contractedServices: [], proposedServices: ["address", "mail", "scan"], coordinates: [-0.108, 51.52] },
  { id: "hong-kong", city: "Hong Kong", country: "Hong Kong SAR", flag: "HK", district: "Central", address: "7/F, Euro Trade Centre, 13–14 Connaught Road Central, Central, Hong Kong", status: "proposed", type: "virtual", serviceActive: false, contractedServices: [], proposedServices: ["address", "mail"], coordinates: [114.155, 22.285] },
];

export function isActiveOffice(office: GlobalOffice) {
  return office.status === "validated" && office.serviceActive;
}

export function mapPosition([longitude, latitude]: [number, number]) {
  return { x: (longitude + 180) / 360 * 100, y: (85 - latitude) / 145 * 100 };
}
