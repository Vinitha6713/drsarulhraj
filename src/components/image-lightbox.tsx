import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

type ImageLightboxProps = {
  images: readonly { src: string; alt: string; title?: string; desc?: string }[];
  initialIndex?: number | null;
  onClose: () => void;
};

export function ImageLightbox({ images, initialIndex, onClose }: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex ?? 0);

  useEffect(() => {
    if (initialIndex != null) setIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (initialIndex == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [initialIndex, images.length, onClose]);

  return (
    <AnimatePresence>
      {initialIndex != null && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[oklch(0.08_0.02_250/0.92)] p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/10 p-2.5 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.img
            key={images[index]?.src}
            src={images[index]?.src}
            alt={images[index]?.alt ?? ""}
            className="max-h-[72vh] max-w-[90vw] rounded-2xl object-contain shadow-[0_25px_80px_rgba(15,23,42,0.5)] ring-1 ring-white/10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          />
          {images[index] && (
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full max-w-xl px-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl border border-white/10 bg-black/60 p-5 text-center text-white backdrop-blur-md">
                <h4 className="text-base font-bold">
                  {images[index].title ?? images[index].alt}
                </h4>
                {images[index].desc && (
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {images[index].desc}
                  </p>
                )}
              </div>
            </div>
          )}
          {images.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-lg text-white transition hover:bg-white/20 md:block"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex((i) => (i - 1 + images.length) % images.length);
                }}
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-lg text-white transition hover:bg-white/20 md:block"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex((i) => (i + 1) % images.length);
                }}
              >
                ›
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const masonryAspects = ["aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]", "aspect-[4/3]", "aspect-[3/5]", "aspect-square", "aspect-[4/5]"] as const;

export function GalleryGrid({
  images,
}: {
  images: readonly { src: string; alt: string }[];
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="gallery-masonry">
        {images.map((img, i) => (
          <div key={img.src} className="gallery-masonry-item mb-6">
            <div className="glass-card flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/40 shadow-lg transition-all duration-300 hover:shadow-2xl">
              <motion.button
                type="button"
                className={`group relative w-full overflow-hidden rounded-t-2xl focus:outline-none ${masonryAspects[i % masonryAspects.length]}`}
                onClick={() => setLightboxIndex(i)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-deep/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-medical-deep shadow-xl">
                    <ZoomIn className="h-5 w-5" />
                  </span>
                </div>
              </motion.button>
              
              <div className="p-5 text-left border-t border-slate-100/55 dark:border-slate-800/40 bg-white/10">
                <h4 className="text-[15px] font-bold text-primary dark:text-white uppercase tracking-tight">
                  {img.title ?? img.alt}
                </h4>
                {img.desc && (
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground dark:text-slate-400">
                    {img.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ImageLightbox
        images={images}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  );
}
