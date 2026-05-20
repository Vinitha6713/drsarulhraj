import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { LOGO, NAV, type NavItem } from "./site-data";

function usePathname() {
  return useRouterState({ select: (s) => s.location.pathname });
}

function pathMatchesAbout(path: string) {
  return ["/profile", "/academic", "/education", "/business"].some((p) => path === p || path.startsWith(`${p}/`));
}

function pathMatchesHealth(path: string) {
  return path === "/digital-health" || path.startsWith("/digital-health/");
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
    <header className="pointer-events-none fixed top-0 z-50 w-full px-3 pt-4 md:px-6 md:pt-5">
      <div
        className={`pointer-events-auto mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-nav-scrolled glass-nav" : "glass-nav"
        }`}
      >
        <div className="flex items-center justify-between gap-3 px-3 py-2.5 md:gap-4 md:px-5 md:py-3">
          <Link to="/" className="shrink-0 transition hover:opacity-90" onClick={() => setOpen(false)}>
            <img src={LOGO} alt="Dr. S. Arulrhaj" className="h-11 w-auto md:h-[3.25rem]" width={196} height={64} />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
            {NAV.map((item) => (
              <NavLinkDesktop
                key={item.label}
                item={item}
                pathname={pathname}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />
            ))}
          </nav>

          <Link
            to="/contact"
            className="btn-premium relative z-10 hidden min-w-[9rem] items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white md:inline-flex"
          >
            Contact now
          </Link>

          <button
            type="button"
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/60 bg-white/50 text-medical-deep backdrop-blur-sm transition hover:bg-white/80 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/40 lg:hidden"
            >
              <div className="max-h-[min(70vh,calc(100dvh-8rem))] overflow-y-auto px-4 py-4">
                {NAV.map((item) => (
                  <MobileNavItem key={item.label} item={item} pathname={pathname} onNavigate={() => setOpen(false)} />
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-premium mt-4 flex w-full justify-center rounded-full py-3.5 text-sm font-semibold text-white"
                >
                  Contact now
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function NavLinkDesktop({
  item,
  pathname,
  openDropdown,
  setOpenDropdown,
}: {
  item: NavItem;
  pathname: string;
  openDropdown: string | null;
  setOpenDropdown: (v: string | null) => void;
}) {
  if (item.children) {
    const isOpen = openDropdown === item.label;
    const groupActive =
      item.label === "About" ? pathMatchesAbout(pathname) : item.label === "Health" ? pathMatchesHealth(pathname) : false;

    return (
      <div
        className="relative"
        onMouseEnter={() => setOpenDropdown(item.label)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button
          type="button"
          className={`nav-link-wrap relative px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/75 transition hover:text-medical-deep xl:px-4 ${groupActive ? "is-active" : ""}`}
        >
          {item.label}
          <span className="nav-underline" />
          <ChevronDown className={`ml-0.5 inline h-3.5 w-3.5 transition ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && (
          <div className="absolute left-1/2 top-full z-50 min-w-[220px] -translate-x-1/2 pt-3">
            <div className="overflow-hidden rounded-xl border border-white/70 bg-white/95 py-2 shadow-2xl shadow-medical/10 backdrop-blur-xl">
              {item.children.map((child) => {
                const childActive = pathname === child.to || pathname.startsWith(`${child.to}/`);
                return (
                  <Link
                    key={child.to}
                    to={child.to}
                    className={`block px-5 py-2.5 text-sm transition ${
                      childActive
                        ? "bg-gradient-to-r from-brand/15 to-medical/10 font-medium text-medical-deep"
                        : "text-foreground/75 hover:bg-muted/80 hover:text-medical-deep"
                    }`}
                  >
                    {child.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  const active =
    item.to === "/"
      ? pathname === "/"
      : pathname === item.to || pathname.startsWith(`${item.to}/`);

  return (
    <Link
      to={item.to!}
      className={`nav-link-wrap relative px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/75 transition hover:text-medical-deep xl:px-4 ${active ? "is-active" : ""}`}
      activeOptions={{ exact: item.to === "/" }}
    >
      {item.label}
      <span className="nav-underline" />
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
  const [expanded, setExpanded] = useState(false);

  if (item.children) {
    const groupActive =
      item.label === "About" ? pathMatchesAbout(pathname) : item.label === "Health" ? pathMatchesHealth(pathname) : false;

    return (
      <div className="border-b border-border/50 py-1">
        <button
          type="button"
          className={`flex w-full items-center justify-between rounded-lg px-2 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.12em] ${
            groupActive ? "text-medical-deep" : "text-foreground/80"
          }`}
          onClick={() => setExpanded((e) => !e)}
        >
          {item.label}
          <ChevronDown className={`h-4 w-4 shrink-0 transition ${expanded ? "rotate-180" : ""}`} />
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="ml-1 space-y-0.5 border-l-2 border-brand/40 py-2 pl-3">
                {item.children.map((child) => {
                  const childActive = pathname === child.to;
                  return (
                    <Link
                      key={child.to}
                      to={child.to}
                      onClick={onNavigate}
                      className={`block rounded-md py-2 pl-2 text-sm ${
                        childActive ? "font-medium text-medical-deep" : "text-muted-foreground"
                      }`}
                    >
                      {child.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  const active =
    item.to === "/"
      ? pathname === "/"
      : pathname === item.to || pathname.startsWith(`${item.to}/`);

  return (
    <Link
      to={item.to!}
      onClick={onNavigate}
      className={`block border-b border-border/50 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] ${
        active ? "text-medical-deep" : "text-foreground/80"
      }`}
    >
      {item.label}
    </Link>
  );
}
