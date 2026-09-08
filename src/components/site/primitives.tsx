import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "plain",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "plain" | "muted" | "deep";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden px-5 py-20 sm:px-8 md:py-28",
        tone === "muted" && "bg-secondary/60",
        tone === "deep" && "bg-branddeep text-primary-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, invert }: { children: ReactNode; invert?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]",
        invert
          ? "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground/90"
          : "border-border bg-card/70 text-brand",
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  invert,
  center,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  invert?: boolean;
  center?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow invert={invert}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-5 font-display text-3xl leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]",
          invert ? "text-primary-foreground" : "text-branddeep",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            invert ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function Glass({
  children,
  className,
  invert,
}: {
  children: ReactNode;
  className?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border backdrop-blur-xl transition-shadow",
        invert
          ? "border-primary-foreground/15 bg-primary-foreground/[0.07]"
          : "border-border/70 bg-card/70 shadow-[0_1px_2px_rgba(16,49,56,0.04),0_18px_40px_-28px_rgba(16,49,56,0.35)] hover:shadow-[0_1px_2px_rgba(16,49,56,0.05),0_26px_60px_-30px_rgba(16,49,56,0.45)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  invert,
}: {
  icon?: ReactNode;
  title: string;
  description: string;
  invert?: boolean;
}) {
  return (
    <Glass invert={invert} className="h-full p-6">
      {icon ? (
        <div
          className={cn(
            "mb-4 flex size-11 items-center justify-center rounded-2xl",
            invert ? "bg-primary-foreground/10 text-aqua" : "bg-secondary text-brand",
          )}
          aria-hidden="true"
        >
          {icon}
        </div>
      ) : null}
      <h3
        className={cn(
          "font-display text-lg tracking-tight",
          invert ? "text-primary-foreground" : "text-branddeep",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-2 text-sm leading-relaxed",
          invert ? "text-primary-foreground/75" : "text-muted-foreground",
        )}
      >
        {description}
      </p>
    </Glass>
  );
}

/** Soft aqua light field used behind hero and deep sections. */
export function AuroraBackdrop({ invert }: { invert?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className={cn(
          "anim-caustic absolute -left-24 -top-24 size-[28rem] rounded-full blur-3xl",
          invert ? "bg-aqua/20" : "bg-aqua/25",
        )}
      />
      <div
        className={cn(
          "anim-float2 absolute -bottom-32 right-[-6rem] size-[32rem] rounded-full blur-3xl",
          invert ? "bg-brand/40" : "bg-brandlight/50",
        )}
      />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-secondary/50 px-5 pb-16 pt-14 sm:px-8 md:pb-20 md:pt-20">
      <AuroraBackdrop />
      <div className="mx-auto w-full max-w-6xl">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="anim-rise mt-5 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-branddeep sm:text-5xl md:text-[3.4rem]">
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function DemoNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 rounded-2xl border border-dashed border-border bg-muted/50 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}
