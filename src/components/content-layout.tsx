import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/motion";
import { HERO_BG, MISSION_BLOCKS, PORTRAIT } from "@/components/site-data";
import type { ReactNode } from "react";

export type InnerHeroVariant =
  | "profile"
  | "academic"
  | "education"
  | "business"
  | "leader"
  | "digital-health"
  | "gallery"
  | "hospital"
  | "default";

const INNER_THEMES: Record<
  InnerHeroVariant,
  {
    badge: string;
    mesh: string;
    orbA: string;
    orbB: string;
    line: string;
  }
> = {
  profile: {
    badge: "Biography & Legacy",
    mesh: "from-[#0c1a33] via-[#152a4a] to-[#0a1628]",
    orbA: "orb-royal",
    orbB: "orb-brand",
    line: "from-brand via-medical-deep to-brand",
  },
  academic: {
    badge: "Academic Excellence",
    mesh: "from-[#0a1f2e] via-[#0d3d4a] to-[#0c1929]",
    orbA: "orb-medical",
    orbB: "orb-brand",
    line: "from-medical via-brand to-medical-deep",
  },
  education: {
    badge: "Medical Education",
    mesh: "from-[#0f1a2e] via-[#1a2f4a] to-[#0d1f35]",
    orbA: "orb-brand",
    orbB: "orb-medical",
    line: "from-brand-dark via-medical to-brand",
  },
  business: {
    badge: "Professional Ventures",
    mesh: "from-[#0f172a] via-[#1e293b] to-[#0c1222]",
    orbA: "orb-royal",
    orbB: "orb-medical",
    line: "from-medical-deep via-slate-400 to-brand",
  },
  leader: {
    badge: "Global Leadership",
    mesh: "from-[#0c1525] via-[#162544] to-[#0a1220]",
    orbA: "orb-brand",
    orbB: "orb-royal",
    line: "from-brand via-medical to-medical-deep",
  },
  "digital-health": {
    badge: "Health Technology",
    mesh: "from-[#051525] via-[#0a2840] to-[#061018]",
    orbA: "orb-brand",
    orbB: "orb-medical",
    line: "from-brand via-cyan-400 to-medical",
  },
  gallery: {
    badge: "Visual Portfolio",
    mesh: "from-[#120f28] via-[#1a2548] to-[#0e1428]",
    orbA: "orb-medical",
    orbB: "orb-brand",
    line: "from-medical via-brand-dark to-medical-deep",
  },
  hospital: {
    badge: "Healthcare Institution",
    mesh: "from-[#0a1628] via-[#12304a] to-[#0c1a2e]",
    orbA: "orb-medical",
    orbB: "orb-royal",
    line: "from-medical-deep via-medical to-brand",
  },
  default: {
    badge: "Explore",
    mesh: "from-slate-900 via-slate-800 to-[#0f172a]",
    orbA: "orb-brand",
    orbB: "orb-medical",
    line: "from-brand to-medical",
  },
};

/** Home only — cinematic hospital hero with parallax, zoom, glow */
export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.88]);

  return (
    <section
      ref={ref}
      className="hero-shimmer relative flex min-h-[88vh] items-end justify-center overflow-hidden bg-slate-950 pb-24 pt-32 md:min-h-[92vh] md:items-center md:pb-20 md:pt-0"
    >
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 origin-center">
        <img
          src={HERO_BG}
          alt=""
          className="hero-ken-burns h-full w-full object-cover object-center"
          fetchPriority="high"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#0a1220]/75 via-slate-900/40 to-background"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.78_0.16_200/0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,oklch(0.58_0.14_175/0.18),transparent_42%)]"
        aria-hidden
      />
      <div className="orb orb-brand h-[480px] w-[480px] -top-40 -left-32 opacity-70" aria-hidden />
      <div className="orb orb-medical h-[400px] w-[400px] top-1/4 -right-28 opacity-60" aria-hidden />
      <div className="orb orb-royal h-[320px] w-[320px] bottom-0 left-1/3 opacity-50" aria-hidden />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background via-background/85 to-transparent" />

      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-80 md:flex">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5.5 items-start justify-center rounded-full border-2 border-white/40 p-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 text-center"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <span className="mb-6 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-white/90 backdrop-blur-md">
          Sundaram Arulrhaj Hospital · Tuticorin
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-6xl md:leading-[1.08]">
          <span className="animated-gradient-text">Care · Charity · Commitment</span>
        </h1>
        <p className="mt-5 max-w-xl text-base font-medium text-white/75 md:text-lg">
          First ISO-certified tertiary cardiac & multi-specialty hospital in South Tamil Nadu
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="mt-10">
          <Link
            to="/contact"
            className="btn-premium relative z-10 inline-flex min-w-[240px] items-center justify-center rounded-full px-12 py-4.5 text-[13px] font-semibold uppercase tracking-wider text-white"
          >
            Contact now
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

/** Contact hero — content overlay; hospital background is set on the contact page */
export function ContactHero() {
  return (
    <section className="relative min-h-[52vh] overflow-hidden md:min-h-[58vh]">
      <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-6xl flex-col items-center justify-center px-6 py-28 md:min-h-[58vh]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl text-center"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-white/90 drop-shadow-md">
            Get In Touch
          </span>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[15px] font-medium leading-relaxed text-white/90 drop-shadow-md md:text-base">
            Reach out for consultations, emergencies, or hospital appointments. We respond with care and urgency.
          </p>
        </motion.div>
      </div>

    </section>
  );
}

/** Inner pages — unique gradient heroes, no hospital building image */
export function InnerPageHero({
  title,
  subtitle,
  variant = "default",
}: {
  title: string;
  subtitle?: string;
  variant?: InnerHeroVariant;
}) {
  const theme = INNER_THEMES[variant];

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br ${theme.mesh} py-28 md:py-36`}
    >
      <div className={`orb ${theme.orbA} h-[380px] w-[380px] -top-24 -left-20 opacity-55`} aria-hidden />
      <div className={`orb ${theme.orbB} h-[340px] w-[340px] -bottom-32 -right-16 opacity-45`} aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 mesh-animated opacity-40"
        aria-hidden
      />
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${theme.line} opacity-80`}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/85 backdrop-blur-sm">
            {theme.badge}
          </span>
          {subtitle && (
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl md:leading-[1.06]">
              {subtitle}
            </h1>
          )}
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-white/60 md:text-base">
            {title}
          </p>
          <div
            className={`mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r ${theme.line}`}
            aria-hidden
          />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

export function MissionSections() {
  return (
    <section className="section-mesh border-t border-border/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:gap-12">
        {[MISSION_BLOCKS.future, MISSION_BLOCKS.mission].map((block, i) => (
          <FadeIn key={block.title} delay={0.1 * i}>
            <div className="glass-card relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-8 md:p-12">
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-medical to-medical-deep"
                aria-hidden
              />
              <h3 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
                {block.title}
              </h3>
              <ul className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 border-b border-slate-100 pb-5 last:border-0 last:pb-0 dark:border-slate-800/40"
                  >
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
  variant = "default",
  children,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  variant?: InnerHeroVariant;
  children: ReactNode;
}) {
  return (
    <>
      <InnerPageHero title={title} subtitle={subtitle} variant={variant} />
      <section className="section-mesh relative z-20 -mt-12 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <ProfileSidebar image={image} />
          </div>
          <div className="lg:col-span-8">
            <FadeIn>
              <div className="glass-card rounded-3xl border border-white/60 bg-white/40 p-8 md:p-12 dark:bg-slate-900/30">
                <span className="inline-block rounded-full border border-white/40 bg-gradient-to-br from-medical/10 to-brand/10 px-3.5 py-1.5 font-bold hairline text-[10px] tracking-widest text-medical-deep dark:text-primary">
                  {title}
                </span>
                <div className="prose-content mt-8 max-w-3xl space-y-6 text-[15px] leading-[1.85] text-foreground/80 dark:text-foreground/90 md:text-[17px] md:leading-relaxed">
                  {children}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <MissionSections />
    </>
  );
}
