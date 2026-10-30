# Étape 2 — Langues, balises et structure

Choix retenus : URL pour les 18 langues · stats non confirmées masquées · slugs actuels conservés (traduction des slugs à l'étape 5).

## 1. Internationalisation par sous-répertoires (18 langues)

- **Déplacement des routes** : les 18 pages passent sous `src/routes/$locale/` (`/$locale/services`, `/$locale/request`, …). Le paramètre `$locale` est validé contre les 18 langues ; une locale inconnue renvoie 404.
- **`src/i18n/index.tsx`** : la langue vient de l'URL (plus du seul stockage local). Le choix manuel reste mémorisé comme préférence.
- **Racine `/`** : redirection 301 vers la langue du navigateur (Accept-Language) si elle fait partie des 18, sinon `/fr/`.
- **Anciennes URL sans préfixe** (`/services`, `/request`, `/specialties/laser-des-yeux`, …) : routes de redirection 301 vers l'équivalent `/fr/...` (liste complète livrée dans le récapitulatif).
- **Sélecteur de langue** (`LanguageSwitcher.tsx`) : chaque entrée pointe vers l'URL équivalente dans l'autre langue (vrai lien, plus une simple commutation JavaScript).
- **Attribut `lang`** (et `dir="rtl"` pour l'arabe) sur `<html>`, dérivé de l'URL, côté serveur.
- **Tous les liens internes** (Header, Footer, CTA, fil d'Ariane) deviennent relatifs à la langue courante.
- **Aucun mélange de langues** : la page rendue dans une langue n'affiche que cette langue (textes, boutons, menus, pied de page, alt, messages d'erreur). Les pages non traduites (guides détaillés) affichent déjà un avis ; elles restent en repli anglais avec cet avis visible.

## 2. Balises de chaque page

- **`src/i18n/head.ts`** : `staticRouteHead` prend la langue → canonical absolue par langue, `og:locale`, et liens **hreflang réciproques (18 langues + x-default)** sur chaque page.
- **Titles** réécrits : 50–60 caractères, mot-clé principal en tête, « | Careline » à la fin. **Meta descriptions** : 140–155 caractères avec appel à l'action. Réécriture complète en **français et anglais** ; les 16 autres langues gardent leurs traductions actuelles (réécriture fine possible dans une étape ultérieure).
- **Audit H1/H2/H3** : un seul H1 par page, hiérarchie sans saut de niveau (vérification automatisée sur les 18 pages).
- **Images Open Graph dédiées 1200 × 630** pour les pages principales (accueil, services, professionnels, établissements, demande, contact, spécialités, guide laser) — générées, avec `og:image`, `twitter:image` et `og:locale`.

## 3. Pages spécialités sans contenu

- Déjà conforme : une seule page répertoire `/specialties` + une seule page dédiée (laser des yeux). Aucune URL indexable par spécialité n'existe ; je vérifie que cela reste vrai et je le verrouille dans le sitemap.

## 4. Cohérence des chiffres affichés

- **`src/config/figures.ts`** (nouveau) : source unique pour chaque chiffre clé (professionnels, partenaires, langues, spécialités…). Les chiffres non validés sont marqués `confirmed: false` et **masqués** partout (pages, meta, llms.txt, données structurées) jusqu'à validation.
- **Bandeau logos** (`src/config/software.ts`) : ajout d'un mode « Compatible avec » n'affichant que les logiciels réellement connectés (liste `connectedIds`, vide aujourd'hui). Le mode actuel reste actif tant qu'aucun logiciel n'est confirmé connecté. Rien n'est supprimé.

## 5. Sitemap multilingue

- **`src/routes/sitemap[.]xml.ts`** : une entrée par page **et par langue** (18 × 18 URL), avec liens `xhtml:link` hreflang réciproques + `x-default` pointant vers `/fr/...`.

## 6. Mises à jour connexes

- `public/llms.txt` / `llms-full.txt` : liens vers les URL `/fr/`.
- `vite.config.ts` : liste de prérendu étendue aux URL localisées (fr, en, nl prérendus ; les 15 autres langues restent en rendu serveur à la demande pour garder un build rapide).
- `Breadcrumbs.tsx`, `DocumentMetadata.tsx` : libellés et canonicals alignés sur l'URL de langue.

## Fichiers principaux modifiés

`src/routes/*` (déplacement sous `$locale/` + routes de redirection), `src/i18n/index.tsx`, `src/i18n/head.ts`, `src/i18n/locales/fr.ts` et `en.ts` (titles/descriptions), `LanguageSwitcher.tsx`, `Header.tsx`, `Footer.tsx`, `Breadcrumbs.tsx`, `DocumentMetadata.tsx`, `src/config/figures.ts` (nouveau), `src/config/software.ts`, `src/routes/sitemap[.]xml.ts`, `public/llms.txt`, `vite.config.ts`.

## Vérification livrée à la fin

- Tableau des URL : langue, title, meta description, H1, canonical, hreflang (généré par script sur les pages fr/en/nl + échantillon des autres langues).
- Liste des redirections 301.
- Liste des variables {À CONFIRMER} (chiffres masqués + ID GTM + codes Search Console / Bing).

## Hors portée de cette étape

- Traduction fine des titles/descriptions dans les 16 langues non fr/en.
- Slugs traduits (/fr/specialites, …) : étape 5.
- Quiz d'éligibilité : étape 5.
