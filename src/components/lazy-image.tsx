import { useState } from "react";
import { cn } from "@/lib/utils";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function LazyImage({ src, alt, className }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-muted/40", className)}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
