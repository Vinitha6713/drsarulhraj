import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";

export const Route = createFileRoute("/business")({
  component: BusinessPage,
  head: () => ({ meta: [{ title: "Business — Dr. S. Arulrhaj" }] }),
});

function Section({ title, items }: { title: string; items: string[] }) {
  return (
  <div>
      <h3 className="font-serif text-xl text-primary">{title}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function BusinessPage() {
  return (
    <ContentPage title="Business Profile" subtitle="Business">
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
        title="LEARNING"
        items={["Targeted growth through smart working", "Be a thinker and doer."]}
      />
      <Section
        title="PHARMACEUTICALS"
        items={[
          "Founder & Chairman - Zenox Lifescience ltd, Domestic Pharma marketing.",
          "Founder & Chairman - Logix Life Science Ltd, International Pharma Marketing.",
          "Founder & Chairman - Grandix Pharmaceuticals, Chennai (1996 - 2007). Manufacturing & marketing unit.",
          "Overseas Pharma Marketing",
          "MRCGP Int - RCGP, UK Nutraceuticals",
        ]}
      />
      <Section
        title="HEALTH CARE"
        items={[
          'Chairman, Tuticorin Diagnostic Centre, Hi-tech Medical Diagnosis Centre, Tuticorin.',
          "Chairman, Tuticorin CT Scan & MRI scan Research Institute Ltd, Tuticorin & Tirunelveli.",
          "Health Tourism - Promoting Health Tourism from Malaysia, Srilanka, Maldives etc.",
          'Life style centres - "Health Wealth", Tuticorin.',
          "Promoting Health Cities, Pharmahubs, Medical & Dental Colleges in African and other developing countries.",
          "Clinical research organization - Promoting and taking part in clinical Research organizations in India.",
          "Director, Pushpanjali Publications, 2006 - 2010, New Delhi.",
          "Advisor, Pushpanjali Crossly Hospitals, 2006 - 2014, New Delhi.",
        ]}
      />
    </ContentPage>
  );
}
