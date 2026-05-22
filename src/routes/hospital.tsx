import { createFileRoute } from "@tanstack/react-router";
import { Microscope, Radio, ShieldAlert, CheckCircle } from "lucide-react";
import { InnerPageHero, MissionSections } from "@/components/content-layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
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
      <InnerPageHero
        variant="hospital"
        title="100-bedded multi-specialty institution in Tuticorin, Tamil Nadu"
        subtitle="SUNDARAM ARULRHAJ HOSPITALS"
      />
      <section className="section-mesh relative z-20 -mt-12 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Dual Overlay Editorial Photos */}
          <div className="relative mx-auto max-w-5xl">
            <FadeIn className="relative z-10 ml-auto w-[88%] max-w-2xl">
              <div className="image-frame overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/60">
                <img src={PHOTO} alt="Hospital" className="aspect-[4/3] w-full object-cover md:aspect-[5/4]" loading="lazy" />
              </div>
            </FadeIn>
            <FadeIn delay={0.12} className="relative z-20 -mt-16 mr-auto w-[72%] max-w-md md:-mt-28 md:w-[50%]">
              <div className="overflow-hidden rounded-[2rem] border-4 border-white dark:border-slate-800 shadow-2xl ring-1 ring-slate-900/5">
                <img src={SPEECH} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-20 text-center md:mt-28">
            <p className="mx-auto max-w-3xl text-[16px] leading-relaxed text-muted-foreground dark:text-slate-300 md:text-xl">
              SAH is a 100 bedded, multi-specialty, medical institution in Semi Urban Area, Tuticorin,
              TamilNadu, India. SAH is being expanded to 200 beds Medical Institution.{" "}
              <a
                href="https://www.sah-hospitals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-medical underline decoration-brand/60 underline-offset-4 transition hover:text-medical-deep"
              >
                www.sah-hospitals.com
              </a>
            </p>
          </FadeIn>

          {/* Specialities Grid */}
          <div className="mt-28">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand-dark dark:text-brand font-bold text-[10px] uppercase tracking-widest mb-4">
                Clinical Excellence
              </span>
              <h2 className="text-3xl font-extrabold text-primary dark:text-white md:text-5xl">SPECIALITIES</h2>
            </div>
            <StaggerContainer className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
              {SPECIALITIES.map((s) => (
                <StaggerItem
                  key={s}
                  className="group flex items-center gap-5 rounded-2xl border border-white/60 bg-white/40 dark:bg-slate-900/40 p-6 text-left shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-brand/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary shadow-inner">
                    <CheckCircle className="h-5 w-5" />
                  </span>
                  <span className="font-bold text-foreground/80 dark:text-foreground/90 text-base md:text-[17px]">{s}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Health Policy Card */}
          <FadeIn className="mt-28">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef2ff] dark:from-slate-800/80 dark:via-slate-900/60 dark:to-slate-950/40 p-10 text-center shadow-2xl md:p-16">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.62_0.09_235/0.1),transparent_50%)]"
                aria-hidden
              />
              <div className="relative max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand-dark dark:text-brand font-bold text-[10px] uppercase tracking-wider mb-6">
                  <ShieldAlert className="h-4 w-4" />
                  Our Core Values
                </span>
                <h2 className="text-3xl font-extrabold text-primary dark:text-white md:text-5xl tracking-tight">SAH HEALTH POLICY</h2>
                <div className="mt-8 space-y-3">
                  <p className="text-lg font-bold tracking-wide text-medical-deep dark:text-primary md:text-xl uppercase">
                    WORLD CLASS HEALTH CARE REACHING TO COMMON MAN
                  </p>
                  <p className="text-lg font-bold tracking-wide text-brand-dark dark:text-brand md:text-xl uppercase">
                    THE BEST HEALTH CARE WITHIN YOUR REACH
                  </p>
                </div>
                <p className="mx-auto mt-8 max-w-xl text-[15px] font-semibold uppercase tracking-widest text-muted-foreground">
                  CARE, COMMITMENT, CHARITY & QUALITY SERVICES
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Laboratory and Radiology grid */}
          <StaggerContainer className="mt-28 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <StaggerItem>
              <div className="glass-card h-full rounded-[2.5rem] p-10 md:p-14 border border-white/60 bg-white/40 transition-all hover:shadow-2xl">
                <div className="mb-8 flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary shadow-inner">
                    <Microscope className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-primary dark:text-white md:text-3xl">LABORATORY</h3>
                </div>
                <ul className="space-y-4 border-t border-border/50 pt-8 text-[15px] md:text-base leading-relaxed text-muted-foreground dark:text-slate-300">
                  {LAB.map((l) => (
                    <li key={l} className="flex items-center gap-4">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
                      <span className="font-semibold text-foreground/80 dark:text-foreground/90">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="glass-card h-full rounded-[2.5rem] p-10 md:p-14 border border-white/60 bg-white/40 transition-all hover:shadow-2xl">
                <div className="mb-8 flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary shadow-inner">
                    <Radio className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-primary dark:text-white md:text-3xl">RADIOLOGY & IMAGING</h3>
                </div>
                <ul className="space-y-4 border-t border-border/50 pt-8 text-[15px] md:text-base leading-relaxed text-muted-foreground dark:text-slate-300">
                  {RADIOLOGY.map((r) => (
                    <li key={r} className="flex items-center gap-4">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
                      <span className="font-semibold text-foreground/80 dark:text-foreground/90">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
      <MissionSections />
    </>
  );
}
