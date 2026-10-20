import { createFileRoute } from "@tanstack/react-router";
import library from "@/assets/law-library.jpg";
import { CtaBand, PageHero, Section } from "@/components/site/Layout";
import { pageMeta } from "@/lib/firm";

export const Route = createFileRoute("/about")({
  head: () => pageMeta("About Attorney Kory G. Robinson | Abilene, TX Lawyer", "Meet Kory G. Robinson, an Abilene, Texas attorney practicing criminal defense and family law with a personal, client-focused approach."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About the Attorney" title="Kory G. Robinson" intro="Personal representation for individuals and families in Abilene and across the Big Country." image={library} />
      <Section className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow">Our Approach</p>
          <h2 className="mt-4 text-4xl">Clear answers. Careful work. Real attention.</h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Facing a criminal charge or a family dispute can be one of the most stressful experiences of your life. The Law Office of
            Kory G. Robinson was built to give clients something they often can't find elsewhere: an attorney who listens, explains
            what's happening, and stays engaged from the first call through the final resolution.
          </p>
          <p>
            Kory focuses his practice on criminal defense and family law, serving clients from his office on North 3rd Street in
            Abilene. That focus allows him to dedicate the time each matter requires — reviewing the evidence, understanding the
            people involved, and preparing for negotiation or trial.
          </p>
          <p>
            Every case is different, and so is every client. Kory will give you an honest assessment of your situation and work with
            you to pursue the outcome that best protects your rights, your family, and your future.
          </p>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
