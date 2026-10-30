import { photoDims, type PhotoId } from "@/config/photoDims";

export type { PhotoId };

/** Responsive widths generated for every photo (WebP + JPG fallback). */
export const photoWidths = [480, 960, 1600] as const;

const files = import.meta.glob("/src/assets/photos/*.{webp,jpg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function fileUrl(id: PhotoId, width: number, ext: "webp" | "jpg"): string {
  return files[`/src/assets/photos/${id}-${width}.${ext}`] ?? "";
}

export function photoSrcSet(id: PhotoId, ext: "webp" | "jpg"): string {
  const [natural] = photoDims[id];
  return photoWidths.map((w) => `${fileUrl(id, w, ext)} ${Math.min(w, natural)}w`).join(", ");
}

/** Largest JPG variant: default <img src>, preload target and sitemap image URL. */
export function photoUrl(id: PhotoId, width: (typeof photoWidths)[number] = 1600): string {
  return fileUrl(id, width, "jpg");
}

export function photoSize(id: PhotoId): { width: number; height: number } {
  const [width, height] = photoDims[id];
  return { width, height };
}
