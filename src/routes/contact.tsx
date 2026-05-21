import { createFileRoute } from "@tanstack/react-router";
import { HeroBanner } from "@/components/content-layout";
import { FadeIn } from "@/components/motion";
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
    <>
      <HeroBanner />
      <section className="section-mesh py-24 md:py-32 relative z-20 -mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-medical/15 to-brand/15 text-medical-deep dark:text-primary font-bold text-[10px] uppercase tracking-widest mb-4 border border-white/40">
              <MessageSquare className="h-4.5 w-4.5" />
              Get In Touch
            </span>
            <h2 className="text-4xl font-extrabold text-primary dark:text-white md:text-6xl tracking-tight">CONTACT INFORMATION</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto font-medium">
              Reach out to us directly for professional consultations, emergencies, or general hospital appointments.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {CONTACT_ITEMS.map((item, i) => (
              <FadeIn key={item.href} delay={0.1 * i}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.2rem] border border-white/80 bg-white/45 dark:bg-slate-900/40 p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:border-brand/40"
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

                  <div className="relative mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-2 text-sm font-bold text-medical-deep dark:text-primary">
                    Connect Now
                    <span className="transition-transform group-hover:translate-x-1.5 duration-300">→</span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
