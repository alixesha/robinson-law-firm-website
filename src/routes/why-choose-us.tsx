import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-courthouse.jpg";
import { CtaBand, PageHero, Section } from "@/components/site/Layout";
import { pageMeta } from "@/lib/firm";

export const Route = createFileRoute("/why-choose-us")({
  head: () => pageMeta("Why Choose the Law Office of Kory G. Robinson | Abilene", "Personal attention, honest advice, and local knowledge. Learn why Abilene clients call Kory G. Robinson for criminal defense and family law."),
  component: Why,
});

const REASONS = [
  ["01", "You work with your attorney", "Your case isn't passed off. Kory is personally involved and available to answer your questions."],
  ["02", "Honest, realistic advice", "You'll get a straightforward assessment of your situation — never guarantees or empty promises."],
  ["03", "Local to Abilene", "The office is right here on North 3rd Street, serving clients throughout Taylor County and the Big Country."],
  ["04", "Focused practice", "Concentrating on criminal defense and family law allows deeper attention to each client's matter."],
  ["05", "Prepared at every stage", "From the first filing to the final hearing, every step is approached with diligence and preparation."],
  ["06", "Respect and discretion", "Legal problems are personal. Your information is treated with confidentiality and care."],
];

function Why() {
  return (
    <>
      <PageHero eyebrow="Why Choose Us" title="Representation built on trust and attention." intro="Choosing a lawyer is an important decision. Here is what you can expect when you work with this office." image={hero} />
      <Section>
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(([n, t, d]) => (
            <div key={n}>
              <p className="font-serif text-5xl text-gold-gradient">{n}</p>
              <div className="gold-rule my-5" />
              <h2 className="text-2xl">{t}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
