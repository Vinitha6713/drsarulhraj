import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dr. S. Arulrhaj — Senior Physician & Cardiologist, Tuticorin" },
      {
        name: "description",
        content:
          "Dr. S. Arulrhaj — Gold Medalist in MD (Internal Medicine), Senior Physician and Cardiologist serving Tuticorin for over 45 years. Founder, Sundaram Arulrhaj Hospital.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
});

const PORTRAIT =
  "https://drsarulrhaj.com/assets/images/about/pp%20(1).jpg";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Health", href: "#health" },
  { label: "Hospital", href: "#hospital" },
  { label: "Gallery", href: "#gallery" },
];

const RESOURCES = [
  {
    title: "Medical Presentations",
    desc: "Lectures, conference talks and clinical decks.",
    href: "https://drive.google.com/drive/u/4/folders/17qCxabF2tqVFSptzwcEu9PcNAVxGZjVl",
  },
  {
    title: "Research",
    desc: "Published work, papers and ongoing studies.",
    href: "https://drive.google.com/drive/folders/13XhnedwsCPeNMqe7cOk0_KBsO3NaNYJL?usp=sharing",
  },
  {
    title: "Books",
    desc: "Authored and edited volumes for the medical community.",
    href: "https://drive.google.com/drive/folders/1r-Gd4erFBIeNYV_cqGhdCmdrpTfwN2lz?usp=sharing",
  },
  {
    title: "Health Documents",
    desc: "Public health references, position papers and guides.",
    href: "https://drive.google.com/drive/folders/1aB_MG9bHPvXHbxSbDM0_to6v-yFXy1tX?usp=sharing",
  },
];

const PILLARS = [
  {
    tag: "01",
    title: "Health Care",
    body: "Lifestyle and wellness centres — “Health Wealth”, Tuticorin.",
  },
  {
    tag: "02",
    title: "Environmental",
    body: "Biogas extraction plant in the pipeline. Green Ozone initiatives.",
  },
  {
    tag: "03",
    title: "Education",
    body: "“Education is the most powerful weapon which you can use to change the world.”",
  },
  {
    tag: "04",
    title: "Academic",
    body: "University First Rank holder and Gold Medal winner in MD (Internal Medicine).",
  },
];

const VIDEOS = [
  {
    id: "NZA7G2S1PhM",
    title: "Doctors Day Speech",
    series: "Medi Talk",
    note: "An address to the medical community on Doctors Day.",
  },
  {
    id: "jAsX8fEPOLw",
    title: "World No Tobacco Day (Tamil)",
    series: "Health Talk",
    note: "A public talk in Tamil for World No Tobacco Day.",
  },
  {
    id: "RICvuc4lIjU",
    title: "No to Mixopathy",
    series: "Advocacy",
    note: "Why modern medicine must remain a distinct discipline.",
  },
  {
    id: "7xPnT3bweaQ",
    title: "Mixopathy Agitation — Tuticorin IMA",
    series: "Advocacy",
    note: "Coverage of the IMA and Medical College agitation.",
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <style>{`
        .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .hairline { letter-spacing: 0.22em; text-transform: uppercase; font-size: 11px; }
        .grain::before {
          content: ""; position: absolute; inset: 0; pointer-events: none;
          background-image: radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 3px 3px; opacity: .35;
        }
      `}</style>

      {/* NAV */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-serif text-lg">
              A
            </span>
            <div className="leading-tight">
              <div className="font-serif text-lg text-primary">Dr. S. Arulrhaj</div>
              <div className="hairline text-muted-foreground">Senior Physician · Tuticorin</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="https://drsarulrhaj.com/contact.html"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            Contact
            <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.78 0.13 85 / .35), transparent 70%)" }}
        />
        <div
          aria-hidden
          className="absolute top-1/2 -left-40 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.38 0.08 170 / .35), transparent 70%)" }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="hairline text-accent-foreground/70 mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" /> Healing · Teaching · Advocacy
            </div>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-primary sm:text-6xl lg:text-7xl">
              A lifetime devoted to <em className="text-accent not-italic">medicine</em>, to the
              Pearl City, and to its people.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Senior Physician and Cardiologist with over four decades of practice in Tuticorin.
              Gold medalist in MD (Internal Medicine). Founder of Sundaram Arulrhaj Hospital — an
              ISO 9001:2015 certified multi‑specialty centre with comprehensive tertiary care under
              a single roof.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://drsarulrhaj.com/Robust%20Indian%20Healthcare%20Reforming%20leading%20to%20UHC%202%20(3).doc"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
              >
                UHC Position Document
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://drsarulrhaj.com/API%20Digital%20e-book%202020.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-primary hover:bg-secondary transition"
              >
                API Digital E‑book
              </a>
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

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] border border-accent/40"
              />
              <div
                aria-hidden
                className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-accent/30 blur-2xl"
              />
              <img
                src={PORTRAIT}
                alt="Dr. S. Arulrhaj"
                className="relative h-full w-full rounded-[1.75rem] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl border border-border bg-card p-5 shadow-xl">
                <div className="hairline text-muted-foreground">In Service Since</div>
                <div className="font-serif text-3xl text-primary">1979</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Tuticorin · Tamil Nadu · India
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative border-t border-border bg-secondary/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="hairline text-muted-foreground">About</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-primary lg:text-5xl">
              Welcome to my website.
            </h2>
            <div className="mt-6 h-px w-16 bg-accent" />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/85 lg:col-span-8">
            <p>
              Born and raised in Tuticorin — a coastal city on the southern tip of India — by
              ambitious parents who invested in their son’s education with the dream of seeing him
              serve the Pearl City as an effective and compassionate physician.
            </p>
            <p>
              That dream was honoured with a Gold Medal in MD (Internal Medicine) and more than
              forty‑five years of practice in Tuticorin as a Senior Physician with a special
              interest in cardiology and intensive care.
            </p>
            <p>
              With the trust of the community and the support of professional colleagues, Sundaram
              Arulrhaj Hospital was established — today an ISO 9001:2015 certified 100‑bedded
              cardiac and multi‑specialty hospital bringing tertiary medical care together under a
              single roof.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES / RESOURCES */}
      <section id="leadership" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="hairline text-muted-foreground">Services & Knowledge</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-primary lg:text-5xl">
                A library built over a lifetime in medicine.
              </h2>
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
                  <div className="hairline text-accent-foreground/70">
                    0{i + 1} / {RESOURCES.length.toString().padStart(2, "0")}
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-primary">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
                <div className="mt-10 flex items-center gap-2 text-sm font-medium text-primary">
                  Open
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="health" className="relative overflow-hidden border-y border-border bg-primary py-24 text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / .5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / .5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="hairline text-accent">Areas of Focus</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight lg:text-5xl">
              Four pillars that shape the work.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <article
                key={p.title}
                className="group relative rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur-sm transition hover:border-accent/60 hover:bg-primary-foreground/10"
              >
                <div className="font-serif text-5xl text-accent">{p.tag}</div>
                <h3 className="mt-6 font-serif text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOSPITAL */}
      <section id="hospital" className="relative py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <div className="hairline text-muted-foreground">Sundaram Arulrhaj Hospital</div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-primary lg:text-5xl">
              Tertiary care for Tuticorin — all under one roof.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The first ISO 9001:2015 certified 100‑bedded cardiac and multi‑specialty hospital in
              the region, built on decades of clinical practice, teaching and trust.
            </p>
            <ul className="mt-8 space-y-3 text-foreground/90">
              {[
                "ISO 9001:2015 certified facility",
                "100‑bed cardiac & multi‑specialty care",
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
            <div className="absolute -inset-4 rounded-3xl bg-secondary" aria-hidden />
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80"
              alt="Hospital corridor"
              className="relative rounded-3xl object-cover shadow-xl"
              loading="lazy"
            />
            <figcaption className="hairline mt-4 text-muted-foreground">
              Sundaram Arulrhaj Hospital · Tuticorin
            </figcaption>
          </figure>
        </div>
      </section>

      {/* VIDEOS */}
      <section id="gallery" className="relative border-t border-border bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="hairline text-muted-foreground">Medi Talk · Health Talk</div>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-primary lg:text-5xl">
                Selected talks &amp; addresses.
              </h2>
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
            {VIDEOS.map((v) => (
              <article key={v.id} className="group">
                <a
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video overflow-hidden rounded-2xl border border-border bg-primary"
                >
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 text-primary-foreground">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-primary">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="hairline">{v.series}</span>
                  </div>
                </a>
                <h3 className="mt-5 font-serif text-2xl text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="hairline text-muted-foreground">In Touch</div>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-primary lg:text-6xl">
            For consultations, lectures and collaborations.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            The clinic and the hospital remain open to colleagues, students and patients alike.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://drsarulrhaj.com/contact.html"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Contact now <span aria-hidden>→</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCSijdOw5iZWQjX8IfKiy6wQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-primary hover:bg-secondary transition"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-primary font-serif text-lg">
                A
              </span>
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
                <li key={n.href}>
                  <a href={n.href} className="hover:text-accent transition">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="hairline text-primary-foreground/60">Resources</div>
            <ul className="mt-5 space-y-3 text-sm">
              {RESOURCES.map((r) => (
                <li key={r.title}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition"
                  >
                    {r.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-primary-foreground/60">
            <div>© {new Date().getFullYear()} Dr. S. Arulrhaj. All rights reserved.</div>
            <div className="hairline">Redesigned with care</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
