import { Link } from "@tanstack/react-router";
import { NAV, RESOURCES } from "./site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-primary text-primary-foreground">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.13 195 / .6), transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-primary font-serif text-lg">A</span>
            <div>
              <div className="font-serif text-lg">Dr. S. Arulrhaj</div>
              <div className="hairline text-primary-foreground/60">Tuticorin · India</div>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm text-primary-foreground/70">
            Senior Physician, Cardiologist and founder of Sundaram Arulrhaj Hospital.
          </p>
        </div>
        <div>
          <div className="hairline text-primary-foreground/60">Explore</div>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-accent transition">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="hairline text-primary-foreground/60">Resources</div>
          <ul className="mt-5 space-y-3 text-sm">
            {RESOURCES.map((r) => (
              <li key={r.title}>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">{r.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Dr. S. Arulrhaj. All rights reserved.</div>
          <div className="hairline">Redesigned with care</div>
        </div>
      </div>
    </footer>
  );
}
