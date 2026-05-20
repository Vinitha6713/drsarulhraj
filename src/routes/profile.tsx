import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-layout";
import { WELCOME_TEXT } from "@/components/site-data";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({ meta: [{ title: "Profile — Dr. S. Arulrhaj" }] }),
});

function ProfilePage() {
  return (
    <ContentPage title="About Me" subtitle="Profile">
      <p>{WELCOME_TEXT}</p>
      <p>
        Started my practice with a 5 Bedded hospital in the name of my affectionate father Late
        Sri.M.Sundaram Nadar. The public in and around Tuticorin District patronized me fully and
        depending upon the need, I was able to add-on high Tech Medical Diagnostic and Treatment
        facilities at the hospital & made Tuticorin as a Mecca of Healthcare for the people of
        Southern Districts of Tamilnadu.
      </p>
      <p>
        With the support of the people and professional colleagues, the present Sundaram Arulrhaj
        Hospital was born to be the first ISO 9001:2000 certified 100 Bedded Cardiac and Multi
        specialty Hospital with all Tertiary care Medical facilities under one roof.
      </p>
      <h3 className="font-serif text-2xl text-primary">VISION</h3>
      <p className="font-semibold text-brand">HEALTHY INDIA</p>
      <h3 className="font-serif text-2xl text-primary">MISSION</h3>
      <p className="font-semibold text-brand">DOCTOR SOCIETY FRIENDSHIP</p>
      <p>
        This public Health vision pushed me up to the International arena as Vice President of
        Commonwealth medical Association 2005-2007 at the meeting in Ghana. Further commonwealth
        countries unimously elected me as the President of Commonwealth medical Association for
        2007-2010.
      </p>
      <p className="font-bold text-primary">FIRST INDIAN TO GET THIS UNIQUE HONOR</p>
      <p>
        This international Position enlarged my vision towards the Health of Developing & under
        Developing Countries.
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Founder & First Chairman of Commonwealth Health Professions Alliance, UK - 2010 - 2014</li>
        <li>Founder & Chairman of Commonwealth Medical Association Trust - 2013 onwards</li>
      </ul>
      <p className="font-semibold text-brand">PREVENT DENGUE & SWINE FLU</p>
      <p>Prof. DR. S. ARULRHAJ, MD.,PhD; FRCP(G),FRCP(L),MBA; CHAIRMAN</p>
    </ContentPage>
  );
}
