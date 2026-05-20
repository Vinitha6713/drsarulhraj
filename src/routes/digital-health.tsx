import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";

export const Route = createFileRoute("/digital-health")({
  component: DigitalHealthPage,
  head: () => ({ meta: [{ title: "Digital Health — Dr. S. Arulrhaj" }] }),
});

function DigitalHealthPage() {
  return (
    <ContentPage title="Digitalhealth Profile" subtitle="Digitalhealth">
      <h3 className="font-serif text-xl text-primary">DIGITAL HEALTH CURRENT WORKING MODELS</h3>
      <ul className="list-disc space-y-2 pl-5">
        <li>Digital Global Healthcard - Patient Data, Emergency care. Mobile reading.www.imaxgsmglobal.net</li>
        <li>Hello Doctor - Mobile App for follow up of Critical Care Patients.</li>
        <li>Halo Health App - For Home Care & Health Tourism.</li>
        <li>Health Accelerated 2015 Online Consultants opinion.</li>
        <li>Telemedicine SAH linking Airport Patients & Fisherman Centre.</li>
        <li>Family Doc - APK - for Family Physicians linking with Patients.</li>
        <li>104 - Mobile Telehealth unit Hyderabad. Pilot model is working.</li>
      </ul>
      <h3 className="font-serif text-xl text-primary">DIGITAL LEARNING:</h3>
      <p>IMA EVARSITY - www.imaevarsity.com</p>
      <p>Online Continued Professional Development Program for Indian Doctors.</p>
      <p>COMMONWEALTH MEDICAL EVARSITY - www.commonwealthmedicalevarsity.com</p>
      <p>Online Post graduation Program for Commonwealth Doctors.</p>
      <p>EJournals - The Family Doctor or Current Practice Journal</p>
      <p>www.familydoctorjournal.com</p>
      <p>www.currentpracticejournal.com</p>
    </ContentPage>
  );
}
