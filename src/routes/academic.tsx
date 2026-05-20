import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";

export const Route = createFileRoute("/academic")({
  component: AcademicPage,
  head: () => ({ meta: [{ title: "Academic — Dr. S. Arulrhaj" }] }),
});

const ITEMS = [
  "University First Rank holder and Gold Medal winner in MD (Internal Medicine)",
  "Awarded PhD (Honoris Causa) California Public University, USA",
  "Awarded FRCP by Royal College of Physicians & Surgeon, Glasgow, UK",
  "Awarded FRCP by Royal College of Physicians, London, UK",
  "Distinguished Professor, (Honorary)Dr. MGR Medical University, Chennai, India",
  "Certificate of Fellowship WONCA -2022",
  "CME Excellence Leadership Award - 2021",
  "Won many awards in Cardiology and Medicine in National and International levels.",
  "Contributing chapters regularly for Medicine update Book for 15 years.",
  "Addressed number of scientific forums in India and abroad.",
  "Presented clinical research papers in national conferences.",
  "Delivered many prestigious orations throughout India",
  "Registered for PhD with Dr. MGR Medical University.",
  "Conducted teaching programmes. Seminars and Conferences at Tamilnadu, National level and International level (WOCON-99)",
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
  "Clinical Practise Journal - meant for Physicians of Common Wealth",
];

const BOOKS = [
  "Text Book of Family Medicine",
  "Emergency Room Protocols",
  "Diabetic Update",
  "Clinical Medicine Update Book 2016",
];

function AcademicPage() {
  return (
    <ContentPage title="Academic Profile" subtitle="ACADEMIAN">
      <ul className="list-disc space-y-2 pl-5">
        {ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3 className="font-serif text-xl text-primary">EDITOR.</h3>
      <ul className="list-disc space-y-2 pl-5">
        {EDITOR.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3 className="font-serif text-xl text-primary">Text Book of Family Medicine</h3>
      <ul className="list-disc space-y-2 pl-5">
        {BOOKS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3 className="font-serif text-xl text-primary">EJOURNALS</h3>
      <p>
        The Family Doctor - www.familydoctorjournal.com
        <br />
        Current Practice Journal - www.currentpracticejournal.com
      </p>
    </ContentPage>
  );
}
