import { createFileRoute } from "@tanstack/react-router";
import { VIDEOS } from "@/components/site-data";

export const Route = createFileRoute("/videos")({
  component: VideosPage,
  head: () => ({
    meta: [
      { title: "Videos — Medi Talk & Health Talk" },
      { name: "description", content: "Selected talks and addresses by Dr. S. Arulrhaj." },
    ],
  }),
});

function VideosPage() {
  return (
    <section className="relative border-t border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 fade-up">
          <div>
            <div className="hairline text-muted-foreground">Medi Talk · Health Talk</div>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-primary lg:text-6xl">
              Selected talks & addresses.
            </h1>
          </div>
          <a
            href="https://www.youtube.com/channel/UCSijdOw5iZWQjX8IfKiy6wQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:text-accent transition"
          >
            Visit the YouTube channel →
          </a>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {VIDEOS.map((v, i) => (
            <article key={v.id} style={{ animationDelay: `${i * 0.08}s` }} className="fade-up group">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-primary shadow-md transition group-hover:shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <span className="hairline rounded-full bg-accent/15 px-3 py-1 text-accent-foreground">{v.series}</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl text-primary">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
