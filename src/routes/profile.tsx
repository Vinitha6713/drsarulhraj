import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";
import { WELCOME_TEXT } from "@/components/site-data";
import { Star, ShieldAlert, Award, Heart } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({ meta: [{ title: "Profile — Dr. S. Arulrhaj" }] }),
});

function ProfilePage() {
  return (
    <ContentPage title="About Me" subtitle="BIOGRAPHY">
      <StaggerContainer className="space-y-8">
        <StaggerItem>
          <p className="text-[16px] md:text-lg leading-[1.85] font-medium text-foreground/80 dark:text-foreground/90">
            {WELCOME_TEXT}
          </p>
        </StaggerItem>

        <StaggerItem>
          <p className="text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground dark:text-slate-300">
            Started my practice with a 5 Bedded hospital in the name of my affectionate father Late
            Sri. M. Sundaram Nadar. The public in and around Tuticorin District patronized me fully and
            depending upon the need, I was able to add-on high Tech Medical Diagnostic and Treatment
            facilities at the hospital & made Tuticorin as a Mecca of Healthcare for the people of
            Southern Districts of Tamilnadu.
          </p>
        </StaggerItem>

        <StaggerItem>
          <p className="text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground dark:text-slate-300">
            With the support of the people and professional colleagues, the present Sundaram Arulrhaj
            Hospital was born to be the first ISO 9001:2000 certified 100 Bedded Cardiac and Multi
            specialty Hospital with all Tertiary care Medical facilities under one roof.
          </p>
        </StaggerItem>

        {/* Vision & Mission Cards - Redesigned as modern luxury blocks */}
        <StaggerItem className="grid gap-6 sm:grid-cols-2 mt-10">
          <div className="glass-card rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-xl relative overflow-hidden">
            <span className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand/10 blur-xl" />
            <div className="flex items-center gap-3.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/20 text-brand-dark">
                <Star className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">VISION</h3>
            </div>
            <p className="text-2xl font-black text-brand-dark dark:text-brand tracking-wide uppercase">HEALTHY INDIA</p>
          </div>

          <div className="glass-card rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-xl relative overflow-hidden">
            <span className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-medical/10 blur-xl" />
            <div className="flex items-center gap-3.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-medical/20 text-medical-deep">
                <Heart className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">MISSION</h3>
            </div>
            <p className="text-2xl font-black text-medical dark:text-primary tracking-wide uppercase">DOCTOR SOCIETY FRIENDSHIP</p>
          </div>
        </StaggerItem>

        <StaggerItem className="pt-6">
          <p className="text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground dark:text-slate-300">
            This public Health vision pushed me up to the International arena as Vice President of
            Commonwealth Medical Association 2005-2007 at the meeting in Ghana. Further, commonwealth
            countries unanimously elected me as the President of Commonwealth Medical Association for
            2007-2010.
          </p>
        </StaggerItem>

        {/* Unique Honor Callout Box */}
        <StaggerItem className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-white via-[#fcfbf9] to-[#fff6f6] dark:from-slate-800 dark:to-slate-900 p-8 shadow-xl text-center">
          <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-brand/15 text-brand-dark dark:text-brand font-bold text-[9px] uppercase tracking-wider mb-3">
            <Award className="h-4 w-4" />
            National Pride
          </span>
          <p className="text-xl font-black tracking-tight text-primary dark:text-brand-dark uppercase">
            FIRST INDIAN TO GET THIS UNIQUE HONOR
          </p>
          <p className="text-xs font-bold text-muted-foreground mt-2 uppercase tracking-widest">
            Commonwealth Medical Association President
          </p>
        </StaggerItem>

        <StaggerItem>
          <p className="text-[15px] md:text-[16px] leading-[1.8] text-muted-foreground dark:text-slate-300">
            This international Position enlarged my vision towards the Health of Developing & under
            Developing Countries.
          </p>
        </StaggerItem>

        <StaggerItem className="glass-card rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-xl">
          <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
              <Award className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">ADDITIONAL DESIGNATIONS</h3>
          </div>
          <ul className="space-y-4 text-[15px] leading-relaxed text-muted-foreground dark:text-slate-300">
            <li className="flex gap-3 items-start">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
              <span className="font-semibold text-foreground/80 dark:text-foreground/90">Founder & First Chairman of Commonwealth Health Professions Alliance, UK - 2010 - 2014</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
              <span className="font-semibold text-foreground/80 dark:text-foreground/90">Founder & Chairman of Commonwealth Medical Association Trust - 2013 onwards</span>
            </li>
          </ul>
        </StaggerItem>

        {/* Public Health Alert Banner */}
        <StaggerItem className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-brand/10 to-brand/20 p-5 border border-brand/20">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/30 text-brand-dark">
            <ShieldAlert className="h-5.5 w-5.5" />
          </span>
          <div>
            <h4 className="text-[15px] font-bold text-brand-dark dark:text-brand uppercase tracking-wider">PREVENT DENGUE & SWINE FLU</h4>
            <p className="text-xs text-muted-foreground font-semibold mt-0.5">PUBLIC HEALTH CAMPAIGN DIRECTIVE</p>
          </div>
        </StaggerItem>

        <StaggerItem className="pt-4 border-t border-slate-100 dark:border-slate-800/40">
          <p className="text-xs font-extrabold uppercase tracking-widest text-medical-deep/70 dark:text-primary/70">
            OFFICIAL SIGNATURE PROFILE
          </p>
          <p className="text-lg font-extrabold text-primary dark:text-white mt-1.5">Prof. DR. S. ARULRHAJ, MD., PhD; FRCP(G), FRCP(L), MBA;</p>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-0.5">CHAIRMAN & SENIOR PHYSICIAN</p>
        </StaggerItem>
      </StaggerContainer>
    </ContentPage>
  );
}
