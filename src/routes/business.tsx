import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/business")({
  component: BusinessPage,
  head: () => ({ meta: [{ title: "Business — Dr. S. Arulrhaj" }] }),
});

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <StaggerItem className="glass-card rounded-3xl border border-white/60 bg-white/40 p-8 shadow-xl transition-all duration-500 hover:scale-[1.01] hover:border-brand/40">
      <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
          <Briefcase className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">{title}</h3>
      </div>
      <ul className="space-y-4 text-[15px] md:text-base leading-relaxed text-muted-foreground dark:text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
            <span className="font-semibold text-foreground/80 dark:text-foreground/90">{item}</span>
          </li>
        ))}
      </ul>
    </StaggerItem>
  );
}

function BusinessPage() {
  return (
    <ContentPage title="Business Profile" subtitle="BUSINESS VENTURES" variant="business">
      <div className="text-left mb-10">
        <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-2xl">
          Overview of the medical, pharmaceutical, and ecological ventures spearheaded by Prof. Dr. S. Arulrhaj.
        </p>
      </div>

      <StaggerContainer className="grid gap-8 sm:grid-cols-2">
        <Section
          title="ENVIRONMENTAL PROJECTS"
          items={[
            "Chairman - Arul's Environment & Green Ozone, India.",
            "Director - Green Ozone, UK (BMW).",
            "Biogas extraction plant in Pipeline.",
            "Enviros LLP - Mumbai",
            "Biogas extraction plant in Pipeline.",
          ]}
        />
        <Section
          title="LEARNING PHILOSOPHY"
          items={["Targeted growth through smart working.", "Be an active thinker and a passionate doer."]}
        />
        <Section
          title="PHARMACEUTICALS"
          items={[
            "Founder & Chairman - Zenox Lifescience Ltd, Domestic Pharma Marketing.",
            "Founder & Chairman - Logix Life Science Ltd, International Pharma Marketing.",
            "Founder & Chairman - Grandix Pharmaceuticals, Chennai (1996 - 2007) Manufacturing & Marketing unit.",
            "Overseas Pharma Marketing ventures.",
            "MRCGP Int - RCGP, UK Nutraceuticals.",
          ]}
        />
        <Section
          title="HEALTH CARE VENTURES"
          items={[
            "Chairman, Tuticorin Diagnostic Centre, Hi-tech Medical Diagnosis Centre, Tuticorin.",
            "Chairman, Tuticorin CT Scan & MRI Scan Research Institute Ltd, Tuticorin & Tirunelveli.",
            "Health Tourism - Promoting Health Tourism from Malaysia, Srilanka, Maldives, etc.",
            'Lifestyle centers - "Health Wealth", Tuticorin.',
            "Promoting Health Cities, Pharmahubs, Medical & Dental Colleges in African and other developing countries.",
            "Clinical Research Organization - Promoting and taking part in clinical research organizations in India.",
            "Director, Pushpanjali Publications, 2006 - 2010, New Delhi.",
            "Advisor, Pushpanjali Crossley Hospitals, 2006 - 2014, New Delhi.",
          ]}
        />
      </StaggerContainer>
    </ContentPage>
  );
}
