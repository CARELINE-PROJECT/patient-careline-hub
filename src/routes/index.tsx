import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Ear,
  Globe2,
  HeartHandshake,
  Languages,
  Lock,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-careline.jpg";
import patientHands from "@/assets/patient-hands.jpg";
import doctorGreeting from "@/assets/doctor-greeting.jpg";
import coordinator from "@/assets/team-coordinator.jpg";
import teamOffice from "@/assets/team-office.jpg";
import { useI18n } from "@/i18n";
import { siteConfig } from "@/config/site";
import {
  AuroraBackdrop,
  DemoNote,
  Eyebrow,
  FeatureCard,
  Glass,
  Section,
  SectionHeading,
  Photo,
  Reveal,
} from "@/components/site/primitives";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Careline — Medical appointments, made simple" },
      {
        name: "description",
        content:
          "Careline finds and books appointments with trusted healthcare professionals for patients, practices and companies, in 10 languages worldwide.",
      },
      { property: "og:title", content: "Careline — Medical appointments, made simple" },
      {
        property: "og:description",
        content:
          "Careline finds and books appointments with trusted healthcare professionals for patients, practices and companies, in 10 languages worldwide.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();

  const steps = [1, 2, 3, 4].map((n) => ({
    n,
    title: t(`how.s${n}t`),
    description: t(`how.s${n}d`),
  }));

  const serviceIcons = [
    Stethoscope,
    CalendarCheck,
    HeartHandshake,
    Sparkles,
    Users,
    Building2,
    Globe2,
    Languages,
    ShieldCheck,
    Ear,
  ];

  const advantages = [
    { icon: <Ear className="size-5" />, t: t("advantages.a1t"), d: t("advantages.a1d") },
    { icon: <Users className="size-5" />, t: t("advantages.a2t"), d: t("advantages.a2d") },
    { icon: <Globe2 className="size-5" />, t: t("advantages.a3t"), d: t("advantages.a3d") },
    { icon: <Scale className="size-5" />, t: t("advantages.a4t"), d: t("advantages.a4d") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-secondary/40 px-5 py-16 sm:px-8 md:py-24">
        <AuroraBackdrop />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="anim-rise">
            <Eyebrow>{t("hero.badge")}</Eyebrow>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-branddeep sm:text-5xl md:text-[3.6rem]">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/request"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                {t("nav.request")}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3.5 text-sm font-medium text-branddeep transition-colors hover:bg-secondary"
              >
                {t("nav.discover")}
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {[
                { icon: <Lock className="size-4" />, label: t("hero.trust1") },
                { icon: <Languages className="size-4" />, label: t("hero.trust2") },
                { icon: <Globe2 className="size-4" />, label: t("hero.trust3") },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span className="text-brand" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border/70 shadow-[0_40px_80px_-40px_rgba(16,49,56,0.55)]">
              <img
                src={heroImage}
                width={1600}
                height={1200}
                alt="A Careline coordinator assisting a patient by phone in a bright clinic reception"
                className="h-full w-full object-cover"
              />
            </div>
            <Glass className="anim-float absolute -bottom-8 left-4 w-[17rem] p-5 sm:left-auto sm:right-[-1.5rem]">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("hero.cardTitle")}
              </p>
              <p className="mt-2 font-display text-lg text-branddeep">{t("hero.matched")}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-secondary px-3 py-1 text-brand">
                  {t("hero.inClinic")}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-brand">
                  {t("hero.teleconsult")}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-brand">
                  {t("hero.inDays")}
                </span>
              </div>
              <p className="mt-3 text-[0.7rem] text-muted-foreground">{t("hero.demoNote")}</p>
            </Glass>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section className="py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: siteConfig.stats.professionals, label: t("stats.professionals") },
            { value: siteConfig.stats.countries, label: t("stats.countries") },
            { value: siteConfig.stats.specialties, label: t("stats.specialties") },
            { value: siteConfig.stats.languages, label: t("stats.languages") },
          ].map((s) => (
            <Glass key={s.label} className="p-6 text-center">
              <p className="font-display text-4xl tracking-tight text-brand">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Glass>
          ))}
        </div>
        <DemoNote>{t("stats.note")}</DemoNote>
      </Section>

      {/* How it works */}
      <Section tone="muted">
        <SectionHeading eyebrow={t("how.eyebrow")} title={t("how.title")} lead={t("how.lead")} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <Photo src={patientHands} alt="Les mains d'une patiente tenant son téléphone à la table de sa cuisine" />
          </Reveal>
          <Reveal delay={140}>
            <Photo src={doctorGreeting} alt="Un médecin accueillant une patiente avec le sourire dans son cabinet" />
          </Reveal>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n}>
              <Glass className="h-full p-6">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-brand font-display text-lg text-primary-foreground">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-lg tracking-tight text-branddeep">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Glass>
            </li>
          ))}
        </ol>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          lead={t("services.lead")}
        />
        <Reveal className="mt-12">
          <Photo src={coordinator} alt="Une coordinatrice Careline écoutant une patiente, carnet à la main" />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceIcons.map((Icon, i) => (
            <FeatureCard
              key={i}
              icon={<Icon className="size-5" />}
              title={t(`services.i${i + 1}t`)}
              description={t(`services.i${i + 1}d`)}
            />
          ))}
        </div>
      </Section>

      {/* Advantages */}
      <Section tone="muted">
        <SectionHeading eyebrow={t("advantages.eyebrow")} title={t("advantages.title")} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <FeatureCard key={a.t} icon={a.icon} title={a.t} description={a.d} />
          ))}
        </div>
      </Section>

      {/* Security teaser */}
      <Section tone="deep">
        <AuroraBackdrop invert />
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionHeading
            invert
            eyebrow={t("security.eyebrow")}
            title={t("security.title")}
            lead={t("security.lead")}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <FeatureCard
                key={n}
                invert
                icon={<ShieldCheck className="size-5" />}
                title={t(`security.s${n}t`)}
                description={t(`security.s${n}d`)}
              />
            ))}
            <Link
              to="/security"
              className="inline-flex items-center gap-2 text-sm font-medium text-aqua underline underline-offset-4"
            >
              {t("nav.security")}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Audiences */}
      <Section>
        <Reveal className="mb-12">
          <Photo src={teamOffice} alt="Une équipe internationale échangeant autour d'une table de réunion" />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              to: "/professionals" as const,
              eyebrow: t("professionals.eyebrow"),
              title: t("professionals.title"),
              lead: t("professionals.lead"),
              cta: t("professionals.cta"),
              icon: <Stethoscope className="size-5" />,
            },
            {
              to: "/companies" as const,
              eyebrow: t("corporations.eyebrow"),
              title: t("corporations.title"),
              lead: t("corporations.lead"),
              cta: t("corporations.cta"),
              icon: <Building2 className="size-5" />,
            },
          ].map((card) => (
            <Glass key={card.to} className="p-8">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-brand">
                {card.icon}
              </span>
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {card.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-2xl tracking-tight text-branddeep">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.lead}</p>
              <Link
                to={card.to}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand px-5 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-secondary"
              >
                {card.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Glass>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
