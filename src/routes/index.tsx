
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Gavel,
  Users,
  ShieldCheck,
  ArrowRight,
  Phone,
  MapPin,
  Scale,
  MessageCircle,
} from "lucide-react";

import hero from "@/assets/hero-courthouse.jpg";
import library from "@/assets/law-library.jpg";
import {
  CallButton,
  CtaBand,
  LinkButton,
  Section,
} from "@/components/site/Layout";
import { FIRM, pageMeta } from "@/lib/firm";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Abilene Criminal Defense & Family Law Attorney | Kory G. Robinson",
      "Contact the Law Office of Kory G. Robinson in Abilene, Texas, regarding criminal defense and family law matters. Call (325) 676-5679.",
    ),
  component: Index,
});

/** Smooth reveal as sections enter the viewport. */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 850ms ease ${delay}ms, transform 850ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const practiceAreas = [
  {
    to: "/criminal-defense" as const,
    icon: Gavel,
    number: "01",
    title: "Criminal Defense",
    description:
      "Information and legal representation for criminal charges, with careful attention to your circumstances, available options, and the legal process.",
    services: ["DWI and alcohol-related charges", "Drug-related charges", "Assault and theft allegations"],
  },
  {
    to: "/family-law" as const,
    icon: Users,
    number: "02",
    title: "Family Law",
    description:
      "Guidance through important family-law matters, helping you understand the process, prepare for decisions, and consider your available options.",
    services: ["Divorce and separation", "Child custody and support", "Family-law modifications"],
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-navy-deep lg:min-h-[100svh]">
        <img
          src={hero}
          alt="Historic courthouse representing the legal system in Texas"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center animate-slowzoom"
        />

        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/75 to-[#07111f]/25" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07111f] to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-8 lg:pb-28">
          <div className="max-w-4xl">
            <p className="eyebrow animate-rise">
              <span className="mr-2 inline-block h-px w-8 bg-gold align-middle" />
              Law Office of Kory G. Robinson
            </p>

            <h1 className="mt-7 max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.2rem] animate-rise [animation-delay:150ms]">
              When the stakes are high,
              <span className="mt-2 block text-gold-gradient italic">
                know where to turn.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg animate-rise [animation-delay:300ms]">
              Facing a difficult legal situation can leave you with
              important questions. The Law Office of Kory G. Robinson
              provides representation in criminal defense and family law
              matters in Abilene, Texas.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row animate-rise [animation-delay:450ms]">
              <CallButton />
              <LinkButton to="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 inline h-4 w-4" aria-hidden />
              </LinkButton>
            </div>

            <div className="mt-9 flex items-start gap-3 text-sm text-white/70 animate-rise [animation-delay:550ms]">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
              <p>
                {FIRM.street}
                <br />
                {FIRM.cityLine}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/60 lg:flex">
          <span className="h-px w-10 bg-gold/70" />
          Abilene, Texas
        </div>
      </section>

      {/* INTRODUCTION */}
      <Section>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow">Legal Representation</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl md:text-5xl">
                Clear guidance for the matters that matter most.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-muted-foreground">
              Every legal situation is different. Understanding your options,
              the process ahead, and the decisions you face is an important
              first step. Explore the firm's practice areas to learn more.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {practiceAreas.map((practice, index) => (
            <Reveal key={practice.to} delay={index * 140}>
              <Link
                to={practice.to}
                className="group relative block h-full overflow-hidden rounded-sm border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center border border-gold/30 bg-gold/5">
                    <practice.icon
                      className="h-7 w-7 text-gold"
                      aria-hidden
                    />
                  </div>
                  <span className="text-sm tracking-[0.2em] text-muted-foreground/60">
                    {practice.number}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl sm:text-3xl">
                  {practice.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {practice.description}
                </p>

                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {practice.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                      {service}
                    </li>
                  ))}
                </ul>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Explore practice area
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                    aria-hidden
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <section className="overflow-hidden bg-navy-deep">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:py-24 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">
          <Reveal>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-gold/60 sm:-left-5 sm:-top-5" />
              <img
                src={library}
                alt="Traditional law library"
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
              />
              <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b border-r border-gold/60 sm:-bottom-5 sm:-right-5" />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="lg:py-8">
              <p className="eyebrow">About the Attorney</p>
              <h2 className="mt-5 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                A thoughtful approach to your legal concerns.
              </h2>

              <div className="my-7 h-px w-20 bg-gold" />

              <p className="leading-8 text-white/70">
                Legal challenges often come with uncertainty. The Law Office
                of Kory G. Robinson helps clients navigate criminal defense
                and family law matters with attention to the facts, the
                applicable legal process, and the decisions ahead.
              </p>

              <p className="mt-5 leading-8 text-white/70">
                Learn about the attorney, the office, and how to get in touch
                to discuss your particular situation.
              </p>

              <div className="mt-9">
                <LinkButton to="/about">
                  About Kory G. Robinson
                  <ArrowRight className="ml-2 inline h-4 w-4" aria-hidden />
                </LinkButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">The Client Experience</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
              A considered approach to every legal matter.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
              Good communication starts with understanding the circumstances
              and explaining the process. Here are the principles this
              website highlights about the firm's approach.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {[
            {
              icon: MessageCircle,
              title: "Clear Communication",
              text: "Understand the legal process, the questions to ask, and the next steps relevant to your situation.",
            },
            {
              icon: ShieldCheck,
              title: "Straightforward Guidance",
              text: "Discuss your circumstances and available options without relying on unrealistic promises.",
            },
            {
              icon: Scale,
              title: "Attention to Detail",
              text: "Legal documents, deadlines, and case-specific details can all be important to the process.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div className="h-full border-t border-gold/50 pt-7">
                <item.icon className="h-7 w-7 text-gold" aria-hidden />
                <h3 className="mt-5 text-xl sm:text-2xl">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT STRIP */}
      <section className="border-y border-gold/20 bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30">
              <Phone className="h-5 w-5 text-gold" aria-hidden />
            </div>
            <div>
              <p className="text-lg font-medium">Contact the Law Office</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Call to discuss arranging a consultation.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <LinkButton to="/contact">Contact the Office</LinkButton>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
                }
