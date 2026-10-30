// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static prerender: every public page ships as complete HTML (text, title, meta, links)
    // without depending on JavaScript execution. Discovery is pinned off — this list is complete.
    pages: [
      { path: "/fr" },
      { path: "/fr/about" },
      { path: "/fr/careers" },
      { path: "/fr/companies" },
      { path: "/fr/contact" },
      { path: "/fr/faq" },
      { path: "/fr/how-it-works" },
      { path: "/fr/legal/cookies" },
      { path: "/fr/legal/notice" },
      { path: "/fr/legal/privacy" },
      { path: "/fr/legal/terms" },
      { path: "/fr/privacy-preferences" },
      { path: "/fr/professionals" },
      { path: "/fr/request" },
      { path: "/fr/security" },
      { path: "/fr/services" },
      { path: "/fr/specialties" },
      { path: "/fr/chirurgie-laser-yeux" },
      { path: "/en" },
      { path: "/en/about" },
      { path: "/en/careers" },
      { path: "/en/companies" },
      { path: "/en/contact" },
      { path: "/en/faq" },
      { path: "/en/how-it-works" },
      { path: "/en/legal/cookies" },
      { path: "/en/legal/notice" },
      { path: "/en/legal/privacy" },
      { path: "/en/legal/terms" },
      { path: "/en/privacy-preferences" },
      { path: "/en/professionals" },
      { path: "/en/request" },
      { path: "/en/security" },
      { path: "/en/services" },
      { path: "/en/specialties" },
      { path: "/en/chirurgie-laser-yeux" },
      { path: "/nl" },
      { path: "/nl/about" },
      { path: "/nl/careers" },
      { path: "/nl/companies" },
      { path: "/nl/contact" },
      { path: "/nl/faq" },
      { path: "/nl/how-it-works" },
      { path: "/nl/legal/cookies" },
      { path: "/nl/legal/notice" },
      { path: "/nl/legal/privacy" },
      { path: "/nl/legal/terms" },
      { path: "/nl/privacy-preferences" },
      { path: "/nl/professionals" },
      { path: "/nl/request" },
      { path: "/nl/security" },
      { path: "/nl/services" },
      { path: "/nl/specialties" },
      { path: "/nl/chirurgie-laser-yeux" }
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
