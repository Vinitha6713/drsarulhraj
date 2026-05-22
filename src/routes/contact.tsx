import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedArrow } from "@/components/animations";
import { ContactHero } from "@/components/content-layout";
import { FadeIn } from "@/components/motion";
import { HERO_BG } from "@/components/site-data";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact — Dr. S. Arulrhaj" }] }),
});

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Emergency Call",
    lines: ["+919994580001", "9487480001"],
    href: "tel:+919994580001",
    badge: "Available 24/7"
  },
  {
    icon: MapPin,
    label: "Our Location",
    lines: ["145/5B, Jeyaraj Road, Tuticorin.", "Tamilnadu, South India."],
    href: "https://maps.google.com/?q=145/5B+Jeyaraj+Road+Tuticorin",
    badge: "Get Directions"
  },
  {
    icon: Mail,
    label: "Email Address",
    lines: ["drarulrhaj@gmail.com"],
    href: "mailto:drarulrhaj@gmail.com",
    badge: "Online Queries"
  },
];

function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <img
          src={HERO_BG}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/35" />
      </div>

      <div className="relative z-10">
      <ContactHero />
      <section className="relative -mt-8 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="mb-12 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-gradient-to-r from-medical/15 to-brand/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-medical-deep dark:text-primary">
              <MessageSquare className="h-4.5 w-4.5" />
              Direct Lines
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-primary dark:text-white md:text-4xl">
              Contact Information
            </h2>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {CONTACT_ITEMS.map((item, i) => (
              <FadeIn key={item.href} delay={0.1 * i}>
                <motion.a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/45 p-8 shadow-xl backdrop-blur-md transition-colors duration-500 hover:border-brand/40 dark:bg-slate-900/40"
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Premium Background Accent Lights */}
                  <div
                    className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-brand/20 to-medical/15 blur-2xl transition group-hover:scale-110"
                    aria-hidden
                  />
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-medical-deep to-medical text-white shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-brand/25">
                        <item.icon className="h-7 w-7" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-dark dark:text-brand bg-brand/10 px-3 py-1 rounded-full border border-brand/20">
                        {item.badge}
                      </span>
                    </div>

                    <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                      {item.label}
                    </span>
                    <div className="space-y-1.5">
                      {item.lines.map((line) => (
                        <span key={line} className="block text-xl font-bold leading-snug text-primary dark:text-white md:text-2xl">
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-8 flex items-center gap-2 border-t border-slate-100 pt-6 text-sm font-bold text-medical-deep dark:border-slate-800/60 dark:text-primary">
                    Connect Now
                    <AnimatedArrow size={18} />
                  </div>
                </motion.a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
