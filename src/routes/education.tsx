import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";
import { SPEECH } from "@/components/site-data";
import { GraduationCap, Award, Globe, BookOpen } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/education")({
  component: EducationPage,
  head: () => ({ meta: [{ title: "Education — Dr. S. Arulrhaj" }] }),
});

function BlockSection({ title, icon: Icon, items }: { title: string; icon: any; items: string[] }) {
  return (
    <StaggerItem className="glass-card rounded-3xl border border-white/60 bg-white/40 p-8 shadow-xl">
      <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">{title}</h3>
      </div>
      <ul className="space-y-4 text-[15px] leading-relaxed text-muted-foreground dark:text-slate-300">
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

function EducationPage() {
  return (
    <ContentPage title="Education Profile" subtitle="MEDICAL EDUCATION" image={SPEECH}>
      <div className="text-left mb-10">
        <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-2xl">
          Nurturing future healthcare specialists through fully certified post graduate, paramedical, and digital learning programs.
        </p>
      </div>

      <StaggerContainer className="grid gap-8 sm:grid-cols-2">
        <BlockSection
          title="POST GRADUATE MEDICAL"
          icon={GraduationCap}
          items={[
            "FCGP - IMA",
            "DFM - Srilanka",
            "MD Family Medicine, Srilanka",
            "PGDEM - GWU - USA",
            "MRCGP Int - RCGP, UK",
            "Many more courses are in pipeline",
          ]}
        />
        
        <BlockSection
          title="PARA MEDICAL BOARD"
          icon={Award}
          items={[
            "Dr. M.G.R. Medical University",
            "Manonmaniam Sundaranar University",
            "Vinayaga Mission University",
            "Tamilnadu Open University",
          ]}
        />

        <BlockSection
          title="GOVT OF TAMIL NADU"
          icon={BookOpen}
          items={[
            "Diploma in Nursing & Midwifery",
            "Diploma in Female Nursing Assistant",
            "Diploma in Lab technology",
            "Diploma in Physiotherapy",
          ]}
        />

        <StaggerItem className="glass-card rounded-3xl border border-white/60 bg-white/40 p-8 shadow-xl">
          <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
              <Globe className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">E-LEARNING PORTALS</h3>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-white/50 dark:bg-slate-800/30 p-5 border border-white/40">
              <h4 className="text-[16px] font-extrabold text-primary dark:text-white">IMA eVarsity</h4>
              <p className="text-xs text-muted-foreground mt-1 mb-2">Virtual Continued Professional Development Program</p>
              <a href="https://www.imaevarsity.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-medical-deep dark:text-primary underline">www.imaevarsity.com</a>
            </div>

            <div className="rounded-2xl bg-white/50 dark:bg-slate-800/30 p-5 border border-white/40">
              <h4 className="text-[16px] font-extrabold text-primary dark:text-white">Commonwealth eVarsity</h4>
              <p className="text-xs text-muted-foreground mt-1 mb-2">Post Graduate virtual courses for global practitioners</p>
              <a href="https://www.commonwealthmedicalevarsity.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-medical-deep dark:text-primary underline">www.commonwealthmedicalevarsity.com</a>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </ContentPage>
  );
}
