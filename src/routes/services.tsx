import { createFileRoute } from "@tanstack/react-router";
import { RESOURCES, SERVICE_ANGLE, SERVICE_ELLIPSE } from "@/components/site-data";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services & Knowledge — Dr. S. Arulrhaj" },
      { name: "description", content: "Open access to lectures, research, books and public health documents." },
    ],
  }),
});

function ServicesPage() {
  return (
    <section className="relative overflow-hidden py-24">
      <img src={SERVICE_ANGLE} alt="" aria-hidden className="pointer-events-none absolute -top-10 right-0 w-72 opacity-40" />
      <img src={SERVICE_ELLIPSE} alt="" aria-hidden className="pointer-events-none absolute bottom-10 left-0 w-56 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 fade-up">
          <div className="max-w-xl">
            <div className="hairline text-muted-foreground">Services & Knowledge</div>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-primary lg:text-6xl">
              A library built over a lifetime in medicine.
            </h1>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Open access to lectures, research, books and public health documents — for students,
            colleagues and the wider community.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((r, i) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between bg-card p-8 transition hover:bg-secondary/60"
            >
              <div>
                <div className="hairline text-accent-foreground/70">0{i + 1} / 0{RESOURCES.length}</div>
                <h3 className="mt-6 font-serif text-2xl text-primary">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
              <div className="mt-10 flex items-center gap-2 text-sm font-medium text-primary">
                Open
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <a
            href="https://drsarulrhaj.com/Robust%20Indian%20Healthcare%20Reforming%20leading%20to%20UHC%202%20(3).doc"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            UHC Position Document <span aria-hidden>↗</span>
          </a>
          <a
            href="https://drsarulrhaj.com/API%20Digital%20e-book%202020.pdf"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-primary hover:bg-secondary transition"
          >
            API Digital E-book
          </a>
        </div>
      </div>
    </section>
  );
}
