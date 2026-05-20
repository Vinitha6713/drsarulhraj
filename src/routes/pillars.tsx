import { createFileRoute } from "@tanstack/react-router";
import { HOSPITAL_BG, PILLARS } from "@/components/site-data";

export const Route = createFileRoute("/pillars")({
  component: PillarsPage,
  head: () => ({
    meta: [
      { title: "Four Pillars — Dr. S. Arulrhaj" },
      { name: "description", content: "Four pillars that shape the work: Health Care, Environmental, Education and Academic." },
    ],
  }),
});

function PillarsPage() {
  return (
    <section className="relative overflow-hidden border-y border-border py-24 text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: `url(${HOSPITAL_BG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(14px)", transform: "scale(1.06)" }}
      />
      <div className="absolute inset-0 -z-10 bg-primary/88" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(oklch(1 0 0 / .5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / .5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl fade-up">
          <div className="hairline text-accent">Areas of Focus</div>
          <h1 className="mt-4 font-serif text-4xl leading-tight lg:text-6xl">
            Four pillars that shape the work.
          </h1>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <article
              key={p.title}
              style={{ animationDelay: `${i * 0.08}s` }}
              className="fade-up group relative rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-accent/60 hover:bg-primary-foreground/10"
            >
              <div className="font-serif text-5xl text-accent">{p.tag}</div>
              <h3 className="mt-6 font-serif text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
