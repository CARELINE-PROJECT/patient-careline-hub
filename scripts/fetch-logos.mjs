// Récupère une seule fois le logo officiel de chaque start-up listée dans src/data/startups.json
// et vérifie que son site répond. Aucune dépendance : Node 20+ suffit.
//
//   node scripts/fetch-logos.mjs            -> ne télécharge que les logos manquants
//   node scripts/fetch-logos.mjs --force    -> retélécharge tout
//
// Résultats :
//   public/logos/<slug>.<ext>        fichiers logos hébergés sur careline.doctor
//   src/data/logos.json              { slug: { src, source, kind } }
//   src/data/site-status.json        { slug: { status, checkedAt } }  (ok | http_<code> | unreachable)

import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DATA = path.join(ROOT, "src/data/startups.json");
const OUT_DIR = path.join(ROOT, "public/logos");
const LOGOS = path.join(ROOT, "src/data/logos.json");
const STATUS = path.join(ROOT, "src/data/site-status.json");
const FORCE = process.argv.includes("--force");
const SITE_TEMPLATE = process.env.SITE_URL_TEMPLATE || "https://{domain}/";
const CONCURRENCY = 8;
const UA = "Mozilla/5.0 (compatible; CarelineLogoBot/1.0; +https://www.careline.doctor)";

const EXT = {
  "image/png": "png", "image/svg+xml": "svg", "image/jpeg": "jpg", "image/jpg": "jpg",
  "image/webp": "webp", "image/gif": "gif", "image/x-icon": "ico",
  "image/vnd.microsoft.icon": "ico", "image/ico": "ico", "image/avif": "avif",
};

async function get(url, ms = 15000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, {
      redirect: "follow", signal: ctrl.signal,
      headers: { "user-agent": UA, accept: "text/html,image/avif,image/webp,image/*,*/*;q=0.8" },
    });
  } finally { clearTimeout(timer); }
}

function attrs(tag) {
  const out = {};
  for (const m of tag.matchAll(/([a-zA-Z:-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    out[m[1].toLowerCase()] = m[3] ?? m[4] ?? m[5];
  }
  return out;
}

function candidates(html, base) {
  const list = [];
  const add = (href, score, kind) => { try { list.push({ url: new URL(href, base).href, score, kind }); } catch {} };

  // 1. Logo déclaré dans les données structurées schema.org (vrai logo de marque)
  for (const m of html.matchAll(/"logo"\s*:\s*(?:"([^"]+)"|\{[^}]*?"url"\s*:\s*"([^"]+)")/g)) {
    const href = (m[1] || m[2] || "").replace(/\\\//g, "/");
    if (/\.(png|svg|jpe?g|webp)(\?|$)/i.test(href)) add(href, 600, "logo");
  }
  // 2. Icônes déclarées dans <link>
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
    const a = attrs(m[0]);
    if (!a.href) continue;
    const rel = (a.rel || "").toLowerCase().split(/\s+/);
    const size = Math.max(0, ...(a.sizes || "").split(/\s+/).map((s) => parseInt(s, 10)).filter((n) => !isNaN(n)));
    const svg = /\.svg(\?|$)/i.test(a.href) || (a.type || "").includes("svg");
    if (rel.includes("apple-touch-icon") || rel.includes("apple-touch-icon-precomposed")) add(a.href, 300 + size, "icon");
    else if (rel.includes("icon")) add(a.href, svg ? 400 : 100 + size, "icon");
  }
  // 3. Emplacements conventionnels
  add("/apple-touch-icon.png", 250, "icon");
  add("/favicon.svg", 200, "icon");
  add("/favicon.ico", 10, "icon");

  const seen = new Set();
  return list.sort((a, b) => b.score - a.score).filter((c) => !seen.has(c.url) && seen.add(c.url));
}

async function download(url) {
  const res = await get(url);
  if (!res.ok) return null;
  let type = (res.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 200) return null;
  if (!type.startsWith("image/")) {
    if (/^\s*(<\?xml[^>]*>\s*)?<svg/i.test(buf.subarray(0, 300).toString())) type = "image/svg+xml";
    else return null;
  }
  const ext = EXT[type];
  return ext ? { buf, ext } : null;
}

async function fetchSite(domain) {
  const urls = [SITE_TEMPLATE.replace("{domain}", domain)];
  if (!domain.startsWith("www.") && SITE_TEMPLATE.startsWith("https://")) urls.push(`https://www.${domain}/`);
  let last = "unreachable";
  for (const u of urls) {
    try {
      const res = await get(u);
      const html = res.ok ? await res.text() : "";
      if (res.ok) return { status: "ok", html, base: res.url || u };
      last = `http_${res.status}`;
      if (res.status === 403 || res.status === 429 || res.status === 503) return { status: last, html: "", base: res.url || u };
    } catch { /* essai suivant */ }
  }
  return { status: last, html: "", base: urls[0] };
}

async function processOne(s, logos, status) {
  const domain = s.website.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  const site = await fetchSite(domain);
  status[s.slug] = { status: site.status, checkedAt: new Date().toISOString().slice(0, 10) };

  const existing = logos[s.slug];
  if (!FORCE && existing) {
    try { await fs.access(path.join(ROOT, "public", existing.src)); return "déjà présent"; } catch {}
  }
  for (const c of candidates(site.html, site.base)) {
    try {
      const file = await download(c.url);
      if (!file) continue;
      for (const old of await fs.readdir(OUT_DIR)) if (old.startsWith(`${s.slug}.`)) await fs.unlink(path.join(OUT_DIR, old));
      const name = `${s.slug}.${file.ext}`;
      await fs.writeFile(path.join(OUT_DIR, name), file.buf);
      logos[s.slug] = { src: `/logos/${name}`, source: c.url, kind: c.kind };
      return `ok (${c.kind})`;
    } catch { /* candidat suivant */ }
  }
  return "aucun logo trouvé";
}

async function readJson(p, fallback) {
  try { return JSON.parse(await fs.readFile(p, "utf8")); } catch { return fallback; }
}

const startups = JSON.parse(await fs.readFile(DATA, "utf8"));
const logos = await readJson(LOGOS, {});
const status = await readJson(STATUS, {});
await fs.mkdir(OUT_DIR, { recursive: true });

let i = 0;
const report = { ok: 0, missing: 0 };
async function worker() {
  while (i < startups.length) {
    const s = startups[i++];
    let r;
    try { r = await processOne(s, logos, status); } catch (e) { r = `erreur : ${e.message}`; }
    if (logos[s.slug]) report.ok++; else report.missing++;
    console.log(`${s.slug.padEnd(32)} site=${status[s.slug]?.status.padEnd(12)} logo=${r}`);
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

const sortKeys = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));
await fs.writeFile(LOGOS, JSON.stringify(sortKeys(logos), null, 2) + "\n");
await fs.writeFile(STATUS, JSON.stringify(sortKeys(status), null, 2) + "\n");
console.log(`\nTerminé : ${report.ok} logos disponibles, ${report.missing} sans logo (affichées avec un badge typographique).`);
