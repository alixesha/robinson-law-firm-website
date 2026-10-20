
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Scale,
  ShieldCheck,
  Users,
  ArrowRight,
  BookOpen,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";
import library from "@/assets/law-library.jpg";
import { CallButton, CtaBand, PageHero, Section } from "@/components/site/Layout";
import { FIRM, pageMeta } from "@/lib/firm";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About Kory G. Robinson | Abilene, Texas Attorney",
      "Learn about attorney Kory G. Robinson, his legal education, Texas bar admission, approach to criminal defense and family law, and Abilene office.",
    ),
  component: About,
});

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-[opacity,transform] duration-1000 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function About() {
  return (
    <>
      <PageHero
        eyebrow="The Attorney"
        title="Kory G. Robinson"
        intro="Legal representation grounded in preparation, clear communication, and a direct understanding of the challenges clients face."
        image={library}
      />

      <Section className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">A Professional Introduction</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Clear guidance for consequential decisions.
          </h2>
          <div className="gold-rule my-7" />
          <p className="text-base leading-8 text-muted-foreground">
            Legal issues can affect your freedom, your family, your finances,
            and your future. Understanding the process and the options available
            is an important first step.
          </p>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            The Law Office of Kory G. Robinson represents clients in criminal
            defense and family law matters in Abilene, Texas. The office's
            approach emphasizes direct communication, thoughtful preparation,
            and an honest discussion of each client's circumstances.
          </p>
          <div className="mt-8">
            <CallButton />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative overflow-hidden border border-gold/20 bg-card p-7 sm:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gold/5 blur-3xl" />
            <p className="eyebrow">Professional Background</p>

            <div className="mt-8 space-y-0">
              <div className="flex gap-5 border-b border-border py-6 first:pt-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 bg-gold/5">
                  <GraduationCap className="h-6 w-6 text-gold" aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-xl">Legal Education</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    Juris Doctor, Texas Tech University School of Law, 1994.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 border-b border-border py-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 bg-gold/5">
                  <Scale className="h-6 w-6 text-gold" aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-xl">Texas Bar Admission</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    Admitted to the State Bar of Texas on November 4, 1994.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 py-6 last:pb-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/30 bg-gold/5">
                  <MapPin className="h-6 w-6 text-gold" aria-hidden />
                </span>
                <div>
                  <h3 className="font-serif text-xl">Based in Abilene</h3>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    Serving clients from an office in Abilene, Texas, with a
                    focus on criminal defense and family law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <section className="border-y border-border bg-navy-deep">
        <Section>
          <Reveal>
            <p className="eyebrow">The Approach</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
              A legal matter deserves attention to the details.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-muted-foreground">
              Every client's circumstances are different. Understanding those
              circumstances helps shape the questions to ask, the options to
              consider, and the next steps to discuss.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                number: "01",
                title: "Understand",
                description:
                  "Take time to understand the facts, concerns, and practical issues surrounding the matter.",
              },
              {
                icon: ShieldCheck,
                number: "02",
                title: "Evaluate",
                description:
                  "Review the available information and discuss relevant legal options, risks, and considerations.",
              },
              {
                icon: Users,
                number: "03",
                title: "Prepare",
                description:
                  "Develop an approach based on the specific circumstances and keep communication clear throughout the process.",
              },
            ].map((item, index) => (
              <Reveal key={item.number} delay={index * 120}>
                <article className="group h-full border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 sm:p-8">
                  <div className="flex items-center justify-between">
                    <item.icon
                      className="h-7 w-7 text-gold transition-transform duration-500 group-hover:scale-110"
                      aria-hidden
                    />
                    <span className="font-serif text-3xl text-gold/50">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="mt-8 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      </section>

      <Section>
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Areas of Practice</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Focused on criminal defense and family law.
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              These areas of law involve personal and often difficult
              circumstances. Learning about the relevant practice area can help
              you prepare for a conversation with the office.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Link
              to="/criminal-defense"
              className="group flex h-full flex-col border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 sm:p-9"
            >
              <Scale className="h-8 w-8 text-gold" aria-hidden />
              <h3 className="mt-6 font-serif text-2xl">
                Criminal Defense
              </h3>
              <p className="mt-4 flex-1 leading-7 text-muted-foreground">
                Explore information about criminal defense representation,
                legal procedures, and considerations when facing a criminal
                charge.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Explore Criminal Defense
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={140}>
            <Link
              to="/family-law"
              className="group flex h-full flex-col border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 sm:p-9"
            >
              <Users className="h-8 w-8 text-gold" aria-hidden />
              <h3 className="mt-6 font-serif text-2xl">Family Law</h3>
              <p className="mt-4 flex-1 leading-7 text-muted-foreground">
                Learn more about family law matters, the legal process, and
                considerations for individuals and families navigating change.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Explore Family Law
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      <section className="border-y border-border bg-card">
        <Section className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <Reveal>
            <p className="eyebrow">Connect With the Office</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
              Start with a conversation about your situation.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Contact the office to discuss your legal matter and ask about
              possible next steps. Outcomes depend on the facts and applicable
              law; no particular result is guaranteed.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-4">
              <CallButton />
              <div className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>{FIRM.phone}</span>
              </div>
              <div className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>{FIRM.street}, {FIRM.cityLine}</span>
              </div>
            </div>
          </Reveal>
        </Section>
      </section>

      <div className="border-b border-border bg-navy-deep">
        <Section className="!py-8">
          <div className="flex items-start gap-3 text-xs leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden />
            <p>
              This website provides general information, not legal advice.
              Contacting the office does not by itself establish an
              attorney-client relationship. Verify current credentials and
              professional details directly with the relevant official sources.
            </p>
          </div>
        </Section>
      </div>

      <CtaBand />
    </>
  );
                  }
