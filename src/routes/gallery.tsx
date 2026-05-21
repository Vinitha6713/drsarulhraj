import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/image-lightbox";
import { HeroBanner } from "@/components/content-layout";
import { GALLERY_IMAGES } from "@/components/site-data";
import { FadeIn } from "@/components/motion";
import { Image } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({ meta: [{ title: "Gallery — Dr. S. Arulrhaj" }] }),
});

function GalleryPage() {
  return (
    <>
      <HeroBanner showContact={false} />
      <section className="section-mesh py-24 md:py-32 relative z-20 -mt-20">
        <FadeIn className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-medical/15 to-brand/15 text-medical-deep dark:text-primary font-bold text-[10px] uppercase tracking-widest mb-4 border border-white/40">
              <Image className="h-4.5 w-4.5" />
              Visual Portfolio
            </span>
            <h1 className="text-center text-4xl font-extrabold text-primary dark:text-white md:text-6xl tracking-tight">GALLERY</h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto font-medium">
              Take a look at the clinical milestones, academic lectures, and high-tech facilities at Sundaram Arulrhaj Hospital.
            </p>
          </div>
          
          <div className="mt-12">
            <GalleryGrid images={GALLERY_IMAGES} />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
