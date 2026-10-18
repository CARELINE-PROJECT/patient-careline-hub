// The custom domain is hosted outside Lovable and has no /__l5e asset handler.
const assetOrigin = "https://patient-careline-hub.lovable.app";

export function publicAssetUrl(asset: { url: string }): string {
  return new URL(asset.url, assetOrigin).href;
}