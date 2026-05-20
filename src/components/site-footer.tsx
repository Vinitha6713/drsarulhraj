import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { FOOTER_DOT_BOTTOM, FOOTER_DOT_TOP, FOOTER_SERVICES } from "./site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.17_0.03_260)] text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,oklch(0.45_0.1_250/0.18),transparent),radial-gradient(ellipse_60%_40%_at_90%_100%,oklch(0.55_0.12_15/0.12),transparent)]"
        aria-hidden
      />
      <img
        src={FOOTER_DOT_TOP}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 w-28 opacity-[0.12] md:w-44"
      />
      <img
        src={FOOTER_DOT_BOTTOM}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-24 right-0 w-28 opacity-[0.12] md:w-44"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <FadeIn className="lg:col-span-5">
            <h4 className="font-serif text-2xl font-semibold tracking-tight text-white md:text-3xl">About Us.</h4>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/65">
              As a Doctor we serve for the nation, educate and create new doctors, nurses
              <br />
              we have great doctor with us where they serve for the patient
            </p>
            <div className="mt-8 flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-brand">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm leading-relaxed text-white/70">
                  145/5B, Jeyaraj Road, Tuticorin.
                  <br />
                  Tamilnadu, South India.
                </p>
                <a
                  href="tel:+919487480001"
                  className="mt-3 inline-flex items-center gap-2 font-serif text-xl text-brand transition hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  +919487480001
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06} className="lg:col-span-4">
            <h4 className="font-serif text-2xl font-semibold tracking-tight text-white md:text-3xl">Our Services.</h4>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {FOOTER_SERVICES.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-2.5 text-sm text-white/70 transition hover:border-brand/30 hover:bg-white/[0.06]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand to-medical" />
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.12} className="lg:col-span-3">
            <h4 className="font-serif text-2xl font-semibold tracking-tight text-white md:text-3xl">SOCIAL UPDATES</h4>
            <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6 backdrop-blur-md">
              <div className="flex gap-3 text-sm text-white/75">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
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
                className="btn-premium flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold text-white"
              >
                Contact now
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-black/25">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-white/55">
          <p>
            Copyright@2021 by{" "}
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
