import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, Phone, X, MapPin, Scale } from "lucide-react";
import { FIRM, NAV } from "@/lib/firm";

export function CallButton({ variant = "solid", className = "" }: { variant?: "solid" | "outline"; className?: string }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-gold-gradient text-primary-foreground shadow-gold hover:brightness-110 hover:-translate-y-0.5"
      : "border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground";
  return (
    <a href={FIRM.phoneHref} className={`${base} ${styles} ${className}`} aria-label={`Call ${FIRM.phone}`}>
      <Phone className="h-4 w-4" aria-hidden /> Call {FIRM.phone}
    </a>
  );
}

export function LinkButton({ to, children }: { to: "/contact" | "/about" | "/criminal-defense" | "/family-law"; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/60 px-6 py-3.5 text-sm font-semibold tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
    >
      {children}
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-border bg-navy-deep/95 backdrop-blur" : "bg-transparent"}`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-gold focus:px-3 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Scale className="h-7 w-7 text-gold" aria-hidden />
          <span className="leading-tight">
            <span className="block font-serif text-xl text-foreground">Kory G. Robinson</span>
            <span className="block text-[0.6rem] uppercase tracking-[0.3em] text-gold">Attorney at Law</span>
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 xl:flex">
          {NAV.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={FIRM.phoneHref} className="hidden items-center gap-2 rounded-sm bg-gold-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground sm:inline-flex">
            <Phone className="h-4 w-4" aria-hidden /> {FIRM.phone}
          </a>
          <button
            className="p-2 text-foreground xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-navy-deep px-5 pb-6 xl:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 font-serif text-xl text-foreground"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
          <CallButton className="mt-6 w-full" />
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-2xl">{FIRM.name}</p>
          <div className="gold-rule my-5" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Criminal defense and family law representation for Abilene and the surrounding Big Country communities.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-gold">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow mb-4">Office</p>
          <p className="flex gap-2 text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />{FIRM.street}<br />{FIRM.cityLine}</p>
          <a href={FIRM.phoneHref} className="flex gap-2 text-foreground hover:text-gold"><Phone className="h-4 w-4 text-gold" aria-hidden />{FIRM.phone}</a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs leading-relaxed text-muted-foreground lg:px-8">
          <p>© {new Date().getFullYear()} {FIRM.name}. All rights reserved.</p>
          <p className="mt-2">
            Attorney advertising. The information on this website is for general informational purposes only and is not legal advice.
            Viewing this site or contacting the office does not create an attorney-client relationship. Past results do not guarantee future outcomes.
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
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold sm:hidden"
        aria-label={`Call ${FIRM.phone}`}
      >
        <Phone className="h-4 w-4" aria-hidden /> Call Now
      </a>
    </>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image: string }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-16 pt-32">
      <img src={image} alt="" aria-hidden width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover animate-slowzoom" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl animate-rise">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 animate-rise">{intro}</p>
        <div className="mt-8 flex flex-wrap gap-4 animate-rise"><CallButton /><LinkButton to="/contact">Request a Consultation</LinkButton></div>
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-5 py-20 md:py-28 lg:px-8 ${className}`}>{children}</section>;
}

export function CtaBand() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="eyebrow">Speak with an attorney</p>
          <h2 className="mt-3 text-4xl">Your situation deserves a careful look.</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">Call the office to discuss your matter confidentially and learn your options.</p>
        </div>
        <div className="flex flex-wrap gap-4"><CallButton /><LinkButton to="/contact">Send a Message</LinkButton></div>
      </div>
    </section>
  );
}
