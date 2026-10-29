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
      { path: "/" },
      { path: "/about" },
      { path: "/careers" },
      { path: "/companies" },
      { path: "/contact" },
      { path: "/faq" },
      { path: "/how-it-works" },
      { path: "/legal/cookies" },
      { path: "/legal/notice" },
      { path: "/legal/privacy" },
      { path: "/legal/terms" },
      { path: "/privacy-preferences" },
      { path: "/professionals" },
      { path: "/request" },
      { path: "/security" },
      { path: "/services" },
      { path: "/specialties" },
      { path: "/specialties/laser-des-yeux" },
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
