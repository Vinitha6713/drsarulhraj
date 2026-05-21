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
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[82vh] items-end justify-center overflow-hidden pb-24 pt-32 md:min-h-[90vh] md:items-center md:pb-20 md:pt-0 bg-slate-900"
    >
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-105">
        <img
          src={HERO_BG}
          alt=""
          className="h-full w-full object-cover object-center opacity-85"
          fetchPriority="high"
        />
      </motion.div>

      {/* Modern, soft premium color overlays */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-slate-900/35 to-background"
        aria-hidden
      />
      
      {/* Dynamic ambient lights */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(0.62_0.09_235/0.2),transparent_45%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.78_0.16_200/0.16),transparent_40%)]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Elegant mouse scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-80 hidden md:flex">
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-9 w-5.5 items-start justify-center rounded-full border-2 border-white/40 p-1"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        </motion.div>
      </div>

      {showContact && (
        <motion.div
          className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="btn-premium relative z-10 inline-flex min-w-[240px] items-center justify-center rounded-full px-12 py-4.5 text-base font-semibold tracking-wider text-white uppercase text-[13px]"
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
    <section className="section-mesh border-t border-border/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:gap-12">
        {[MISSION_BLOCKS.future, MISSION_BLOCKS.mission].map((block, i) => (
          <FadeIn key={block.title} delay={0.1 * i}>
            <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12 border border-white/60 bg-white/40">
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-medical to-medical-deep"
                aria-hidden
              />
              <h3 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
                {block.title}
              </h3>
              <ul className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-slate-100 dark:border-slate-800/40 pb-5 last:border-0 last:pb-0">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-brand to-medical shadow-sm ring-4 ring-brand/10" />
                    <span className="text-foreground/80 dark:text-foreground/90">{item}</span>
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
          className="absolute -inset-2 rounded-[2.2rem] bg-gradient-to-br from-brand/20 via-white/10 to-medical/15 opacity-70 blur-xl transition group-hover/side:opacity-100"
          aria-hidden
        />
        <div className="image-frame relative overflow-hidden rounded-[1.85rem] border border-white/60 bg-white/20 shadow-2xl">
          <img
            src={image}
            alt="Dr. S. Arulrhaj"
            className="w-full object-cover transition duration-[1.2s] ease-out group-hover/side:scale-[1.04]"
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
      <section className="section-mesh py-20 md:py-28 -mt-20 relative z-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <ProfileSidebar image={image} />
          </div>
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-gradient-to-br from-medical/10 to-brand/10 text-medical-deep dark:text-primary font-bold hairline text-[10px] tracking-widest border border-white/40">
                {title}
              </span>
              {subtitle && (
                <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-primary md:text-5xl md:leading-[1.1]">
                  {subtitle}
                </h1>
              )}
              <div className="prose-content mt-10 max-w-3xl space-y-6 text-[15px] leading-[1.85] text-foreground/80 dark:text-foreground/90 md:text-[17px] md:leading-relaxed">
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
