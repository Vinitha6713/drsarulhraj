import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/image-lightbox";
import { InnerPageHero } from "@/components/content-layout";
import { GALLERY_IMAGES } from "@/components/site-data";
import { FadeIn } from "@/components/motion";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({ meta: [{ title: "Gallery — Dr. S. Arulrhaj" }] }),
});

function GalleryPage() {
  return (
    <>
      <InnerPageHero
        variant="gallery"
        title="Clinical milestones, academic lectures, and professional leadership"
        subtitle="GALLERY"
      />
      <section className="section-mesh relative z-20 -mt-12 py-20 md:py-28">
        <FadeIn className="mx-auto max-w-7xl px-6">
          <GalleryGrid images={GALLERY_IMAGES} />
        </FadeIn>
      </section>
    </>
  );
}
