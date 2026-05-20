import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease },
};

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      viewport={fadeUp.viewport}
      transition={{ ...fadeUp.transition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  className,
  delay = 0,
  from = "left",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "left" | "right";
}) {
  const x = from === "left" ? -40 : 40;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function MotionSection({
  children,
  className,
  ...props
}: HTMLMotionProps<"section">) {
  return (
    <motion.section
      className={className}
      initial={fadeUp.initial}
      whileInView={fadeUp.whileInView}
      viewport={fadeUp.viewport}
      transition={fadeUp.transition}
      {...props}
    >
      {children}
    </motion.section>
  );
}
