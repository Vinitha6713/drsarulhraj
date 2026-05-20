import { createFileRoute } from "@tanstack/react-router";
import { HeroBanner } from "@/components/content-layout";
import { FadeIn } from "@/components/motion";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact — Dr. S. Arulrhaj" }] }),
});

const CONTACT_ITEMS = [
  {
    icon: Phone,
    lines: ["+919994580001", "9487480001"],
    href: "tel:+919994580001",
  },
  {
    icon: MapPin,
    lines: ["145/5B, Jeyaraj Road, Tuticorin.Tamilnadu, South India."],
    href: "https://maps.google.com/?q=145/5B+Jeyaraj+Road+Tuticorin",
  },
  {
    icon: Mail,
    lines: ["drarulrhaj@gmail.com"],
    href: "mailto:drarulrhaj@gmail.com",
  },
];

function ContactPage() {
  return (
    <>
      <HeroBanner />
      <section className="section-mesh py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3 md:gap-8">
          {CONTACT_ITEMS.map((item, i) => (
            <FadeIn key={item.href} delay={0.08 * i}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-white/80 bg-white/85 p-8 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-2xl hover:shadow-medical/10"
              >
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-brand/25 to-medical/15 blur-2xl transition group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-medical-deep to-medical text-white shadow-lg transition group-hover:scale-105 group-hover:shadow-brand/30">
                  <item.icon className="h-7 w-7" />
                </div>
                <div className="relative">
                  {item.lines.map((line) => (
                    <span key={line} className="block text-lg font-medium leading-snug text-foreground md:text-xl">
                      {line}
                    </span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
