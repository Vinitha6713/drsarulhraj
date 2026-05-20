import { createFileRoute, Link } from "@tanstack/react-router";
import { HOSPITAL_BG, PORTRAIT } from "@/components/site-data";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Dr. S. Arulrhaj — Senior Physician & Cardiologist, Tuticorin" },
      {
        name: "description",
        content:
          "Senior Physician and Cardiologist with 45+ years of practice in Tuticorin. Founder of Sundaram Arulrhaj Hospital.",
      },
    ],
  }),
});

const TRUST = [
  "Advanced Cardiac Care",
  "Patient-Centered",
  "Trusted Specialist",
  "Modern Technology",
];

function Home() {
  return (
    <section className="relative overflow-hidden pt-16 pb-28 lg:pt-24 lg:pb-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${HOSPITAL_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(24px)",
          transform: "scale(1.1)",
          opacity: 0.22,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl float-y"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.13 195 / .45), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7 fade-up">
          <div className="hairline text-accent-foreground/70 mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" /> Healing · Teaching · Advocacy
          </div>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-primary sm:text-6xl lg:text-7xl">
            A lifetime devoted to <em className="text-accent not-italic">medicine</em>, to the Pearl
            City, and to its people.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Senior Physician and Cardiologist with over four decades of practice in Tuticorin.
            Gold medalist in MD (Internal Medicine). Founder of Sundaram Arulrhaj Hospital — the
            first ISO 9001:2015 certified 100-bedded cardiac and multi-specialty hospital in the
            region.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary/90 px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition hover:shadow-xl hover:-translate-y-0.5"
            >
              Book a Consultation <span aria-hidden>→</span>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-7 py-3.5 text-sm font-medium text-primary hover:bg-secondary transition"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {TRUST.map((t) => (
              <span
                key={t}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-8">
            {[
              { k: "45+", v: "Years of Practice" },
              { k: "100", v: "Bed Hospital" },
              { k: "Gold", v: "MD Medalist" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-serif text-4xl text-primary">{s.k}</dt>
                <dd className="hairline mt-2 text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-5 fade-up">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div aria-hidden className="absolute -inset-3 rounded-[2rem] border border-accent/40" />
            <div aria-hidden className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-accent/30 blur-2xl" />
            <img
              src={PORTRAIT}
              alt="Dr. S. Arulrhaj"
              className="relative h-full w-full rounded-[1.75rem] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl border border-border bg-card/90 backdrop-blur p-5 shadow-xl">
              <div className="hairline text-muted-foreground">In Service Since</div>
              <div className="font-serif text-3xl text-primary">1979</div>
              <div className="mt-1 text-xs text-muted-foreground">Tuticorin · Tamil Nadu · India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
