import { useRef, useState } from "react";
import { ArrowDown, Globe2, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { globalOffices, isActiveOffice, mapPosition } from "@/config/globalOffices";
import { worldLandPath } from "@/config/worldMap";
import { useI18n } from "@/i18n";
import { globalOfficeCopy, officeLabel } from "@/i18n/globalOffices";
import { cn } from "@/lib/utils";

export function GlobalPresence() {
  const { locale } = useI18n();
  const c = globalOfficeCopy(locale);
  const [selected, setSelected] = useState("antsirabe");
  const cards = useRef<Record<string, HTMLElement | null>>({});
  const office = globalOffices.find(o => o.id === selected) ?? globalOffices[0];
  if (!office) return null;
  const city = (id: string, fallback: string) => officeLabel(c.cities, id, fallback);

  function showDetails(id: string) {
    setSelected(id);
    cards.current[id]?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "center" });
    cards.current[id]?.focus({ preventScroll: true });
  }

  return (
    <section className="global-presence px-5 py-12 sm:px-8 md:py-16" aria-labelledby="global-presence-title">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-xs font-medium uppercase text-global-accent"><Globe2 className="size-4" aria-hidden="true" />{c.eyebrow}</div>
        <h2 id="global-presence-title" className="mt-3 font-sans text-3xl font-semibold leading-tight sm:text-4xl">{c.title}</h2>
        <p className="mt-3 max-w-2xl text-base text-global-muted">{c.lead}</p>

        <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
          <div className="global-map relative aspect-[1000/440] w-full" role="group" aria-label={c.map} dir="ltr">
            <svg viewBox="0 0 1000 440" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path d={worldLandPath} className="global-land" />
              {globalOffices.slice(1).map(hub => {
                const start = mapPosition(globalOffices[0]?.coordinates ?? [0, 0]);
                const end = mapPosition(hub.coordinates);
                return <path key={hub.id} d={`M${start.x * 10},${start.y * 4.4} Q${(start.x + end.x) * 5},${Math.max(8, Math.min(start.y, end.y) * 4.4 - 85)} ${end.x * 10},${end.y * 4.4}`} className={cn("global-route", selected === hub.id && "is-selected")} />;
              })}
            </svg>
            {globalOffices.map(hub => {
              const point = mapPosition(hub.coordinates);
              const labelBelow = hub.id === "antsirabe" || hub.id === "singapore";
              return <Button key={hub.id} variant="ghost" size="icon" aria-label={city(hub.id, hub.city)} aria-pressed={selected === hub.id} title={city(hub.id, hub.city)} onClick={() => setSelected(hub.id)} className={cn("global-pin absolute z-10 size-9 -translate-x-1/2 -translate-y-1/2 rounded-full p-0 sm:size-11", selected === hub.id && "is-selected")} style={{ left: `${point.x}%`, top: `${point.y}%` }}><span className="global-pin-dot" /><span className={cn("global-map-label absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium sm:text-[11px]", labelBelow ? "top-full mt-1.5" : "bottom-full mb-1.5")}>{city(hub.id, hub.city)}</span></Button>;
            })}
          </div>
          <div className="border-s-2 border-global-accent ps-5" aria-live="polite" aria-atomic="true">
            <h3 className="text-2xl font-semibold">{city(office.id, office.city)}</h3>
            <p className="mt-1 text-sm text-global-muted">{officeLabel(c.countries, office.id, office.country)}</p>
            <p className="mt-3 text-sm">{office.district}</p>
            <p className="mt-1 text-xs text-global-muted">{c.types[office.type]}</p>
            <Button variant="global" className="mt-4" onClick={() => showDetails(office.id)}>{c.details}<ArrowDown aria-hidden="true" /></Button>
          </div>
        </div>
        <p className="mt-2 text-[10px] text-global-muted">{c.attribution}</p>

        <div className="mt-7 flex max-w-4xl items-start gap-3 border-y border-global-border py-5 text-sm leading-relaxed text-global-muted"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-global-accent" aria-hidden="true" /><p>{c.notice}</p></div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {globalOffices.map(hub => <article key={hub.id} ref={el => { cards.current[hub.id] = el; }} tabIndex={-1} aria-labelledby={`office-${hub.id}`} className={cn("global-office flex min-w-0 flex-col rounded-lg border border-global-border bg-global-surface p-6", selected === hub.id && "is-selected")}>
            <span aria-hidden="true" className="text-2xl">{hub.flag}</span>
            <h3 id={`office-${hub.id}`} className="mt-4 text-xl font-semibold">{city(hub.id, hub.city)}</h3>
            <p className="mt-1 text-xs text-global-muted">{officeLabel(c.countries, hub.id, hub.country)} · {c.types[hub.type]}</p>
            <p className="mt-4 text-sm font-medium">{hub.district}</p>
            <div className="mt-4 flex items-start gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-global-accent" aria-hidden="true" /><div><p className="text-[11px] text-global-muted">{hub.status === "validated" ? c.validatedAddress : hub.id === "new-york" ? c.indicative : c.address}</p><p className="mt-1 text-sm leading-relaxed"><bdi>{hub.address}</bdi></p></div></div>
            {hub.status !== "validated" && <p className="mt-2 text-xs leading-relaxed text-global-muted">{officeLabel(c.verification, hub.id, "")}</p>}
            {!isActiveOffice(hub) && <p className="mt-3 text-[11px] leading-relaxed text-global-muted">{c.terms}</p>}
          </article>)}
        </div>
      </div>
    </section>
  );
}