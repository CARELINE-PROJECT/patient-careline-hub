import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Inline SVG flags. Emoji flags are deliberately not used: on systems without a
// flag font (Windows, and some Linux/Android setups) the regional-indicator
// pairs render as bare letters such as "MG", "US", "AE", "GB", "SG", "HK".
const flags: Record<string, ReactNode> = {
  MG: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect x="10" width="20" height="10" fill="#FC3D32" />
      <rect x="10" y="10" width="20" height="10" fill="#007E3A" />
    </>
  ),
  US: (
    <>
      <rect width="30" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map(i => (
        <rect key={i} y={i * (20 / 13)} width="30" height={20 / 13} fill="#B22234" />
      ))}
      <rect width="12" height={7 * (20 / 13)} fill="#3C3B6E" />
    </>
  ),
  AE: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <rect x="7.5" width="22.5" height={20 / 3} fill="#00843D" />
      <rect x="7.5" y={2 * (20 / 3)} width="22.5" height={20 / 3} fill="#000" />
      <rect width="7.5" height="20" fill="#C8102E" />
    </>
  ),
  GB: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0 L30 20 M30 0 L0 20" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 L30 20 M30 0 L0 20" stroke="#C8102E" strokeWidth="2" />
      <rect x="11" width="8" height="20" fill="#fff" />
      <rect y="6" width="30" height="8" fill="#fff" />
      <rect x="13" width="4" height="20" fill="#C8102E" />
      <rect y="8" width="30" height="4" fill="#C8102E" />
    </>
  ),
  SG: (
    <>
      <rect width="30" height="10" fill="#ED2939" />
      <rect y="10" width="30" height="10" fill="#fff" />
      <circle cx="7" cy="5" r="3.2" fill="#fff" />
      <circle cx="8.4" cy="5" r="2.6" fill="#ED2939" />
      {[
        [11.5, 2.6],
        [9.5, 4.2],
        [10.3, 7],
        [12.7, 7],
        [13.5, 4.2],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.7" fill="#fff" />
      ))}
    </>
  ),
  HK: (
    <>
      <rect width="30" height="20" fill="#DE2910" />
      {[0, 72, 144, 216, 288].map(a => (
        <ellipse key={a} cx="15" cy="6.2" rx="1.5" ry="3" fill="#fff" transform={`rotate(${a} 15 10)`} />
      ))}
    </>
  ),
};

export function Flag({ code, className }: { code: string; className?: string }) {
  const art = flags[code.toUpperCase()];
  if (!art) return null;
  return (
    <span aria-hidden="true" className={cn("inline-block overflow-hidden rounded-[3px] ring-1 ring-black/10", className)}>
      <svg viewBox="0 0 30 20" className="block h-full w-full" focusable="false">
        {art}
      </svg>
    </span>
  );
}
