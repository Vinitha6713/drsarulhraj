import { createFileRoute } from "@tanstack/react-router";
import { HOSPITAL_BG, PORTRAIT } from "@/components/site-data";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Dr. S. Arulrhaj" },
      { name: "description", content: "Biography of Dr. S. Arulrhaj — Senior Physician and Cardiologist in Tuticorin." },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero title="About" subtitle="Welcome to my website." />
      <section className="relative py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl">
              <img src={PORTRAIT} alt="Dr. S. Arulrhaj" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/85 lg:col-span-7 fade-up">
            <p>
              Born and brought up in Tuticorin — a semi-urban city on the southern coast of India —
              by ambitious parents who gave the best education to their son to see him as an
              effective and efficient doctor for the Pearl City.
            </p>
            <p>
              That dream was fulfilled with a Gold Medal in MD (Medicine) and more than forty-five
              years of professional service in Tuticorin as a Senior Physician with special
              expertise in cardiology and intensive care.
            </p>
            <p>
              With the support of the people and professional colleagues, the present Sundaram
              Arulrhaj Hospital was born — the first ISO 9001:2015 certified 100-bedded cardiac
              and multi-specialty hospital with all tertiary care medical facilities under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <div className="hairline text-muted-foreground">Sundaram Arulrhaj Hospital</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-primary lg:text-5xl">
              Tertiary care for Tuticorin — all under one roof.
            </h2>
            <ul className="mt-8 space-y-3 text-foreground/90">
              {[
                "ISO 9001:2015 certified facility",
                "100-bed cardiac & multi-specialty care",
                "24×7 emergency and intensive care",
                "A teaching environment for the next generation",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <figure className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/10" aria-hidden />
            <img src={HOSPITAL_BG} alt="Hospital" className="relative rounded-3xl object-cover shadow-xl" loading="lazy" />
          </figure>
        </div>
      </section>
    </>
  );
}

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/60 to-background py-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-20"
        style={{ backgroundImage: `url(${HOSPITAL_BG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(28px)", transform: "scale(1.1)" }}
      />
      <div className="mx-auto max-w-7xl px-6 fade-up">
        <div className="hairline text-accent-foreground/70">{title}</div>
        <h1 className="mt-4 font-serif text-5xl text-primary lg:text-6xl">{subtitle}</h1>
      </div>
    </section>
  );
}
