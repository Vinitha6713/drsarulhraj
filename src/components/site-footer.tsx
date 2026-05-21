import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { FOOTER_DOT_BOTTOM, FOOTER_DOT_TOP, FOOTER_SERVICES } from "./site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#151d30] text-white">
      {/* Soft Luminous Medical Glow overlays (No Black) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_10%,oklch(0.62_0.09_235/0.14),transparent),radial-gradient(ellipse_60%_50%_at_90%_100%,oklch(0.65_0.15_220/0.12),transparent)]"
        aria-hidden
      />
      <img
        src={FOOTER_DOT_TOP}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-28 opacity-10 md:w-44"
      />
      <img
        src={FOOTER_DOT_BOTTOM}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-24 right-0 w-28 opacity-10 md:w-44"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <FadeIn className="lg:col-span-5">
            <div className="rounded-[2.2rem] border border-white/[0.08] bg-white/[0.04] p-8 md:p-10 shadow-2xl backdrop-blur-xl hover:border-white/[0.15] transition duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand font-bold text-[9px] uppercase tracking-widest mb-4">
                Our Commitment
              </span>
              <h4 className="text-3xl font-extrabold tracking-tight text-white md:text-3xl">About Us.</h4>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 font-medium">
                As doctors we serve for the nation, educate and create new doctors, nurses.
                We have a great clinical team dedicated to serving every patient with priority care.
              </p>
              <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-md sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand/20 text-brand shadow-inner">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-relaxed text-white/75">
                    145/5B, Jeyaraj Road, Tuticorin.
                    <br />
                    Tamilnadu, South India.
                  </p>
                  <a
                    href="tel:+919487480001"
                    className="mt-3.5 inline-flex items-center gap-2.5 text-base font-bold text-white transition hover:text-brand"
                  >
                    <Phone className="h-4 w-4" />
                    +919487480001
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06} className="lg:col-span-4">
            <div className="rounded-[2.2rem] border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 shadow-2xl backdrop-blur-xl hover:border-white/[0.15] transition duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-medical/20 text-medical font-bold text-[9px] uppercase tracking-widest mb-4">
                Clinical Care
              </span>
              <h4 className="text-3xl font-extrabold tracking-tight text-white md:text-3xl">Our Services.</h4>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {FOOTER_SERVICES.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white/75 transition hover:border-brand/35 hover:bg-white/[0.07]"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-brand to-medical" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:col-span-3">
            <div className="rounded-[2.2rem] border border-white/[0.08] bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl hover:border-white/[0.15] transition duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent font-bold text-[9px] uppercase tracking-widest mb-4">
                Keep In Touch
              </span>
              <h4 className="text-3xl font-extrabold tracking-tight text-white md:text-3xl">SOCIAL UPDATES</h4>
              <div className="mt-6 space-y-6">
                <div className="flex gap-3 text-sm text-white/70 font-semibold leading-relaxed">
                  <Mail className="mt-1 h-4.5 w-4.5 shrink-0 text-brand" />
                  <p>
                    Email: drarulrhaj@gmail.com
                    <br />
                    Fax: 0461-2338661
                    <br />
                    Mobile No: +919487480001
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="btn-premium flex w-full items-center justify-center rounded-full py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-medical/15"
                >
                  Contact now
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="relative border-t border-white/[0.08] bg-white/[0.02]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm font-semibold text-white/60">
          <p>
            Copyright @ 2026 by{" "}
            <a
              href="https://www.digisailor.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition hover:text-white"
            >
              Digisailor
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
