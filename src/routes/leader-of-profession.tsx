import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";
import { LEADER_IMAGES } from "@/components/site-data";
import { FadeIn } from "@/components/motion";

export const Route = createFileRoute("/leader-of-profession")({
  component: LeaderPage,
  head: () => ({ meta: [{ title: "Leader of profession — Dr. S. Arulrhaj" }] }),
});

const INTERNATIONAL = [
  "Sri Lanka - DFM & MD (Family Medicine) conducted jointly by IMA CGP & University of Colombo.",
  "Malaysia - Overseas branch of IMA started in Kualalumpur.",
  "FCGP Examination conducted thrice in Kualalmpur",
  "World Medical Association - Represented India in 2002 at Washington D.C",
  "Commonwealth medical Association (UK) - Vice President, Central Asia - 2005 - 2007",
  "Commonwealth medical Association (UK) - President, 2007-2010",
  "AAPI (USA) - involving in IMA - National RTA Project.",
  "Efforts are on to form a branch of IMA in Mauritius.",
  "EHealth - Asia 08 - Conference of CMA organized at Kualalumpur Nov 11-13th 2008.",
  'Common Wealth Asia symposium on "Health Workers Migration" was Organized at New Delhi 17th to 18th March 2008',
  "Associate member of World medical Association.",
  "Founder & Chairman, Commonwealth Medical Association Foundation, UK.",
  "Chairman - Commonwealth Health Professions Alliance, UK ( First Indian to achieve this honor )",
  "WONCA - Indian representative, Emergency Medicine Member",
];

const NATIONAL = [
  "Indian Medical Association",
  "National President IMA 2002-2003.",
  "Formerly Dean, Chief Patron, IMACGP & IMA eVarsity.",
  "ASSOCIATION OF PHYSICIANS OF INDIA, BOMBAY.",
  "Governing Body member - 2008 -2013",
  "President of API 2013 -2016",
];

function LeaderPage() {
  return (
    <ContentPage title="LEADER OF PROFESSION" subtitle="International Leadership">
      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LEADER_IMAGES.map((img) => (
          <FadeIn key={img.src}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full rounded-2xl border border-border object-cover shadow-md transition hover:shadow-xl"
              loading="lazy"
            />
          </FadeIn>
        ))}
      </div>
      <h3 className="font-serif text-xl text-primary">INTERNATIONAL LEADERSHIP</h3>
      <ul className="list-disc space-y-2 pl-5">
        {INTERNATIONAL.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3 className="mt-8 font-serif text-xl text-primary">CLINICAL RESEARCH</h3>
      <h3 className="font-serif text-xl text-primary">ACHIEVEMENTS</h3>
      <p>Involved in Clinical Research - India</p>
      <p>Faculty for Research Methodology International Conference, Bangalore 2008</p>
      <h3 className="font-serif text-xl text-primary">SOME OF THE RESEARCH STUDIES</h3>
      <ul className="list-disc space-y-2 pl-5">
        <li>Herbal formulation in Type II DM - Animal and Human Studies.</li>
        <li>Study of Intracardiac masses.</li>
        <li>Bad prognostic marker in AMI</li>
        <li>Lipid profile in AMI</li>
        <li>LV Aneurysm</li>
        <li>H2 Blockers in APD</li>
      </ul>
      <h3 className="mt-8 font-serif text-xl text-primary">NATIONAL LEADERSHIP</h3>
      <ul className="list-disc space-y-2 pl-5">
        {NATIONAL.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-4">
        Delivering Guest Lecturers in National conferences. Contributing Original articles for
        &quot;Medical Updates&quot; &amp; &quot;Post graduate Medicine&quot; - Books. Post graduate
        teacher over 15 years.
      </p>
    </ContentPage>
  );
}
