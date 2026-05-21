import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";
import { Award, BookOpen, BookMarked, Globe } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/academic")({
  component: AcademicPage,
  head: () => ({ meta: [{ title: "Academic — Dr. S. Arulrhaj" }] }),
});

const ITEMS = [
  "University First Rank holder and Gold Medal winner in MD (Internal Medicine)",
  "Awarded PhD (Honoris Causa) California Public University, USA",
  "Awarded FRCP by Royal College of Physicians & Surgeon, Glasgow, UK",
  "Awarded FRCP by Royal College of Physicians, London, UK",
  "Distinguished Professor, (Honorary) Dr. MGR Medical University, Chennai, India",
  "Certificate of Fellowship WONCA - 2022",
  "CME Excellence Leadership Award - 2021",
  "Won many awards in Cardiology and Medicine in National and International levels.",
  "Contributing chapters regularly for Medicine update Book for 15 years.",
  "Addressed number of scientific forums in India and abroad.",
  "Presented clinical research papers in national conferences.",
  "Delivered many prestigious orations throughout India",
  "Registered for PhD with Dr. MGR Medical University.",
  "Conducted teaching programmes, Seminars and Conferences at Tamilnadu, National level and International level (WOCON-99)",
  "Observer for DFM Examinations in Colombo, Srilanka.",
  "Conducted FCGP Examinations in India and Malaysia.",
  "Conducting DFM & MD Family Medicine Examinations in India, in collaboration with University of Colombo.",
  "Teaching DNB (Medicine) post Graduate students.",
  "Championed Non Invasive Cardiology & Intensive Cares including Invasive Ventilation in South Tamilnadu.",
  "Worked closely with National Board of Examinations and Medical Council of India.",
];

const EDITOR = [
  "Journal Medi Guide - meant for Practicing Physician of India",
  "The Family Doctor - meant for Family Physician",
  "Clinical Practice Journal - meant for Physicians of Commonwealth",
];

const BOOKS = [
  "Text Book of Family Medicine",
  "Emergency Room Protocols",
  "Diabetic Update",
  "Clinical Medicine Update Book 2016",
];

function AcademicPage() {
  return (
    <ContentPage title="Academic Profile" subtitle="ACADEMIC HONORS">
      <div className="text-left mb-10">
        <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-2xl">
          Distinguished career marked by university gold medals, fellowships from Royal Colleges of London & Glasgow, and international publications.
        </p>
      </div>

      <StaggerContainer className="grid gap-8 lg:grid-cols-12">
        {/* Left column: Academic profile bullet items */}
        <div className="lg:col-span-7 space-y-6">
          <StaggerItem className="glass-card rounded-[2rem] border border-white/60 bg-white/40 p-8 md:p-10 shadow-xl">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">ACCOLADES & MILESTONES</h3>
            </div>
            <ul className="space-y-4 text-[15px] leading-relaxed text-muted-foreground dark:text-slate-300">
              {ITEMS.map((item) => (
                <li key={item} className="flex gap-3 items-start border-b border-slate-100/40 dark:border-slate-800/20 pb-3 last:border-0 last:pb-0">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
                  <span className="font-semibold text-foreground/80 dark:text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>
        </div>

        {/* Right column: Editorial / Books / eJournals */}
        <div className="lg:col-span-5 space-y-8">
          <StaggerItem className="glass-card rounded-3xl border border-white/60 bg-white/40 p-8 shadow-xl">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
                <BookOpen className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">CHIEF EDITOR</h3>
            </div>
            <ul className="space-y-4 text-[15px] leading-relaxed text-muted-foreground dark:text-slate-300">
              {EDITOR.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
                  <span className="font-semibold text-foreground/80 dark:text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="glass-card rounded-3xl border border-white/60 bg-white/40 p-8 shadow-xl">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
                <BookMarked className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">PUBLISHED TEXTBOOKS</h3>
            </div>
            <ul className="space-y-4 text-[15px] leading-relaxed text-muted-foreground dark:text-slate-300">
              {BOOKS.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand ring-4 ring-brand/10" />
                  <span className="font-semibold text-foreground/80 dark:text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="glass-card rounded-3xl border border-white/60 bg-white/40 p-8 shadow-xl">
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/40">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-medical/15 to-brand/20 text-medical-deep dark:text-primary">
                <Globe className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-primary dark:text-white uppercase">EJOURNALS</h3>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white/50 dark:bg-slate-800/30 p-5 border border-white/40">
                <h4 className="text-[15px] font-extrabold text-primary dark:text-white">The Family Doctor</h4>
                <a href="https://www.familydoctorjournal.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-medical-deep dark:text-primary underline mt-2 block">www.familydoctorjournal.com</a>
              </div>
              <div className="rounded-2xl bg-white/50 dark:bg-slate-800/30 p-5 border border-white/40">
                <h4 className="text-[15px] font-extrabold text-primary dark:text-white">Current Practice Journal</h4>
                <a href="https://www.currentpracticejournal.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-medical-deep dark:text-primary underline mt-2 block">www.currentpracticejournal.com</a>
              </div>
            </div>
          </StaggerItem>
        </div>
      </StaggerContainer>
    </ContentPage>
  );
}
