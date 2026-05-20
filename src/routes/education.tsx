import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";
import { SPEECH } from "@/components/site-data";

export const Route = createFileRoute("/education")({
  component: EducationPage,
  head: () => ({ meta: [{ title: "Education — Dr. S. Arulrhaj" }] }),
});

function EducationPage() {
  return (
    <ContentPage title="Education Profile" subtitle="Education" image={SPEECH}>
      <h3 className="font-serif text-xl text-primary">POST GRADUATE MEDICAL COURSES</h3>
      <ul className="list-disc space-y-2 pl-5">
        <li>FCGP - IMA</li>
        <li>DFM - Srilanka</li>
        <li>MD Family Medicine, Srilanka</li>
        <li>PGDEM - GWU- USA</li>
        <li>MRCGP Int - RCGP, UK</li>
        <li>Many more courses are in pipeline</li>
      </ul>
      <h3 className="font-serif text-xl text-primary">PARA MEDICAL COURSES</h3>
      <ul className="list-disc space-y-2 pl-5">
        <li>Dr. M.G.R. Medical University</li>
        <li>Manonmaniam Sundaranar University</li>
        <li>Vinayaga Mission University</li>
        <li>Tamilnadu Open University</li>
      </ul>
      <h3 className="font-serif text-xl text-primary">GOVT OF TAMIL NADU</h3>
      <ul className="list-disc space-y-2 pl-5">
        <li>Diploma in Nursing & Midwifery</li>
        <li>Diploma in Female Nursing Assistant</li>
        <li>Diploma in Lab technology</li>
        <li>Diploma in Physiotherapy</li>
      </ul>
      <h3 className="font-serif text-xl text-primary">E-LEARNING</h3>
      <p>
        IMA Evarsity - www.imaevarsity.com
        <br />
        Commonwealth Medical Evarsity - www.commonwealthmedicalevarsity.com
      </p>
    </ContentPage>
  );
}
