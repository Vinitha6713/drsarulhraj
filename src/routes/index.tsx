import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Download, FileText, Video, ArrowRight } from "lucide-react";
import {
  API_EBOOK,
  PILLARS,
  PORTRAIT,
  RESOURCES,
  SERVICE_ANGLE,
  SERVICE_ELLIPSE,
  UHC_DOC,
  VIDEO_BLOCKS,
  WELCOME_TEXT,
} from "@/components/site-data";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem, ScaleIn, Counter } from "@/components/motion";
import { HomeHero } from "@/components/content-layout";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Home — Dr. S. Arulrhaj" }],
  }),
});

const pillarClass = {
  one: "pillar-one",
  two: "pillar-two",
  three: "pillar-three",
  four: "pillar-four",
} as const;

function Home() {
  return (
    <>
      <HomeHero />

      {/* Position Document Callout - Redesigned as a Premium Editorial Announcement */}
      <section className="section-mesh py-20 md:py-28 relative z-20 -mt-16">
        <FadeIn className="mx-auto max-w-5xl px-6">
          <a href={UHC_DOC} download className="group block">
            <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-10 text-center border border-white/60 bg-white/45 shadow-2xl transition-all duration-500 hover:shadow-medical/15 hover:border-brand/40">
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-80"
                aria-hidden
              />
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 text-brand-dark dark:text-brand font-bold text-[11px] uppercase tracking-widest mb-6 border border-brand/20">
                <FileText className="h-4.5 w-4.5" />
                Featured Document
              </span>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-primary transition group-hover:text-medical-deep md:text-5xl md:leading-tight">
                <span className="bg-gradient-to-r from-primary via-medical-deep to-primary bg-clip-text text-transparent dark:from-white dark:to-slate-300">
                  Robust <span className="text-brand-dark dark:text-brand">Indian</span> HealthCare Reforming Towards{" "}
                  <span className="text-brand-dark dark:text-brand">UHC Position Document</span>
                </span>
              </h1>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-medical-deep dark:text-primary group-hover:gap-3 transition-all">
                Download Position Document
                <Download className="h-4 w-4" />
              </div>
            </div>
          </a>
        </FadeIn>
      </section>

      {/* Interactive Statistics Section */}
      <section className="relative overflow-hidden py-10 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/10">
        <div className="mx-auto max-w-5xl px-6">
          <StaggerContainer className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {[
              { label: "Years of Service", value: 45, suffix: "+" },
              { label: "ICU Bed Strength", value: 100, suffix: "+" },
              { label: "PG Teaching Tenure", value: 15, suffix: "+ Yrs" },
              { label: "CMA Countries Represented", value: 54, suffix: "" },
            ].map((stat, idx) => (
              <StaggerItem key={idx}>
                <div className="glass-card flex flex-col justify-center items-center p-6 text-center rounded-2xl border border-white/60 bg-white/30 dark:bg-slate-900/30 shadow-md hover:border-brand/40 transition">
                  <div className="text-4xl md:text-5xl font-black text-brand-dark dark:text-brand tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Slogan Marquee Ticker */}
      <section className="relative w-full overflow-hidden border-y border-slate-100 dark:border-slate-800/40 bg-white/20 dark:bg-slate-900/10 py-5 backdrop-blur-sm">
        <div className="flex select-none overflow-hidden">
          <div className="animate-marquee flex gap-12 text-sm font-semibold tracking-[0.15em] text-primary/60 dark:text-white/40 uppercase whitespace-nowrap">
            {[
              "Evidence-Based Modern Medicine",
              "Commonwealth Medical Association Foundation",
              "Tuticorin Mecca of Healthcare",
              "Care · Charity · Commitment",
              "Indian Medical Association Leadership",
              "Association of Physicians of India",
              "First ISO 9001 Certified Tertiary Hospital in South TN",
              "Say No to Mixopathy advocacy",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-12">
                <span>{text}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              </div>
            ))}
          </div>
          <div className="animate-marquee flex gap-12 text-sm font-semibold tracking-[0.15em] text-primary/60 dark:text-white/40 uppercase whitespace-nowrap" aria-hidden>
            {[
              "Evidence-Based Modern Medicine",
              "Commonwealth Medical Association Foundation",
              "Tuticorin Mecca of Healthcare",
              "Care · Charity · Commitment",
              "Indian Medical Association Leadership",
              "Association of Physicians of India",
              "First ISO 9001 Certified Tertiary Hospital in South TN",
              "Say No to Mixopathy advocacy",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-12">
                <span>{text}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography Section - Redesigned with Grid Accents and Balanced Space */}
      <section className="relative overflow-hidden border-y border-border bg-white dark:bg-slate-900/40 py-24 md:py-32">
        <div className="orb orb-brand h-[420px] w-[420px] -top-32 -left-24" aria-hidden />
        <div className="orb orb-medical h-[380px] w-[380px] bottom-[-120px] right-[-80px]" aria-hidden />
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-[120%] w-1/2 -translate-y-1/2 bg-[radial-gradient(circle,oklch(0.62_0.09_235/0.05),transparent_65%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SlideIn from="left">
              <div className="group/img relative">
                <div
                  className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-brand/20 via-transparent to-medical/15 opacity-60 blur-2xl transition group-hover/img:opacity-100"
                  aria-hidden
                />
                <div className="image-frame relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/40 shadow-2xl">
                  <img src={PORTRAIT} alt="about image" className="w-full object-cover" loading="lazy" />
                </div>
              </div>
            </SlideIn>
          </div>
          <div className="lg:col-span-7">
            <SlideIn from="right" delay={0.08}>
              <div className="relative">
                <span className="inline-block px-3.5 py-1 rounded-full bg-medical/10 text-medical-deep dark:text-primary font-bold text-[10px] uppercase tracking-widest mb-6 border border-medical/20">
                  Who We Are
                </span>
                <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl md:leading-[1.08]">
                  <span className="animated-gradient-text">WELCOME TO MY WEBSITE</span>
                </h2>
                <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-brand to-medical animate-pulse-glow" aria-hidden />
                <p className="mt-10 text-[16px] font-normal leading-[1.85] text-muted-foreground dark:text-slate-300 md:text-lg">
                  {WELCOME_TEXT}
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Services and Pillars Section - Redesigned with Modern Grid and Custom Cards */}
      <section className="relative overflow-hidden section-mesh py-28 md:py-36">
        <img
          src={SERVICE_ANGLE}
          alt="hero angle"
          className="pointer-events-none absolute -right-4 top-8 w-44 opacity-20 md:w-80 md:opacity-25"
          aria-hidden
        />
        <img
          src={SERVICE_ELLIPSE}
          alt="Ellipse"
          className="pointer-events-none absolute -left-8 bottom-12 w-36 opacity-15 md:w-64"
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <FadeIn className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <a href={API_EBOOK} download className="group">
              <div className="glass-card flex items-center justify-center gap-3.5 px-8 py-5 rounded-2xl border border-white/60 bg-white/40 shadow-xl transition hover:border-brand/40">
                <Download className="h-6 w-6 text-brand-dark group-hover:scale-110 transition duration-300" />
                <span className="text-xl font-bold tracking-tight text-primary dark:text-white group-hover:text-medical-deep transition">
                  API Digital E-book
                </span>
              </div>
            </a>
            <a href={UHC_DOC} download className="group">
              <div className="glass-card flex items-center justify-center gap-3.5 px-8 py-5 rounded-2xl border border-white/60 bg-white/40 shadow-xl transition hover:border-medical/40">
                <FileText className="h-6 w-6 text-medical group-hover:scale-110 transition duration-300" />
                <span className="text-xl font-bold tracking-tight text-primary dark:text-white group-hover:text-medical-deep transition">
                  UHC Position Document
                </span>
              </div>
            </a>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-gradient-to-r from-medical/10 to-brand/10 text-medical-deep dark:text-primary font-bold text-[10px] uppercase tracking-widest mb-6 border border-white/40">
              Our Capabilities
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-primary dark:text-white md:text-6xl">
              Services We Offer
            </h2>
          </FadeIn>
        </div>

        {/* Resources Grid */}
        <StaggerContainer className="relative mx-auto mt-16 grid max-w-5xl gap-6 px-6 sm:grid-cols-2">
          {RESOURCES.map((r, i) => (
            <StaggerItem key={r.title}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/card glass-card flex items-center justify-between gap-6 rounded-2xl p-7 border border-white/60 bg-white/40 transition hover:scale-[1.02]"
              >
                <div className="space-y-2 text-left">
                  <h3 className="text-left text-xl font-bold text-primary dark:text-white transition group-hover/card:text-medical-deep md:text-2xl">
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground dark:text-slate-300">
                    {r.desc}
                  </p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep transition duration-300 group-hover/card:scale-110 group-hover/card:shadow-lg group-hover/card:shadow-medical/10">
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/card:translate-x-1" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pillars Grid */}
        <StaggerContainer className="relative mx-auto mt-24 grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <StaggerItem key={p.title}>
              <div
                className={`${pillarClass[p.style]} group/pillar relative h-full overflow-hidden rounded-[2rem] border p-8 shadow-lg transition duration-500 hover:scale-[1.03] hover:shadow-2xl`}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 transition group-hover/pillar:opacity-100"
                  aria-hidden
                />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-medical-deep/70 dark:text-primary/70">
                  Pillar 0{i + 1}
                </span>
                <h4 className="relative text-xl font-bold text-primary dark:text-white mt-4">{p.title}</h4>
                <p className="relative mt-5 text-[15px] leading-relaxed text-muted-foreground dark:text-slate-300">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Video Lectures Section - Redesigned with Curved Embed Wrappers and Dark Mode support */}
        <div className="relative mx-auto mt-36 max-w-7xl space-y-24 px-6 md:space-y-36">
          {VIDEO_BLOCKS.map((v, i) => (
            <ScaleIn key={`${v.title}-${i}`}>
              <div
                className="grid items-center gap-12 rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-white via-[#faf9fc] to-[#f2f6fc] dark:from-slate-800/80 dark:via-slate-900/60 dark:to-slate-950/40 p-8 shadow-xl md:grid-cols-2 md:gap-20 md:p-16 transition-all duration-500 hover:shadow-2xl hover:border-brand/35"
              >
                <div
                  className={`relative aspect-video overflow-hidden rounded-[2rem] shadow-2xl border border-white/20 ring-1 ring-slate-900/5 group/video ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div
                    className="absolute -inset-1 bg-gradient-to-tr from-brand/30 to-medical/25 opacity-30 blur-2xl"
                    aria-hidden
                  />
                  <iframe
                    src={v.embed}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="relative h-full w-full rounded-[2rem]"
                  />
                  {/* Pulsing Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition duration-500 group-hover/video:scale-105">
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-medical/90 dark:bg-primary/95 text-white shadow-xl animate-pulse-glow border border-white/20">
                      <svg className="h-6.5 w-6.5 fill-white translate-x-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand-dark dark:text-brand font-bold text-[10px] uppercase tracking-wider mb-6">
                    <Video className="h-4 w-4" />
                    Lecture Series
                  </span>
                  <h3 className="text-3xl font-extrabold tracking-tight text-primary dark:text-white md:text-5xl">{v.title}</h3>
                  <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-brand to-medical" aria-hidden />
                  <p className="mt-8 whitespace-pre-line text-[16px] leading-relaxed text-muted-foreground dark:text-slate-300 md:text-lg md:leading-[1.75]">
                    {v.text}
                  </p>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </section>
    </>
  );
}
