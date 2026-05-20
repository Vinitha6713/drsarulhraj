import { createFileRoute } from "@tanstack/react-router";
import { HOSPITAL_BG } from "@/components/site-data";

export const Route = createFileRoute("/vision")({
  component: VisionPage,
  head: () => ({
    meta: [
      { title: "Vision & Mission — Dr. S. Arulrhaj" },
      { name: "description", content: "The vision, mission and values that guide a life in medicine." },
    ],
  }),
});

const CARDS = [
  { k: "Vision", t: "A healthier Pearl City.", b: "To make world-class tertiary medical care accessible to every family in Tuticorin and the southern coast — without anyone having to travel for help." },
  { k: "Mission", t: "Compassion first, always.", b: "To practise modern medicine with rigour, to teach the next generation of doctors, and to advocate for public health, the environment and the integrity of the profession." },
  { k: "Values", t: "Integrity. Service. Science.", b: "Evidence-based care, honest counsel, lifelong learning, and an unwavering 'No to Mixopathy' — modern medicine must remain a distinct discipline." },
];

function VisionPage() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: `url(${HOSPITAL_BG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(22px)", transform: "scale(1.08)", opacity: 0.15 }}
      />
      <div className="absolute inset-0 -z-10 bg-background/80" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl fade-up">
          <div className="hairline text-muted-foreground">Vision · Mission · Values</div>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-primary lg:text-6xl">
            The principles that guide a life in medicine.
          </h1>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <article
              key={c.k}
              style={{ animationDelay: `${i * 0.1}s` }}
              className="fade-up rounded-2xl border border-border bg-card/80 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="hairline text-accent-foreground/70">{c.k}</div>
              <h3 className="mt-5 font-serif text-2xl text-primary">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
