import { photoSize, photoSrcSet, photoUrl, type PhotoId } from "@/lib/photos";
import { usePhotoAlt } from "@/i18n/imageAlts";

/**
 * <picture> with WebP sources, JPG fallback, explicit width/height and
 * localized alt. `priority` marks the page's main image (fetchpriority=high).
 */
export function ResponsivePhoto({
  id,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  decorative = false,
}: {
  id: PhotoId;
  className?: string;
  sizes?: string;
  priority?: boolean;
  decorative?: boolean;
}) {
  const alt = usePhotoAlt(id);
  const { width, height } = photoSize(id);
  return (
    <picture>
      <source type="image/webp" srcSet={photoSrcSet(id, "webp")} sizes={sizes} />
      <img
        src={photoUrl(id, 960)}
        srcSet={photoSrcSet(id, "jpg")}
        sizes={sizes}
        alt={decorative ? "" : alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={className}
      />
    </picture>
  );
}
