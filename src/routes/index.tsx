import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { FadeIn, SlideIn } from "@/components/motion";
import { HeroBanner } from "@/components/content-layout";
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
      <HeroBanner />

      <section className="section-mesh py-16 md:py-24">
        <FadeIn className="mx-auto max-w-5xl px-6">
          <a href={UHC_DOC} download className="group block">
            <div className="glass-card relative overflow-hidden rounded-3xl p-8 text-center transition duration-500 hover:shadow-2xl hover:shadow-medical/10 md:p-12">
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-80"
                aria-hidden
              />
              <h1 className="font-serif text-2xl font-semibold leading-snug tracking-tight text-primary transition group-hover:text-medical-deep md:text-4xl md:leading-tight">
                <span className="bg-gradient-to-r from-primary via-medical-deep to-primary bg-clip-text text-transparent">
                  Robust<span className="text-brand">Indian</span> HealthCare Reforming Towards{" "}
                  <span className="text-brand">UHC Position Document</span>
                </span>
              </h1>
            </div>
          </a>
        </FadeIn>
      </section>

      <section className="relative overflow-hidden border-y border-border/40 bg-white py-20 md:py-28">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-[120%] w-1/2 -translate-y-1/2 bg-[radial-gradient(circle,oklch(0.92_0.04_15/0.5),transparent_65%)]"
          aria-hidden
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <SlideIn from="left">
            <div className="group/img relative">
              <div
                className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-brand/25 via-transparent to-medical/20 opacity-70 blur-xl transition group-hover/img:opacity-100"
                aria-hidden
              />
              <div className="image-frame relative">
                <img src={PORTRAIT} alt="about image" className="w-full object-cover" loading="lazy" />
              </div>
            </div>
          </SlideIn>
          <SlideIn from="right" delay={0.08}>
            <div className="relative">
              <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary md:text-5xl md:leading-[1.08]">
                WELCOME TO MY WEBSITE
              </h2>
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-brand to-medical" aria-hidden />
              <h6 className="mt-8 text-base font-normal leading-[1.8] text-muted-foreground md:text-lg">
                {WELCOME_TEXT}
              </h6>
            </div>
          </SlideIn>
        </div>
      </section>

      <section className="relative overflow-hidden section-mesh py-24 md:py-32">
        <img
          src={SERVICE_ANGLE}
          alt="hero angle"
          className="pointer-events-none absolute -right-4 top-8 w-44 opacity-[0.35] md:w-80 md:opacity-45"
          aria-hidden
        />
        <img
          src={SERVICE_ELLIPSE}
          alt="Ellipse"
          className="pointer-events-none absolute -left-8 bottom-12 w-36 opacity-30 md:w-64"
          aria-hidden
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <a href={API_EBOOK} download>
              <h1 className="font-serif text-3xl font-semibold text-primary underline decoration-brand/50 decoration-2 underline-offset-8 transition hover:text-medical-deep md:text-4xl">
                API Digital E-book
              </h1>
            </a>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-16">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary md:text-5xl">Services We Offer</h2>
          </FadeIn>
        </div>

        <div className="relative mx-auto mt-14 grid max-w-5xl gap-4 px-6 sm:grid-cols-2">
          {RESOURCES.map((r, i) => (
            <FadeIn key={r.title} delay={0.07 * i}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/card glass-card flex items-center justify-between gap-4 rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-medical/10 md:p-8"
              >
                <h2 className="text-left font-serif text-xl font-semibold text-primary underline decoration-brand/40 decoration-1 underline-offset-4 transition group-hover/card:text-medical-deep md:text-2xl">
                  {r.title}
                </h2>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep transition group-hover/card:scale-110">
                  <ExternalLink className="h-5 w-5" />
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <div className="relative mx-auto mt-20 grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <FadeIn key={p.title} delay={0.08 * i}>
              <div
                className={`${pillarClass[p.style]} group/pillar relative h-full overflow-hidden rounded-2xl border-2 p-7 shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 transition group-hover/pillar:opacity-100"
                  aria-hidden
                />
                <h4 className="relative font-serif text-lg font-bold text-primary underline decoration-1">{p.title}</h4>
                <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="relative mx-auto mt-24 max-w-7xl space-y-16 px-6 md:space-y-24">
          {VIDEO_BLOCKS.map((v, i) => (
            <FadeIn key={`${v.title}-${i}`} delay={0.05 * i}>
              <div
                className="grid items-center gap-10 rounded-[2rem] border border-white/60 bg-gradient-to-br from-white via-[#faf8fc] to-[#f0f4fa] p-6 shadow-xl md:grid-cols-2 md:gap-12 md:p-12"
              >
                <div
                  className={`relative aspect-video overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div
                    className="absolute -inset-1 bg-gradient-to-tr from-brand/30 to-medical/25 opacity-50 blur-xl"
                    aria-hidden
                  />
                  <iframe
                    src={v.embed}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="relative h-full w-full rounded-2xl"
                  />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="font-serif text-2xl font-semibold tracking-tight text-primary md:text-4xl">{v.title}</h3>
                  <p className="mt-5 whitespace-pre-line text-[15px] leading-relaxed text-muted-foreground md:text-lg">
                    {v.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
