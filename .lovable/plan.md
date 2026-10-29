# Fondations techniques SEO — Careline

Positionnement actuel conservé (multi-spécialités, international). Tout est préparé pour www.careline.doctor en attendant la connexion DNS du domaine.

## 1. Rendu indexable (prérendu statique)

- **`vite.config.ts`** : activer `prerender: { enabled: true, autoStaticPathsDiscovery: false }` avec la liste explicite des 15 routes publiques : `/`, `/services`, `/professionals`, `/companies`, `/how-it-works`, `/request`, `/contact`, `/about`, `/faq`, `/security`, `/careers`, `/specialties`, `/specialties/laser-des-yeux`, `/legal/notice`, `/legal/privacy`, `/legal/terms`, `/legal/cookies`, `/privacy-preferences`.
- La version du build (2.26.5) supporte le prérendu. Si le build ne se termine pas (minuteur), ajout d'un garde `TSS_PRERENDERING`.
- **Vérification** : code source brut (view-source) de `/` et `/specialties/laser-des-yeux` montré après build — HTML complet sans dépendre du JavaScript.

## 2. Domaines et doublons

- **`src/i18n/head.ts`** et les `head()` des routes : canonicals et og:url pointent vers `https://www.careline.doctor`.
- **Redirections 301** (HTTP→HTTPS, sans-www→www) : aucune à écrire — elles sont gérées automatiquement par la plateforme une fois le domaine connecté et défini comme domaine principal. **Action manuelle requise** de votre côté : finaliser le DNS dans Settings → Domains (statut actuel : en attente de DNS).
- **Assets (logos partenaires)** : ils passeront automatiquement par le domaine principal une fois connecté ; le mécanisme `publicAssetUrl` existant sera basculé sur www.careline.doctor.

## 3. Fichiers pour les robots

- **`public/robots.txt`** (réécrit) : autorise Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended, Applebot-Extended ; bloque `/request` avec paramètres, la page de confirmation et les pages internes ; référence le sitemap.
- **`src/routes/sitemap[.]xml.tsx`** (nouveau) : sitemap généré automatiquement depuis les routes publiques. **`lastmod` omis** : il n'existe aucune date de modification fiable par page, et la règle est de n'inventer aucun chiffre — un lastmod factice desservirait le SEO.
- **`public/llms.txt`** (nouveau) : 5 phrases factuelles (ce que Careline fait / ne fait pas : pas de soins, pas d'urgences) + liste des pages guides avec résumé d'une ligne.
- **`public/llms-full.txt`** (nouveau) : texte complet des pages guides.

## 4. Performance (Core Web Vitals mobile)

- Préchargement de l'image principale de chaque page via `head()` (`links: [{ rel: "preload", as: "image" }]`).
- `loading="lazy"` sur toutes les images hors image principale (vérification + ajout dans les composants concernés).
- Polices en `font-display: swap` (vérification du chargement actuel).
- Découpage du code par route : déjà natif dans TanStack Start.
- Lecteurs YouTube au clic uniquement : déjà en place, conservé.
- **Vérification** : score Lighthouse mobile de l'accueil.

## 5. Navigation et erreurs

- **`src/components/site/Breadcrumbs.tsx`** (nouveau) : fil d'Ariane visible + données structurées BreadcrumbList, ajouté sur toutes les pages internes.
- **`src/routes/__root.tsx`** : page 404 enrichie si besoin (liens vers les guides, /request, accueil) avec vrai statut HTTP 404 — le composant existe déjà, je vérifie son contenu.

## 6. Mesure

- **`src/lib/analytics.ts`** (nouveau) : GTM + Consent Mode v2 (`default: denied`), branché sur la bannière cookies existante (`src/lib/consent.ts` / CookieBanner) — mise à jour du consentement au choix de l'utilisateur.
- **`src/routes/__root.tsx`** : injection du script GTM.
- Événements : `form_start` et `form_submit` sur les formulaires de demande et partenaire.
- **Clic téléphone / clic WhatsApp : sans objet** — le site n'affiche aucun numéro public ni WhatsApp (règle existante du projet). Ces événements seront ajoutés si un jour ces canaux existent.
- Quiz d'éligibilité : prévu à l'étape 5, non implémenté maintenant.
- Balises meta de vérification Google Search Console et Bing : ajoutées avec valeurs **{À CONFIRMER}**.
- **IndexNow** : génération d'une clé, fichier de clé à la racine (`public/<clé>.txt`), et fonction de notification.

## Variables {À CONFIRMER}

1. **ID du conteneur GTM** (GTM-XXXXXXX) — vous avez indiqué l'avoir ; donnez-le-moi et je l'intègre, sinon je mets un placeholder.
2. **Code de vérification Google Search Console**.
3. **Code de vérification Bing Webmaster Tools**.

## Points hors code (action de votre côté)

- Connexion DNS de careline.doctor (Settings → Domains) — débloque les redirections 301 et le service des assets depuis le domaine.
- Définir careline.doctor comme domaine principal une fois connecté.
