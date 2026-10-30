import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { softwareBrands, softwareDisplay } from "@/config/software";
import { isFigureConfirmed } from "@/config/figures";
import { useI18n } from "@/i18n";
import { softwareCompatibleLabel, softwareCopy, softwarePlainTitle } from "@/i18n/software";
import { Section } from "./primitives";

export function SoftwarePartners() {
  const { locale } = useI18n();
  const copy = softwareCopy[locale];
  // "Compatible avec" mode: only confirmed connections. Numbered title only once the figure is validated.
  const brands = softwareDisplay.onlyConnected
    ? softwareBrands.filter((b) => softwareDisplay.connectedIds.includes(b.name))
    : softwareBrands;
  const title = softwareDisplay.onlyConnected
    ? softwareCompatibleLabel[locale]
    : isFigureConfirmed("softwarePartners")
      ? copy.title
      : softwarePlainTitle[locale];
  const viewport = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setReduced(media.matches); if (media.matches) setPaused(true); };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = viewport.current;
    if (!el || paused || hovered || focused) return;
    let frame = 0;
    let last = 0;
    let position = el.scrollLeft;
    const tick = (time: number) => {
      if (last) position += Math.min(time - last, 50) * 0.035;
      last = time;
      const loopWidth = el.scrollWidth / 2;
      if (position >= loopWidth) position -= loopWidth;
      el.scrollLeft = position;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, hovered, focused]);

  const move = (direction: number) => {
    setPaused(true);
    viewport.current?.scrollBy({ left: direction * 400, behavior: reduced ? "instant" : "smooth" });
  };

  // "Compatible avec" mode with no confirmed connection yet: hide the strip entirely.
  if (brands.length === 0) return null;

  return (
    <Section id="software-partners" tone="muted" className="border-y border-border/60 py-8 md:py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-2xl leading-tight text-branddeep sm:text-3xl">{title}</h2>
        <div className="flex items-center gap-2" dir="ltr">
          <Button variant="outline" size="icon" onClick={() => move(-1)} aria-label={copy.previous} title={copy.previous}><ChevronLeft /></Button>
          <Button variant="outline" size="icon" onClick={() => setPaused((value) => !value)} aria-label={paused ? copy.play : copy.pause} title={paused ? copy.play : copy.pause}>{paused ? <Play /> : <Pause />}</Button>
          <Button variant="outline" size="icon" onClick={() => move(1)} aria-label={copy.next} title={copy.next}><ChevronRight /></Button>
        </div>
      </div>
      <div ref={viewport} className="software-scroll mt-6 overflow-x-auto" dir="ltr"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
        onTouchStart={() => setPaused(true)} onWheel={() => setPaused(true)}>
        <div className="flex w-max">
          {[0, 1].map((group) => (
            <ul key={group} className="flex shrink-0 gap-4 pe-4" aria-hidden={group === 1 ? true : undefined}>
              {brands.map((brand) => (
                <li key={brand.name} className="w-44 shrink-0">
                  <a href={brand.website} target="_blank" rel="noopener noreferrer" tabIndex={group === 1 ? -1 : undefined}
                    className="flex h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 transition-colors hover:border-brand/50">
                    {brand.logo ? <img src={brand.logo} alt={brand.name} width={136} height={40} loading="lazy" className="h-10 w-full object-contain" /> : <span className="font-display text-xl text-branddeep">微医</span>}
                    <span className="text-center text-sm font-medium leading-tight text-foreground">{brand.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">{copy.note}</p>
    </Section>
  );
}