import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";
import { Cpu, Globe, GraduationCap } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/digital-health")({
  component: DigitalHealthPage,
  head: () => ({ meta: [{ title: "Digital Health — Dr. S. Arulrhaj" }] }),
});

function DigitalHealthPage() {
  return (
    <ContentPage title="Digitalhealth Profile" subtitle="DIGITAL HEALTH">
      <div className="text-left mb-10">
        <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-2xl">
          Pioneering virtual medicine, telemedicine models, and remote diagnostic systems to bridge modern healthcare gaps.
        </p>
      </div>

      <StaggerContainer className="grid gap-8 lg:grid-cols-2">
        {/* Working Models */}
        <StaggerItem className="glass-card rounded-3xl border border-white/60 bg-white/40 p-8 shadow-xl">
          <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
              <Cpu className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">WORKING MODELS</h3>
          </div>
          <ul className="space-y-4 text-[15px] leading-relaxed text-muted-foreground dark:text-slate-300">
            {[
              "Digital Global Healthcard - Patient Data, Emergency care. Mobile reading. www.imaxgsmglobal.net",
              "Hello Doctor - Mobile App for follow up of Critical Care Patients.",
              "Halo Health App - For Home Care & Health Tourism.",
              "Health Accelerated 2015 Online Consultants opinion.",
              "Telemedicine SAH linking Airport Patients & Fisherman Centre.",
              "Family Doc - APK - for Family Physicians linking with Patients.",
              "104 - Mobile Telehealth unit Hyderabad. Pilot model is working."
            ].map((model) => (
              <li key={model} className="flex gap-3 items-start">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
                <span className="font-semibold text-foreground/80 dark:text-foreground/90">{model}</span>
              </li>
            ))}
          </ul>
        </StaggerItem>

        {/* Digital Learning */}
        <StaggerItem className="glass-card rounded-3xl border border-white/60 bg-white/40 p-8 shadow-xl">
          <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">DIGITAL LEARNING & JOURNALS</h3>
          </div>
          
          <div className="space-y-6">
            <div className="rounded-2xl bg-white/50 dark:bg-slate-800/30 p-5 border border-white/40">
              <span className="text-[10px] font-bold text-brand uppercase tracking-wider block mb-1">Interactive Portal</span>
              <h4 className="text-[16px] font-extrabold text-primary dark:text-white">IMA EVARSITY</h4>
              <p className="text-sm text-muted-foreground mt-1 mb-2">Online Continued Professional Development Program for Indian Doctors.</p>
              <a href="https://www.imaevarsity.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-medical-deep dark:text-primary underline">www.imaevarsity.com</a>
            </div>

            <div className="rounded-2xl bg-white/50 dark:bg-slate-800/30 p-5 border border-white/40">
              <span className="text-[10px] font-bold text-brand uppercase tracking-wider block mb-1">Global Education</span>
              <h4 className="text-[16px] font-extrabold text-primary dark:text-white">COMMONWEALTH MEDICAL EVARSITY</h4>
              <p className="text-sm text-muted-foreground mt-1 mb-2">Online Post graduation Program for Commonwealth Doctors.</p>
              <a href="https://www.commonwealthmedicalevarsity.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-medical-deep dark:text-primary underline">www.commonwealthmedicalevarsity.com</a>
            </div>

            <div className="rounded-2xl bg-white/50 dark:bg-slate-800/30 p-5 border border-white/40">
              <span className="text-[10px] font-bold text-brand uppercase tracking-wider block mb-1">Medical Publishing</span>
              <h4 className="text-[16px] font-extrabold text-primary dark:text-white">EJOURNALS</h4>
              <p className="text-sm text-muted-foreground mt-1 mb-2">The Family Doctor & Current Practice Journal.</p>
              <div className="flex flex-col gap-1 mt-1">
                <a href="https://www.familydoctorjournal.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-medical-deep dark:text-primary underline">www.familydoctorjournal.com</a>
                <a href="https://www.currentpracticejournal.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-medical-deep dark:text-primary underline">www.currentpracticejournal.com</a>
              </div>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </ContentPage>
  );
}
