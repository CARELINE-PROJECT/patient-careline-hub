import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Inline SVG flags. Emoji flags are deliberately not used: on systems without a
// flag font (Windows, and some Linux/Android setups) the regional-indicator
// pairs render as bare letters such as "MG", "US", "AE", "GB", "SG", "HK".
const horizontal = (a: string, b: string, c: string) => <><rect width="30" height="20" fill={a} /><rect y="6.667" width="30" height="6.667" fill={b} /><rect y="13.333" width="30" height="6.667" fill={c} /></>;
const vertical = (a: string, b: string, c: string) => <><rect width="30" height="20" fill={a} /><rect x="10" width="10" height="20" fill={b} /><rect x="20" width="10" height="20" fill={c} /></>;
const star = (x = 15, y = 10, color = "#ffde00", size = 3) => <path d="M0-1 .224-.309 .951-.309 .363.118 .588.809 0 .382 -.588.809 -.363.118 -.951-.309 -.224-.309Z" fill={color} transform={`translate(${x} ${y}) scale(${size})`} />;
const flags: Record<string, ReactNode> = {
  MX: <>{vertical("#006847", "#fff", "#CE1126")}<path d="m13 8 4 1-1 3-3-1Z" fill="#80633F" /><path d="M12 12q3 3 6 0" fill="none" stroke="#006847" /></>,
  GT: <>{vertical("#4997D0", "#fff", "#4997D0")}<rect x="13.5" y="7" width="3" height="6" fill="#F6E8C3" /><path d="M12 8q-2 5 3 6 5-1 3-6" fill="none" stroke="#427E3E" /></>,
  HN: <>{horizontal("#00BCE4", "#fff", "#00BCE4")}{[[12,8],[18,8],[15,10],[12,12],[18,12]].map(([x,y]) => star(x,y,"#00BCE4",1))}</>,
  SV: <>{horizontal("#0047AB", "#fff", "#0047AB")}<path d="m15 7-3 6h6Z" fill="#D8BB73" /><path d="m15 9-2 3h4Z" fill="#2C8640" /></>,
  NI: <>{horizontal("#0067C6", "#fff", "#0067C6")}<path d="m15 7-3 6h6Z" fill="#D8BB73" /><path d="m15 9-2 3h4Z" fill="#39814B" /></>,
  CR: <><rect width="30" height="20" fill="#002B7F" /><rect y="3.33" width="30" height="13.34" fill="#fff" /><rect y="6.67" width="30" height="6.66" fill="#CE1126" /><ellipse cx="8" cy="10" rx="2" ry="2.5" fill="#fff" /><path d="m7 11 1-3 1 3Z" fill="#39814B" /></>,
  PA: <><rect width="30" height="20" fill="#fff" /><rect x="15" width="15" height="10" fill="#DA121A" /><rect y="10" width="15" height="10" fill="#072357" />{star(7.5,5,"#072357",3)}{star(22.5,15,"#DA121A",3)}</>,
  CU: <><rect width="30" height="20" fill="#002A8F" /><rect y="4" width="30" height="4" fill="#fff" /><rect y="12" width="30" height="4" fill="#fff" /><path d="M0 0 15 10 0 20Z" fill="#CF142B" />{star(5,10,"#fff",3.5)}</>,
  PR: <><rect width="30" height="20" fill="#ED0000" /><rect y="4" width="30" height="4" fill="#fff" /><rect y="12" width="30" height="4" fill="#fff" /><path d="M0 0 15 10 0 20Z" fill="#0050F0" />{star(5,10,"#fff",3.5)}</>,
  DO: <><rect width="30" height="20" fill="#fff" /><path d="M0 0h13v8H0zm17 12h13v8H17Z" fill="#002D62" /><path d="M17 0h13v8H17zM0 12h13v8H0Z" fill="#CE1126" /><path d="M14 8h2v4h-2Z" fill="#006B3F" /></>,
  CO: <><rect width="30" height="20" fill="#FCD116" /><rect y="10" width="30" height="5" fill="#003893" /><rect y="15" width="30" height="5" fill="#CE1126" /></>,
  VE: <>{horizontal("#FCE300", "#003DA5", "#EF3340")}{[0,1,2,3,4,5,6,7].map(i => star(9+i*1.7,10-Math.sin(i*Math.PI/7)*1.8,"#fff",.8))}</>,
  EC: <><rect width="30" height="20" fill="#FFDD00" /><rect y="10" width="30" height="5" fill="#034EA2" /><rect y="15" width="30" height="5" fill="#ED1C24" /><ellipse cx="15" cy="10" rx="2" ry="3" fill="#7FBCE2" /><path d="M12 7q3-3 6 0m-6 6q3 3 6 0" fill="none" stroke="#8A663F" /></>,
  PE: vertical("#D91023", "#fff", "#D91023"),
  BO: <>{horizontal("#D52B1E", "#F9E300", "#007934")}<ellipse cx="15" cy="10" rx="2" ry="2.5" fill="#80633F" /></>,
  CL: <><rect width="30" height="20" fill="#fff" /><rect y="10" width="30" height="10" fill="#D52B1E" /><rect width="10" height="10" fill="#0039A6" />{star(5,5,"#fff",3)}</>,
  AR: <>{horizontal("#74ACDF", "#fff", "#74ACDF")}<circle cx="15" cy="10" r="2" fill="#F6B40E" /></>,
  UY: <><rect width="30" height="20" fill="#fff" />{[1,3,5,7].map(i => <rect key={i} y={i*20/9} width="30" height={20/9} fill="#0038A8" />)}<rect width="10" height="11.11" fill="#fff" /><circle cx="5" cy="5.5" r="2.5" fill="#FCD116" /></>,
  PY: <>{horizontal("#D52B1E", "#fff", "#0038A8")}<circle cx="15" cy="10" r="2" fill="none" stroke="#008542" strokeWidth=".6" />{star(15,10,"#FCD116",1)}</>,
  GI: <><rect width="30" height="20" fill="#fff" /><rect y="14" width="30" height="6" fill="#DA000C" /><path d="M10 7h10v5H10zm0-3h3v4h-3zm7 0h3v4h-3zm-4-1h4v5h-4Z" fill="#DA000C" /><path d="M15 11v5h2m-2-1h2" fill="none" stroke="#E8B128" strokeWidth="1" /></>,
  BZ: <><rect width="30" height="20" fill="#171696" /><rect width="30" height="2" fill="#CE1126" /><rect y="18" width="30" height="2" fill="#CE1126" /><circle cx="15" cy="10" r="6" fill="#fff" /><circle cx="15" cy="10" r="5" fill="none" stroke="#298A43" strokeWidth="1" /><path d="M13 8h4v5h-4Z" fill="#A17B43" /></>,
  EH: <><rect width="30" height="20" fill="#000" /><rect y="6.67" width="30" height="6.66" fill="#fff" /><rect y="13.33" width="30" height="6.67" fill="#007A3D" /><path d="M0 0 10 10 0 20Z" fill="#CE1126" /><circle cx="18" cy="10" r="2.8" fill="#CE1126" /><circle cx="19" cy="9.5" r="2.4" fill="#fff" />{star(20,10,"#CE1126",1.5)}</>,
  PH: <><rect width="30" height="10" fill="#0038A8" /><rect y="10" width="30" height="10" fill="#CE1126" /><path d="M0 0 16 10 0 20Z" fill="#fff" /><circle cx="6" cy="10" r="2.2" fill="#FCD116" />{star(2,3,"#FCD116",1.4)}{star(2,17,"#FCD116",1.4)}{star(12,10,"#FCD116",1.4)}</>,
  BE: vertical("#000", "#FDDA24", "#EF3340"),
  CH: <><rect width="30" height="20" fill="#DA291C" /><path d="M13 4h4v4h4v4h-4v4h-4v-4H9V8h4Z" fill="#fff" /></>,
  CA: <><rect width="30" height="20" fill="#fff" /><rect width="6" height="20" fill="#D80621" /><rect x="24" width="6" height="20" fill="#D80621" /><path d="m15 3 1.2 3 1.8-1-.4 4 2-2 .7 1.7 2-.4-1 3 1.3.8-5.6 3 .4 1.5-2.1-.3v2h-.6v-2l-2.1.3.4-1.5-5.6-3 1.3-.8-1-3 2 .4.7-1.7 2 2-.4-4 1.8 1Z" fill="#D80621" /></>,
  LU: horizontal("#EF3340", "#fff", "#00A3E0"),
  MC: <><rect width="30" height="20" fill="#fff" /><rect width="30" height="10" fill="#CE1126" /></>,
  HT: <><rect width="30" height="20" fill="#D21034" /><rect width="30" height="10" fill="#00209F" /><rect x="11" y="7" width="8" height="6" fill="#fff" /><path d="M15 8v4m-3-2 3-2 3 2m-6 3h6" stroke="#016A16" strokeWidth="1" /></>,
  SN: <>{vertical("#00853F", "#FDEF42", "#E31B23")}{star(15, 10, "#00853F")}</>,
  CI: vertical("#F77F00", "#fff", "#009E60"),
  GN: vertical("#CE1126", "#FCD116", "#009460"),
  BJ: <><rect width="30" height="10" fill="#FCD116" /><rect y="10" width="30" height="10" fill="#E8112D" /><rect width="12" height="20" fill="#008751" /></>,
  TG: <><rect width="30" height="20" fill="#006A4E" /><rect y="4" width="30" height="4" fill="#FFCE00" /><rect y="12" width="30" height="4" fill="#FFCE00" /><rect width="12" height="12" fill="#D21034" />{star(6, 6, "#fff", 4)}</>,
  CD: <><rect width="30" height="20" fill="#007FFF" /><path d="m-3 21 36-24" stroke="#F7D618" strokeWidth="7" /><path d="m-3 21 36-24" stroke="#CE1021" strokeWidth="4.5" />{star(5, 5, "#F7D618", 3.5)}</>,
  CG: <><rect width="30" height="20" fill="#FBDE4A" /><path d="M0 0h24L0 16Z" fill="#009543" /><path d="M30 20H6L30 4Z" fill="#DC241F" /></>,
  CM: <>{vertical("#007A5E", "#CE1126", "#FCD116")}{star()}</>,
  GA: horizontal("#009E60", "#FCD116", "#3A75C4"),
  TD: vertical("#002664", "#FECB00", "#C60C30"),
  CF: <><rect width="30" height="20" fill="#289728" /><rect width="30" height="5" fill="#003082" /><rect y="5" width="30" height="5" fill="#fff" /><rect y="15" width="30" height="5" fill="#FFCE00" /><rect x="13" width="4" height="20" fill="#D21034" />{star(5, 2.5, "#FFCE00", 2)}</>,
  GQ: <>{horizontal("#3E9A00", "#fff", "#E32118")}<path d="M0 0 9 10 0 20Z" fill="#0073CE" /><path d="M15 9v3m-2 0h4" stroke="#734A22" /><ellipse cx="15" cy="8" rx="2" ry="1.5" fill="#3E9A00" /></>,
  KM: <><rect width="30" height="20" fill="#3A75C4" /><rect width="30" height="5" fill="#FFD100" /><rect y="5" width="30" height="5" fill="#fff" /><rect y="10" width="30" height="5" fill="#EF3340" /><path d="M0 0 15 10 0 20Z" fill="#009639" /><circle cx="5" cy="10" r="3" fill="#fff" /><circle cx="6" cy="10" r="2.6" fill="#009639" />{[7, 9, 11, 13].map(y => star(7, y, "#fff", .7))}</>,
  DJ: <><rect width="30" height="10" fill="#6AB2E7" /><rect y="10" width="30" height="10" fill="#12AD2B" /><path d="M0 0 15 10 0 20Z" fill="#fff" />{star(5, 10, "#D7141A")}</>,
  SC: <><rect width="30" height="20" fill="#007A3D" /><path d="M0 20V0h30v15Z" fill="#fff" /><path d="M0 20V0h30v8Z" fill="#D62828" /><path d="M0 20V0h20Z" fill="#FCD856" /><path d="M0 20V0h10Z" fill="#003F87" /></>,
  RW: <><rect width="30" height="20" fill="#00A1DE" /><rect y="10" width="30" height="5" fill="#FAD201" /><rect y="15" width="30" height="5" fill="#20603D" /><circle cx="24" cy="5" r="2.3" fill="#E5BE01" /></>,
  BI: <><rect width="30" height="20" fill="#CE1126" /><path d="M0 0 15 10 0 20m30-20L15 10l15 10" fill="#1EB53A" /><path d="m0 0 30 20M30 0 0 20" stroke="#fff" strokeWidth="3" /><circle cx="15" cy="10" r="5" fill="#fff" />{star(15, 7, "#CE1126", 1.5)}{star(12.5, 12, "#CE1126", 1.5)}{star(17.5, 12, "#CE1126", 1.5)}</>,
  VU: <><rect width="30" height="10" fill="#D21034" /><rect y="10" width="30" height="10" fill="#009543" /><path d="M0 0 15 10 0 20Z" fill="#000" /><path d="m0 0 15 10h15M0 20l15-10" fill="none" stroke="#000" strokeWidth="5" /><path d="m0 0 15 10h15M0 20l15-10" fill="none" stroke="#FDCE12" strokeWidth="2" /><circle cx="5" cy="10" r="2" fill="none" stroke="#FDCE12" /></>,
  ML: vertical("#14B53A", "#FCD116", "#CE1126"),
  BF: <><rect width="30" height="10" fill="#EF2B2D" /><rect y="10" width="30" height="10" fill="#009E49" />{star(15, 10, "#FCD116", 3.5)}</>,
  NE: <>{horizontal("#E05206", "#fff", "#0DB02B")}<circle cx="15" cy="10" r="2.4" fill="#E05206" /></>,
  MA: <><rect width="30" height="20" fill="#C1272D" /><path d="m15 5 3 10-8-6h10l-8 6Z" fill="none" stroke="#006233" strokeWidth="1" /></>,
  DZ: <><rect width="30" height="20" fill="#fff" /><rect width="15" height="20" fill="#006233" /><circle cx="16" cy="10" r="5" fill="#D21034" /><circle cx="17.6" cy="9" r="4.2" fill="#fff" />{star(18, 10, "#D21034", 2.5)}</>,
  TN: <><rect width="30" height="20" fill="#E70013" /><circle cx="15" cy="10" r="6" fill="#fff" /><circle cx="15" cy="10" r="4" fill="#E70013" /><circle cx="16.4" cy="9.5" r="3.4" fill="#fff" />{star(17, 10, "#E70013", 2)}</>,
  MR: <><rect width="30" height="20" fill="#006233" /><rect width="30" height="3" fill="#D01C1F" /><rect y="17" width="30" height="3" fill="#D01C1F" /><path d="M9 9a6 6 0 0 0 12 0 6.1 6.1 0 0 1-12 0" fill="#FFC400" />{star(15, 7, "#FFC400", 2.5)}</>,
  LB: <><rect width="30" height="20" fill="#ED1C24" /><rect y="5" width="30" height="10" fill="#fff" /><path d="m15 6-4 3h2l-4 3h5v2h2v-2h5l-4-3h2Z" fill="#00A651" /></>,
  AD: <>{vertical("#10069F", "#FEDD00", "#D50032")}<path d="M12 7h6v5l-3 2-3-2Z" fill="#C6A158" /><path d="M13 8h4v4h-4Z" fill="#D50032" /></>,
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
  KR: <><rect width="30" height="20" fill="#fff" /><circle cx="15" cy="10" r="5" fill="#CD2E3A" /><path d="M10 10a5 5 0 0 0 10 0a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 1-5 0" fill="#0047A0" />{([[5, 4], [25, 4], [5, 16], [25, 16]] as const).map(([x, y]) => <rect key={x + "-" + y} x={x - 2} y={y - 1.5} width="4" height="3" fill="#000" transform={`rotate(${x === 5 ? -33 : 33} ${x} ${y})`} />)}</>,
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
