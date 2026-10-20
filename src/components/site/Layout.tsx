
import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, Phone, X, MapPin, Scale, ArrowUpRight } from "lucide-react";
import { FIRM, NAV } from "@/lib/firm";

export function CallButton({
  variant = "solid",
  className = "",
}: {
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";
  const styles =
    variant === "solid"
      ? "bg-gold-gradient text-primary-foreground shadow-gold hover:-translate-y-0.5 hover:brightness-110"
      : "border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground";

  return (
    <a
      href={FIRM.phoneHref}
      className={`${base} ${styles} ${className}`}
      aria-label={`Call ${FIRM.phone}`}
    >
      <Phone className="h-4 w-4" aria-hidden />
      Call {FIRM.phone}
    </a>
  );
}

export function LinkButton({
  to,
  children,
}: {
  to: "/contact" | "/about" | "/criminal-defense" | "/family-law";
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center justify-center gap-2 rounded-sm border border-gold/60 px-6 py-3.5 text-sm font-semibold tracking-wide text-gold transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      {children}
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled || open
          ? "border-border bg-navy-deep/95 shadow-lg backdrop-blur-xl"
          : "border-transparent bg-navy-deep/25 backdrop-blur-sm"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-3 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:h-20 lg:px-8">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex min-w-0 items-center gap-3"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/50 bg-gold/5 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10">
            <Scale className="h-6 w-6 text-gold" aria-hidden />
          </span>

          <span className="leading-tight">
            <span className="block font-serif text-lg text-foreground transition-colors group-hover:text-gold sm:text-xl">
              Kory G. Robinson
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.24em] text-gold sm:text-[10px] sm:tracking-[0.3em]">
              Attorney at Law
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex 2xl:gap-7"
        >
          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-gold" }}
              className="group relative whitespace-nowrap py-2 text-sm text-foreground/80 transition-colors duration-300 hover:text-gold"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={FIRM.phoneHref}
            className="hidden items-center gap-2 border border-gold/50 bg-gold-gradient px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>{FIRM.phone}</span>
          </a>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-gold hover:text-gold xl:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-in-out xl:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="min-h-0 overflow-hidden border-t border-border bg-navy-deep/98 px-5">
          <div className="mx-auto max-w-7xl py-3">
            {NAV.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-gold pl-3" }}
                className="group flex items-center justify-between border-b border-border/70 py-4 font-serif text-lg text-foreground transition-all duration-300 hover:pl-2 hover:text-gold"
                style={{ transitionDelay: `${index * 35}ms` }}
                tabIndex={open ? 0 : -1}
              >
                {item.label}
                <ArrowUpRight
                  className="h-4 w-4 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  aria-hidden
                />
              </Link>
            ))}

            <CallButton className="my-5 w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center border border-gold/50">
              <Scale className="h-6 w-6 text-gold" aria-hidden />
            </span>
            <span>
              <span className="block font-serif text-xl text-foreground">
                {FIRM.name}
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.24em] text-gold">
                Attorney at Law
              </span>
            </span>
          </Link>

          <div className="gold-rule my-6" />

          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            Criminal defense and family law information for people in Abilene
            and the surrounding Big Country communities.
          </p>

          <a
            href={FIRM.phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {FIRM.phone}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div>
          <p className="eyebrow mb-6">Explore the Website</p>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-4 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:translate-x-1 hover:text-gold"
                >
                  <span className="h-px w-3 bg-gold/60" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-6">Office Information</p>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden />
              <div className="text-sm leading-6 text-muted-foreground">
                <p>{FIRM.street}</p>
                <p>{FIRM.cityLine}</p>
              </div>
            </div>

            <a
              href={FIRM.phoneHref}
              className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <Phone className="h-5 w-5 shrink-0 text-gold" aria-hidden />
              {FIRM.phone}
            </a>
          </div>

          <div className="mt-7 border-l border-gold/50 pl-4">
            <p className="text-xs leading-6 text-muted-foreground">
              Contact the office to discuss your situation and ask about the
              next steps available to you.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-7 lg:px-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
          </p>

          <p className="mt-3 max-w-5xl text-xs leading-6 text-muted-foreground/80">
            Attorney advertising. The information on this website is for general
            informational purposes only and is not legal advice. Viewing this
            site or contacting the office does not create an attorney-client
            relationship. Past results, if any, do not guarantee future outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <main id="main">{children}</main>

      <Footer />

      <a
        href={FIRM.phoneHref}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 border border-white/20 bg-gold-gradient px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform duration-300 hover:-translate-y-1 sm:hidden"
        aria-label={`Call ${FIRM.phone}`}
      >
        <Phone className="h-4 w-4" aria-hidden />
        Call Now
      </a>
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-16 pt-32 sm:min-h-[65vh] md:pb-20">
      <img
        src={image}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover animate-slowzoom"
      />

      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <p className="eyebrow animate-rise">{eyebrow}</p>

        <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl animate-rise [animation-delay:120ms]">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-foreground/80 sm:text-lg sm:leading-8 animate-rise [animation-delay:240ms]">
          {intro}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 animate-rise [animation-delay:360ms]">
          <CallButton />
          <LinkButton to="/contact">Request a Consultation</LinkButton>
        </div>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`mx-auto max-w-7xl px-5 py-16 sm:py-20 md:py-28 lg:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden border-y border-gold/20 bg-card">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:py-20 md:flex-row md:items-center lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Speak with an Attorney</p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Your situation deserves a careful look.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Contact the office to discuss your matter and learn about your
            available options. Every situation is different.
          </p>
        </div>

        <div className="flex w-full flex-wrap gap-3 sm:w-auto sm:gap-4">
          <CallButton />
          <LinkButton to="/contact">Send a Message</LinkButton>
        </div>
      </div>
    </section>
  );
              }
