<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep official company identity and regional phone numbers in siteConfig, with localized legal identity overrides in i18n/company and shared contact rendering, so public pages cannot drift between languages.
- Keep software vendor data and asset provenance in a shared catalog and render the localized homepage strip separately; this keeps vendor identities distinct from confirmed integrations.
- Resolve Lovable asset pointers through the shared publicAssetUrl helper against the working Lovable published origin; the externally hosted custom domain does not serve the asset gateway.
- Reuse the canonical specialty IDs and translations for the public directory; keep patient guide content, source provenance and verified video IDs separate from route presentation to avoid inconsistent medical claims.
- Load third-party patient videos only after an explicit play action through YouTube's privacy-enhanced embed; no third-party requests before the patient chooses to play.
