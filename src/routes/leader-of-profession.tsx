import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";
import { LEADER_IMAGES } from "@/components/site-data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Globe, Award, Heart, Shield } from "lucide-react";

export const Route = createFileRoute("/leader-of-profession")({
  component: LeaderPage,
  head: () => ({ meta: [{ title: "Leader of profession — Dr. S. Arulrhaj" }] }),
});

const INTERNATIONAL = [
  "Sri Lanka - DFM & MD (Family Medicine) conducted jointly by IMA CGP & University of Colombo.",
  "Malaysia - Overseas branch of IMA started in Kuala Lumpur.",
  "FCGP Examination conducted thrice in Kuala Lumpur.",
  "World Medical Association - Represented India in 2002 at Washington D.C.",
  "Commonwealth Medical Association (UK) - Vice President, Central Asia - 2005 - 2007.",
  "Commonwealth Medical Association (UK) - President, 2007-2010.",
  "AAPI (USA) - Involving in IMA - National RTA Project.",
  "Efforts are on to form a branch of IMA in Mauritius.",
  "EHealth - Asia 08 - Conference of CMA organized at Kuala Lumpur Nov 11-13th 2008.",
  'Commonwealth Asia Symposium on "Health Workers Migration" was organized at New Delhi 17th to 18th March 2008.',
  "Associate member of World Medical Association.",
  "Founder & Chairman, Commonwealth Medical Association Foundation, UK.",
  "Chairman - Commonwealth Health Professions Alliance, UK (First Indian to achieve this honor).",
  "WONCA - Indian representative, Emergency Medicine Member.",
];

const NATIONAL = [
  "Indian Medical Association.",
  "National President IMA 2002-2003.",
  "Formerly Dean, Chief Patron, IMACGP & IMA eVarsity.",
  "ASSOCIATION OF PHYSICIANS OF INDIA, BOMBAY.",
  "Governing Body member - 2008 - 2013.",
  "President of API 2013 - 2016.",
];

const LEADER_DETAILS = [
  {
    src: LEADER_IMAGES[0]?.src || "",
    alt: "Commonwealth Medical Association Leadership",
    heading: "CMA President (UK)",
    desc: "Unanimously elected President of the Commonwealth Medical Association (UK) representing 54 countries from 2007 to 2010.",
  },
  {
    src: LEADER_IMAGES[1]?.src || "",
    alt: "National Medical Association President",
    heading: "National President, IMA",
    desc: "Led the largest professional organization of modern medicine doctors in India from 2002 to 2003.",
  },
  {
    src: LEADER_IMAGES[2]?.src || "",
    alt: "WMA Global Representative",
    heading: "WMA Representative",
    desc: "Represented India in the World Medical Association in Washington D.C., advancing global public health policies.",
  },
  {
    src: LEADER_IMAGES[3]?.src || "",
    alt: "Association of Physicians of India President",
    heading: "President, API",
    desc: "Elected President of the prestigious API from 2013 to 2016, driving physician education and clinical updates.",
  },
  {
    src: LEADER_IMAGES[4]?.src || "",
    alt: "Best Doctor Award",
    heading: "Best Doctor State Award",
    desc: "Honored by the Government of Tamil Nadu for outstanding professional services as a Senior Physician and Cardiologist.",
  },
  {
    src: LEADER_IMAGES[5]?.src || "",
    alt: "Commonwealth Health Professions Alliance",
    heading: "Chairman, CHPA (UK)",
    desc: "The first Indian medical professional to be elected Chairman of the Commonwealth Health Professions Alliance, UK.",
  },
  {
    src: LEADER_IMAGES[6]?.src || "",
    alt: "Fellowship & Academic Accolades",
    heading: "Fellowship of Royal Colleges (FRCP)",
    desc: "Awarded FRCP by both the Royal College of Physicians, London, and the Royal College of Physicians & Surgeons, Glasgow.",
  },
];

function BlockSection({ title, icon: Icon, items }: { title: string; icon: any; items: string[] }) {
  return (
    <StaggerItem className="glass-card rounded-[2.2rem] border border-white/60 bg-white/40 p-8 md:p-10 shadow-xl">
      <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">{title}</h3>
      </div>
      <ul className="space-y-4 text-[15px] leading-relaxed text-muted-foreground dark:text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3 items-start border-b border-slate-100/40 dark:border-slate-800/20 pb-3.5 last:border-0 last:pb-0">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
            <span className="font-semibold text-foreground/80 dark:text-foreground/90">{item}</span>
          </li>
        ))}
      </ul>
    </StaggerItem>
  );
}

function LeaderPage() {
  return (
    <ContentPage title="LEADER OF PROFESSION" subtitle="PROFESSIONAL LEADERSHIP" variant="leader">
      <div className="text-left mb-10">
        <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-2xl">
          Advancing global medical standards through clinical research milestones, international leadership, and public health policies.
        </p>
      </div>

      {/* Grid of Leader Images - Redesigned as modern luxury cards */}
      <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LEADER_DETAILS.map((item) => (
          <FadeIn key={item.src} className="group relative">
            <div
              className="absolute -inset-1.5 rounded-[2.2rem] bg-gradient-to-br from-brand/20 via-transparent to-medical/15 opacity-0 blur-lg transition duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <div className="glass-card h-full flex flex-col overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-brand/35">
              {/* Image on top */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-[2rem]">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition duration-750 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-deep/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>
              {/* Content below image */}
              <div className="flex-1 p-6 text-left flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-primary dark:text-white transition group-hover:text-medical-deep">
                    {item.heading}
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                    {item.alt}
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <StaggerContainer className="grid gap-8 lg:grid-cols-2">
        <BlockSection title="INTERNATIONAL LEADERSHIP" icon={Globe} items={INTERNATIONAL} />
        
        <div className="space-y-8">
          <StaggerItem className="glass-card rounded-[2.2rem] border border-white/60 bg-white/40 p-8 md:p-10 shadow-xl">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
                <Heart className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">CLINICAL RESEARCH</h3>
            </div>
            
            <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground dark:text-slate-300">
              <div className="flex gap-3 items-start border-b border-slate-100/40 dark:border-slate-800/20 pb-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
                <span className="font-semibold text-foreground/80 dark:text-foreground/90">Involved in Clinical Research - India</span>
              </div>
              <div className="flex gap-3 items-start border-b border-slate-100/40 dark:border-slate-800/20 pb-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
                <span className="font-semibold text-foreground/80 dark:text-foreground/90">Faculty for Research Methodology International Conference, Bangalore 2008</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/40">
              <h4 className="text-[16px] font-bold text-primary dark:text-white uppercase mb-4">SOME OF THE RESEARCH STUDIES</h4>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Herbal formulation in Type II DM - Animal and Human Studies.",
                  "Study of Intracardiac masses.",
                  "Bad prognostic marker in AMI",
                  "Lipid profile in AMI",
                  "LV Aneurysm",
                  "H2 Blockers in APD"
                ].map((study) => (
                  <li key={study} className="flex gap-2.5 items-start">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-medical-deep" />
                    <span className="text-sm font-semibold text-foreground/75 dark:text-foreground/85">{study}</span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>

          <BlockSection title="NATIONAL LEADERSHIP" icon={Shield} items={NATIONAL} />
          
          <StaggerItem className="glass-card rounded-[2.2rem] border border-white/60 bg-white/40 p-8 shadow-xl">
            <p className="text-[15px] font-semibold leading-relaxed text-muted-foreground dark:text-slate-300">
              Delivering guest lectures in national conferences regularly. Contributing original scientific articles for &quot;Medical Updates&quot; &amp; &quot;Post Graduate Medicine&quot; reference books. Serving as an active postgraduate teacher for over 15 years.
            </p>
          </StaggerItem>
        </div>
      </StaggerContainer>
    </ContentPage>
  );
}
