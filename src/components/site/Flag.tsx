import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Inline SVG flags. Emoji flags are deliberately not used: on systems without a
// flag font (Windows, and some Linux/Android setups) the regional-indicator
// pairs render as bare letters such as "MG", "US", "AE", "GB", "SG", "HK".
const flags: Record<string, ReactNode> = {
  FR: <><rect width="10" height="20" fill="#0055A4" /><rect x="10" width="10" height="20" fill="#fff" /><rect x="20" width="10" height="20" fill="#EF4135" /></>,
  IT: <><rect width="10" height="20" fill="#009246" /><rect x="10" width="10" height="20" fill="#fff" /><rect x="20" width="10" height="20" fill="#CE2B37" /></>,
  NL: <><rect width="30" height="7" fill="#AE1C28" /><rect y="7" width="30" height="6" fill="#fff" /><rect y="13" width="30" height="7" fill="#21468B" /></>,
  DE: <><rect width="30" height="7" fill="#000" /><rect y="7" width="30" height="6" fill="#DD0000" /><rect y="13" width="30" height="7" fill="#FFCE00" /></>,
  RU: <><rect width="30" height="7" fill="#fff" /><rect y="7" width="30" height="6" fill="#0039A6" /><rect y="13" width="30" height="7" fill="#D52B1E" /></>,
  ES: <><rect width="30" height="20" fill="#AA151B" /><rect y="5" width="30" height="10" fill="#F1BF00" /></>,
  PT: <><rect width="30" height="20" fill="#FF0000" /><rect width="12" height="20" fill="#006600" /><circle cx="12" cy="10" r="3.5" fill="#FFCC00" /></>,
  SA: <><rect width="30" height="20" fill="#006C35" /><rect x="7" y="12" width="16" height="1.2" fill="#fff" /><rect x="8" y="7" width="14" height="1.5" fill="#fff" /></>,
  CN: <><rect width="30" height="20" fill="#DE2910" /><circle cx="6" cy="6" r="2.6" fill="#FFDE00" />{[[11, 2.5], [13, 5], [13, 8.5], [11, 11]].map(([x, y]) => <circle key={x + "-" + y} cx={x} cy={y} r=".9" fill="#FFDE00" />)}</>,
  JP: <><rect width="30" height="20" fill="#fff" /><circle cx="15" cy="10" r="6" fill="#BC002D" /></>,
  KR: <><rect width="30" height="20" fill="#fff" /><circle cx="15" cy="10" r="5" fill="#CD2E3A" /><path d="M10 10a5 5 0 0 0 10 0a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 1-5 0" fill="#0047A0" />{[[5, 4], [25, 4], [5, 16], [25, 16]].map(([x, y]) => <rect key={x + "-" + y} x={x - 2} y={y - 1.5} width="4" height="3" fill="#000" transform={`rotate(${x === y + 1 || x === y + 9 ? 33 : -33} ${x} ${y})`} />)}</>,
  IN: <><rect width="30" height="7" fill="#FF9933" /><rect y="7" width="30" height="6" fill="#fff" /><rect y="13" width="30" height="7" fill="#138808" /><circle cx="15" cy="10" r="2.2" fill="none" stroke="#000080" strokeWidth=".7" /></>,
  TR: <><rect width="30" height="20" fill="#E30A17" /><circle cx="11" cy="10" r="5" fill="#fff" /><circle cx="12.3" cy="10" r="4" fill="#E30A17" /><circle cx="18" cy="10" r="1.6" fill="#fff" /></>,
  PL: <><rect width="30" height="10" fill="#fff" /><rect y="10" width="30" height="10" fill="#DC143C" /></>,
  SE: <><rect width="30" height="20" fill="#006AA7" /><rect x="9" width="4" height="20" fill="#FECC00" /><rect y="8" width="30" height="4" fill="#FECC00" /></>,
  UA: <><rect width="30" height="10" fill="#0057B7" /><rect y="10" width="30" height="10" fill="#FFD700" /></>,
  ID: <><rect width="30" height="10" fill="#CE1126" /><rect y="10" width="30" height="10" fill="#fff" /></>,
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
