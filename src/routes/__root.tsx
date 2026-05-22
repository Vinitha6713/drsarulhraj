import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. S. Arulrhaj — Senior Physician & Cardiologist, Tuticorin" },
      {
        name: "description",
        content:
          "Official website of Dr. S. Arulrhaj — Senior Physician, Cardiologist and founder of Sundaram Arulrhaj Hospital, Tuticorin.",
      },
      { property: "og:title", content: "Dr. S. Arulrhaj" },
      {
        property: "og:description",
        content: "Senior Physician, Cardiologist and founder of Sundaram Arulrhaj Hospital, Tuticorin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function removeLovableBadge() {
  document.getElementById("lovable-badge")?.remove();
  document.querySelectorAll('a[href*="lovable-badge"]').forEach((link) => {
    const el = link.closest("#lovable-badge") ?? link.parentElement;
    if (el?.textContent?.includes("Edit with")) el.remove();
    else if (link.textContent?.includes("Edit with")) link.remove();
  });
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    removeLovableBadge();
    const observer = new MutationObserver(removeLovableBadge);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  // Global animation enhancers: scroll reveal + ripple + tilt — no logic changes
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const tagTargets = () => {
      const selectors = [
        "section",
        ".glass-card",
        ".lift-card",
        ".image-frame",
        ".pillar-one",
        ".pillar-two",
        ".pillar-three",
        ".pillar-four",
        "article",
        "h1",
        "h2",
        "h3",
      ];
      document.querySelectorAll<HTMLElement>(selectors.join(",")).forEach((el) => {
        if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
      });
      // Add tilt to cards
      document.querySelectorAll<HTMLElement>(".glass-card, .lift-card, .pillar-one, .pillar-two, .pillar-three, .pillar-four").forEach((el) => {
        el.classList.add("tilt-3d");
      });
    };

    tagTargets();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    // Re-tag on DOM changes (route transitions)
    const mo = new MutationObserver(() => {
      tagTargets();
      document.querySelectorAll("[data-reveal]:not(.in-view)").forEach((el) => io.observe(el));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Ripple click effect
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const host = target?.closest<HTMLElement>('button, a.btn-premium, .btn-premium, [role="button"]');
      if (!host) return;
      const rect = host.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement("span");
      ripple.className = "ripple-wave";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      const prev = getComputedStyle(host).position;
      if (prev === "static") host.style.position = "relative";
      host.appendChild(ripple);
      setTimeout(() => ripple.remove(), 750);
    };
    document.addEventListener("click", onClick);

    return () => {
      io.disconnect();
      mo.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <style>{`
        html { scroll-behavior: smooth; scroll-padding-top: 112px; }
        body { font-family: 'Manrope', 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
        h1, h2, h3, h4, h5, h6, button, input, select, textarea { font-family: 'Manrope', 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif; }
        .hairline { letter-spacing: 0.18em; text-transform: uppercase; font-size: 11px; }
      `}</style>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
