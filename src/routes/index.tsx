import { createFileRoute, Link } from "@tanstack/react-router";
import { Gavel, Users, ShieldCheck, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-courthouse.jpg";
import library from "@/assets/law-library.jpg";
import { CallButton, CtaBand, LinkButton, Section } from "@/components/site/Layout";
import { FIRM, pageMeta } from "@/lib/firm";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Abilene Criminal Defense & Family Law Attorney | Kory G. Robinson",
      "Law Office of Kory G. Robinson — criminal defense and family law representation in Abilene, Texas. Call (325) 676-5679 to discuss your case.",
    ),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img src={hero} alt="Historic Texas courthouse at dusk" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-right animate-slowzoom" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 lg:px-8">
          <p className="eyebrow animate-rise">Abilene, Texas · Attorney at Law</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-7xl animate-rise [animation-delay:120ms]">
            Steady counsel when <span className="text-gold-gradient italic">everything is on the line.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 animate-rise [animation-delay:240ms]">
            Attorney Kory G. Robinson represents people across the Big Country in criminal defense and family law matters — with
            direct communication, careful preparation, and respect for what you're facing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-rise [animation-delay:360ms]">
            <CallButton />
            <LinkButton to="/contact">Request a Consultation</LinkButton>
          </div>
          <p className="mt-8 text-sm text-muted-foreground animate-rise [animation-delay:480ms]">{FIRM.street}, {FIRM.cityLine}</p>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl">
          <p className="eyebrow">Practice Areas</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Focused on two areas of law that shape lives.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            { to: "/criminal-defense" as const, icon: Gavel, title: "Criminal Defense", text: "Defense for misdemeanor and felony charges, including DWI, drug offenses, assault, theft, and probation matters in Taylor County and nearby courts." },
            { to: "/family-law" as const, icon: Users, title: "Family Law", text: "Guidance through divorce, child custody, child support, modifications, and other family matters with discretion and a clear plan." },
          ].map((p) => (
            <Link key={p.to} to={p.to} className="group relative overflow-hidden rounded-sm border border-border bg-card p-10 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-gold">
              <p.icon className="h-9 w-9 text-gold" aria-hidden />
              <h3 className="mt-6 text-3xl">{p.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.text}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-navy-deep">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-2 lg:px-8">
          <img src={library} alt="Law library with scales of justice on a desk" width={1280} height={1280} loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover lg:aspect-square" />
          <div>
            <p className="eyebrow">About the Attorney</p>
            <h2 className="mt-4 text-4xl md:text-5xl">A local attorney who takes your case personally.</h2>
            <div className="gold-rule my-8" />
            <p className="leading-relaxed text-muted-foreground">
              When you call the Law Office of Kory G. Robinson, you work with the attorney handling your case. Kory takes the time
              to understand your circumstances, explain the process in plain terms, and pursue the strategy that fits your goals.
            </p>
            <div className="mt-10"><LinkButton to="/about">Meet Kory G. Robinson</LinkButton></div>
          </div>
        </div>
      </section>

      <Section>
        <p className="eyebrow">Our Commitment</p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">What you can expect from this office.</h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {[
            ["Direct Access", "Speak with your attorney, not a call center. Questions get answered."],
            ["Honest Assessment", "A candid explanation of your options and the risks involved — no false promises."],
            ["Thorough Preparation", "Every document, deadline, and detail reviewed with care before you walk into court."],
          ].map(([t, d]) => (
            <div key={t} className="border-t border-gold/40 pt-6">
              <ShieldCheck className="h-6 w-6 text-gold" aria-hidden />
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
