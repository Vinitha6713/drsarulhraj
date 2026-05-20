import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Dr. S. Arulrhaj" },
      { name: "description", content: "Get in touch for consultations, lectures and collaborations." },
    ],
  }),
});

const CARDS = [
  { k: "Phone", v: "+91 99945 80001", v2: "+91 94874 80001", href: "tel:+919994580001" },
  { k: "Address", v: "145/5B, Jeyaraj Road,", v2: "Tuticorin, Tamil Nadu, South India.", href: "https://maps.google.com/?q=145/5B+Jeyaraj+Road+Tuticorin" },
  { k: "Email", v: "drarulrhaj@gmail.com", v2: "Response within 24–48 hours.", href: "mailto:drarulrhaj@gmail.com" },
];

function ContactPage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center fade-up">
          <div className="hairline text-muted-foreground">In Touch</div>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-primary lg:text-6xl">
            For consultations, lectures and collaborations.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            The clinic and the hospital remain open to colleagues, students and patients alike.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <a
              key={c.k}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{ animationDelay: `${i * 0.08}s` }}
              className="fade-up group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
            >
              <div className="hairline text-accent-foreground/70">{c.k}</div>
              <div className="mt-5 font-serif text-2xl text-primary">{c.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.v2}</div>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                Reach out
                <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://drsarulrhaj.com/contact.html"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Contact now <span aria-hidden>→</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCSijdOw5iZWQjX8IfKiy6wQ"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-primary hover:bg-secondary transition"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
