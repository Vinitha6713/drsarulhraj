import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO, NAV, type NavItem } from "./site-data";

function usePathname() {
  return useRouterState({ select: (s) => s.location.pathname });
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed top-0 z-50 w-full px-3 pt-3 md:px-6 md:pt-4"
    >
      <div
        className={`pointer-events-auto mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-nav-scrolled glass-nav" : "glass-nav"
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-3 py-2.5 md:gap-4 md:px-5 md:py-3">
          <Link to="/" className="shrink-0 transition hover:opacity-90 hover:scale-[1.01]" onClick={() => setOpen(false)}>
            <img src={LOGO} alt="Dr. S. Arulrhaj" className="h-10 w-auto md:h-11" width={178} height={58} />
          </Link>

          {/* Desktop Direct Navigation (Flat list, no dropdowns) */}
          <nav className="hidden flex-1 items-center justify-center gap-0.5 xl:gap-1 lg:flex">
            {NAV.map((item) => (
              <NavLinkDesktop
                key={item.label}
                item={item}
                pathname={pathname}
              />
            ))}
          </nav>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="hidden md:block">
            <Link
              to="/contact"
              className="btn-premium relative z-10 inline-flex min-w-[9.5rem] items-center justify-center rounded-full px-6 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white"
            >
              Contact now
            </Link>
          </motion.div>

          <button
            type="button"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-slate-800/50 text-medical-deep dark:text-primary backdrop-blur-sm transition hover:bg-white/80 dark:hover:bg-slate-800/80 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/40 dark:border-white/5 lg:hidden"
            >
              <div className="max-h-[min(70vh,calc(100dvh-8rem))] overflow-y-auto px-5 py-4">
                {NAV.map((item) => (
                  <MobileNavItem key={item.label} item={item} pathname={pathname} onNavigate={() => setOpen(false)} />
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-premium mt-5 flex w-full justify-center rounded-full py-3.5 text-[11px] font-bold uppercase tracking-wider text-white"
                >
                  Contact now
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

function NavLinkDesktop({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const active =
    item.to === "/"
      ? pathname === "/"
      : pathname === item.to || pathname.startsWith(`${item.to}/`);

  return (
    <Link
      to={item.to!}
      className={`nav-link-wrap relative px-2 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-foreground/80 dark:text-foreground/90 transition hover:text-medical xl:px-2.5 ${active ? "is-active" : ""}`}
      activeOptions={{ exact: item.to === "/" }}
    >
      {active && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-x-0.5 inset-y-1 rounded-lg bg-medical/10 dark:bg-primary/10"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          aria-hidden
        />
      )}
      <span className="relative z-10">{item.label}</span>
      {active ? (
        <motion.span
          layoutId="nav-underline-bar"
          className="nav-underline scale-x-100"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        />
      ) : (
        <span className="nav-underline" />
      )}
    </Link>
  );
}

function MobileNavItem({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const active =
    item.to === "/"
      ? pathname === "/"
      : pathname === item.to || pathname.startsWith(`${item.to}/`);

  return (
    <motion.div whileTap={{ scale: 0.98, x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 24 }}>
      <Link
        to={item.to!}
        onClick={onNavigate}
        className={`block border-b border-border/40 py-3 text-[11px] font-extrabold uppercase tracking-[0.12em] transition-colors dark:border-white/5 ${
          active ? "text-medical dark:text-primary" : "text-foreground/80 dark:text-foreground/90"
        }`}
      >
        {item.label}
      </Link>
    </motion.div>
  );
}
