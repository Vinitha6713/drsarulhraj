import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/** Scrolling running words ticker */
export function MarqueeWords({
  items,
  className,
  speed = "normal",
  reverse = false,
}: {
  items: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
}) {
  const speedClass =
    speed === "slow" ? "animate-marquee-slow" : speed === "fast" ? "animate-marquee-fast" : "animate-marquee";
  const direction = reverse ? "animate-marquee-reverse" : speedClass;

  const row = (
    <div className={cn("flex gap-12 whitespace-nowrap", direction)}>
      {items.map((text, idx) => (
        <div key={`${text}-${idx}`} className="flex items-center gap-12">
          <span>{text}</span>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex select-none overflow-hidden", className)}>
      {row}
      <div className={cn("flex gap-12", direction)} aria-hidden>
        {items.map((text, idx) => (
          <div key={`dup-${text}-${idx}`} className="flex items-center gap-12">
            <span>{text}</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Arrow that nudges toward hover target — “drag to play” feel */
export function AnimatedArrow({
  className,
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.span
      className={cn("inline-flex text-medical-deep dark:text-primary", className)}
      animate={{ x: [0, 8, 0] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <ArrowRight style={{ width: size, height: size }} strokeWidth={2.5} />
    </motion.span>
  );
}

/** Tap / click highlight wrapper — no routing changes */
export function PressableHighlight({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "span";
}) {
  const MotionTag = motion[Tag] as typeof motion.div;

  return (
    <MotionTag
      className={cn("relative", className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-brand/0"
        whileTap={{ backgroundColor: "oklch(0.78 0.16 200 / 0.12)" }}
        transition={{ duration: 0.35 }}
      />
      <span className="relative z-[1]">{children}</span>
    </MotionTag>
  );
}

/** YouTube embed with animated play overlay — click reveals video */
export function VideoPlayerBlock({
  embed,
  title,
  className,
}: {
  embed: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={cn("group/video relative aspect-video overflow-hidden rounded-[2rem]", className)}>
      <div
        className="absolute -inset-1 bg-gradient-to-tr from-brand/30 to-medical/25 opacity-30 blur-2xl"
        aria-hidden
      />
      <iframe
        src={playing ? `${embed}${embed.includes("?") ? "&" : "?"}autoplay=1` : embed}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="relative h-full w-full rounded-[2rem]"
      />

      <AnimatePresence>
        {!playing && (
          <motion.button
            type="button"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setPlaying(true)}
            className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-slate-900/25 backdrop-blur-[2px]"
            aria-label={`Play ${title}`}
          >
            {/* Dragging arrow cue */}
            <motion.div
              className="pointer-events-none absolute left-[12%] top-1/2 hidden -translate-y-1/2 items-center gap-2 text-white/90 md:flex"
              animate={{ x: [0, 28, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Watch</span>
              <ArrowRight className="h-6 w-6" />
            </motion.div>

            <motion.div
              className="play-ring flex h-16 w-16 items-center justify-center rounded-full bg-medical/95 text-white shadow-2xl ring-4 ring-white/30 md:h-20 md:w-20"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Play className="h-7 w-7 fill-white pl-0.5 md:h-8 md:w-8" />
            </motion.div>

            <motion.p
              className="pointer-events-none absolute bottom-6 left-0 right-0 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white/80"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Click to play
            </motion.p>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Typewriter-style word reveal */
export function RevealWords({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <motion.span
      className={cn("inline-flex flex-wrap gap-x-[0.28em] gap-y-1", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={{
            hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.45, ease } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
