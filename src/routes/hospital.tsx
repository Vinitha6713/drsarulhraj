import { createFileRoute } from "@tanstack/react-router";
import { Microscope, Radio } from "lucide-react";
import { HeroBanner, MissionSections } from "@/components/content-layout";
import { FadeIn } from "@/components/motion";
import { PHOTO, SPEECH } from "@/components/site-data";

export const Route = createFileRoute("/hospital")({
  component: HospitalPage,
  head: () => ({ meta: [{ title: "Sundaram Arulrhaj Hospital — Dr. S. Arulrhaj" }] }),
});

const SPECIALITIES = [
  "Cardiology and Cardiothoracic Surgery.",
  "Infertility and Test Tube Baby Centre",
  "Diabetes and Management of its complications.",
  "Neurology and Neuro Surgery.",
  "Obstetrics, Gynecology and Pediatrics.",
  "RTA, Trauma and Medico legal Centre.",
  "Gastroenterology - Medical and Surgery.",
  "Nephrology and Urology",
];

const LAB = ["Bio Chemistry", "Micro Biology", "Pathology"];

const RADIOLOGY = [
  "Ultra Sonogram",
  "Color Doppler",
  "Endo sonogram",
  "Endoscopies",
  "Non invasive Cardiac lab",
  "CT scan",
  "MRI - attached",
  "EEG & ENMG",
  "Fully equipped Invasive Cardiovascular Laboratory.",
];

function HospitalPage() {
  return (
    <>
      <HeroBanner />
      <section className="section-mesh py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative mx-auto max-w-5xl">
            <FadeIn className="relative z-10 ml-auto w-[88%] max-w-2xl">
              <div className="image-frame overflow-hidden rounded-3xl shadow-2xl">
                <img src={PHOTO} alt="Hospital" className="aspect-[4/3] w-full object-cover md:aspect-[5/4]" loading="lazy" />
              </div>
            </FadeIn>
            <FadeIn delay={0.12} className="relative z-20 -mt-16 mr-auto w-[72%] max-w-md md:-mt-28 md:w-[55%]">
              <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl ring-1 ring-black/5">
                <img src={SPEECH} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-20 text-center md:mt-28">
            <h1 className="font-serif text-3xl font-semibold tracking-tight text-primary md:text-6xl md:leading-[1.05]">
              SUNDARAM ARULRHAJ HOSPITALS
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
              SAH is a 100 bedded, multi-specialty, medical institution in Semi Urban Area, Tuticorin,
              TamilNadu, India.SAH is being expanded to 200 beds Medical Institution.{" "}
              <a
                href="https://www.sah-hospitals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-medical underline decoration-brand/60 underline-offset-4 transition hover:text-medical-deep"
              >
                www.sah-hospitals.com
              </a>
            </p>
          </FadeIn>

          <FadeIn className="mt-20">
            <h2 className="text-center font-serif text-2xl font-semibold text-primary md:text-4xl">SPECIALITIES</h2>
            <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {SPECIALITIES.map((s) => (
                <li
                  key={s}
                  className="group flex items-start gap-3 rounded-2xl border border-white/80 bg-white/90 p-4 text-left text-sm leading-snug text-foreground/90 shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-xl md:p-5 md:text-[15px]"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-brand to-medical shadow-sm" />
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn className="mt-20">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef2ff] p-8 text-center shadow-2xl md:p-14">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.85_0.08_15/0.25),transparent_50%)]"
                aria-hidden
              />
              <div className="relative">
                <h2 className="font-serif text-2xl font-semibold text-primary md:text-4xl">SAH HEALTH POLICY</h2>
                <p className="mt-6 text-base font-semibold tracking-wide text-medical md:text-lg">
                  WORLD CLASS HEALTH CARE REACHING TO COMMON MAN
                </p>
                <p className="mt-2 text-base font-semibold tracking-wide text-medical md:text-lg">
                  THE BEST HEALTH CARE WITHIN YOUR REACH
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
                  CARE, COMMITMENT, CHARITY & QUALITY SERVICES
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:gap-10">
            <FadeIn>
              <div className="glass-card h-full rounded-[1.75rem] p-8 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep">
                    <Microscope className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary md:text-2xl">LABORATORY</h3>
                </div>
                <ul className="space-y-3 border-t border-border/50 pt-6 text-[15px] leading-relaxed text-muted-foreground">
                  {LAB.map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="glass-card h-full rounded-[1.75rem] p-8 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep">
                    <Radio className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary md:text-2xl">RADIOLOGY & IMAGING</h3>
                </div>
                <ul className="space-y-3 border-t border-border/50 pt-6 text-[15px] leading-relaxed text-muted-foreground">
                  {RADIOLOGY.map((r) => (
                    <li key={r} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <MissionSections />
    </>
  );
}
