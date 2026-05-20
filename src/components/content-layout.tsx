import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/motion";
import { HERO_BG, MISSION_BLOCKS, PORTRAIT } from "@/components/site-data";
import type { ReactNode } from "react";

export function HeroBanner({ showContact = true }: { showContact?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.92]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[82vh] items-end justify-center overflow-hidden pb-24 pt-32 md:min-h-[90vh] md:items-center md:pb-20 md:pt-0"
    >
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-105">
        <img
          src={HERO_BG}
          alt=""
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-medical-deep/85 via-black/55 to-background"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,oklch(0.55_0.1_250/0.25),transparent)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,oklch(1_0_0/0.04)_50%,transparent_60%)]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {showContact && (
        <motion.div
          className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 text-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <Link
            to="/contact"
            className="btn-premium relative z-10 inline-flex min-w-[220px] items-center justify-center rounded-full px-10 py-4 text-base font-semibold tracking-wide text-white"
          >
            Contact now
          </Link>
        </motion.div>
      )}
    </section>
  );
}

export function MissionSections() {
  return (
    <section className="section-mesh border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:gap-10">
        {[MISSION_BLOCKS.future, MISSION_BLOCKS.mission].map((block, i) => (
          <FadeIn key={block.title} delay={0.08 * i}>
            <div className="glass-card relative overflow-hidden rounded-[1.75rem] p-8 md:p-11">
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-medical to-medical-deep"
                aria-hidden
              />
              <h3 className="font-serif text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                {block.title}
              </h3>
              <ul className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-border/40 pb-4 last:border-0 last:pb-0">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand to-medical shadow-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function ProfileSidebar({ image = PORTRAIT }: { image?: string }) {
  return (
    <FadeIn className="lg:sticky lg:top-32">
      <div className="group/side relative">
        <div
          className="absolute -inset-1 rounded-[1.6rem] bg-gradient-to-br from-brand/35 via-white/40 to-medical/25 opacity-80 blur-md transition group-hover/side:opacity-100"
          aria-hidden
        />
        <div className="image-frame relative overflow-hidden rounded-[1.45rem] border border-white/80 bg-white/40 shadow-xl">
          <img
            src={image}
            alt="Dr. S. Arulrhaj"
            className="w-full object-cover transition duration-700 ease-out group-hover/side:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>
    </FadeIn>
  );
}

export function ContentPage({
  title,
  subtitle,
  image,
  children,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  children: ReactNode;
}) {
  return (
    <>
      <HeroBanner />
      <section className="section-mesh py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <ProfileSidebar image={image} />
          </div>
          <div className="lg:col-span-8">
            <FadeIn>
              <p className="hairline text-medical">{title}</p>
              {subtitle && (
                <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-primary md:text-5xl md:leading-[1.1]">
                  {subtitle}
                </h1>
              )}
              <div className="prose-content mt-10 max-w-3xl space-y-6 text-[15px] leading-[1.75] text-foreground/90 md:text-lg md:leading-relaxed">
                {children}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <MissionSections />
    </>
  );
}
