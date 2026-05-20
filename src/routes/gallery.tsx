import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/image-lightbox";
import { HeroBanner } from "@/components/content-layout";
import { GALLERY_IMAGES } from "@/components/site-data";
import { FadeIn } from "@/components/motion";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({ meta: [{ title: "Gallery — Dr. S. Arulrhaj" }] }),
});

function GalleryPage() {
  return (
    <>
      <HeroBanner showContact={false} />
      <section className="py-16 md:py-24">
        <FadeIn className="mx-auto max-w-7xl px-6">
          <h1 className="text-center font-serif text-4xl text-primary md:text-5xl">Gallery</h1>
          <div className="mt-12">
            <GalleryGrid images={GALLERY_IMAGES} />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
