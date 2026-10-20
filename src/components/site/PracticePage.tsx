import { Check } from "lucide-react";
import { CtaBand, PageHero, Section } from "./Layout";

export function PracticePage(props: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  overview: string[];
  services: { title: string; text: string }[];
  steps: string[];
}) {
  return (
    <>
      <PageHero eyebrow={props.eyebrow} title={props.title} intro={props.intro} image={props.image} />
      <Section className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          {props.overview.map((p) => <p key={p}>{p}</p>)}
        </div>
        <aside className="rounded-sm border border-border bg-card p-8">
          <p className="eyebrow">How we work</p>
          <ul className="mt-6 space-y-4">
            {props.steps.map((s) => (
              <li key={s} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden /><span>{s}</span></li>
            ))}
          </ul>
        </aside>
      </Section>
      <section className="bg-navy-deep">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <p className="eyebrow">Matters We Handle</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {props.services.map((s) => (
              <div key={s.title} className="bg-navy-deep p-8 transition-colors hover:bg-card">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
