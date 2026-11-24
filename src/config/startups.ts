import records from "../data/startups.json";
import taxonomy from "../data/startup-taxonomy.json";
import logos from "../data/logos.json";
import siteStatus from "../data/site-status.json";
import { publicAssetUrl } from "../lib/assets";

export interface Startup {
  slug: string;
  name: string;
  country: { code: string; fr: string; en: string };
  continent: string;
  domain: string;
  website: string;
  description: { fr: string; en: string };
  featured: boolean;
}
export interface StartupLogo { src: string; source: string; kind: string; asset?: { url: string } }
export const startupRecords: Startup[] = records;
export const startupTaxonomy = taxonomy;
const rawLogos: Record<string, StartupLogo> = logos;
export const startupLogos: Record<string, StartupLogo> = Object.fromEntries(Object.entries(rawLogos).map(([slug, entry]) => [slug, { ...entry, src: entry.asset ? publicAssetUrl(entry.asset) : entry.src }]));
export const startupStatuses: Record<string, { status: string }> = siteStatus;

export function isStartupVisible(status?: string): boolean {
  return status !== "unreachable" && status !== "http_404" && status !== "http_410";
}

export function visibleStartups(statuses = startupStatuses): Startup[] {
  return startupRecords.filter(s => isStartupVisible(statuses[s.slug]?.status)).sort((a, b) =>
    Number(b.domain === "ophtalmologie") - Number(a.domain === "ophtalmologie") ||
    Number(b.featured) - Number(a.featured) || (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0));
}

export interface StartupFilters { domaine?: string | undefined; continent?: string | undefined; pays?: string | undefined; q?: string | undefined }
export function matchesStartup(s: Startup, filters: StartupFilters): boolean {
  return (!filters.domaine || s.domain === filters.domaine) &&
    (!filters.continent || s.continent === filters.continent) &&
    (!filters.pays || s.country.code === filters.pays) &&
    (!filters.q || s.name.toLocaleLowerCase().includes(filters.q.trim().toLocaleLowerCase()));
}

/** Round-robin across regions after prioritizing featured entries within each region. */
export function startupBannerItems(items = visibleStartups()): Startup[] {
  const withLogos = items.filter(s => startupLogos[s.slug]);
  const source = withLogos.length ? withLogos : items;
  const groups = startupTaxonomy.continents.map(c => source.filter(s => s.continent === c.key).sort((a, b) => Number(b.featured) - Number(a.featured)));
  const out: Startup[] = [];
  let index = 0;
  while (groups.some(g => g[index])) {
    for (const group of groups) { const entry = group[index]; if (entry) out.push(entry); }
    index++;
  }
  return out;
}