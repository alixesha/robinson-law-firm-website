import { createFileRoute } from "@tanstack/react-router";
import library from "@/assets/law-library.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand, PageHero, Section } from "@/components/site/Layout";
import { pageMeta } from "@/lib/firm";

const FAQS = [
  ["Should I talk to the police before speaking with a lawyer?", "You have the right to remain silent and the right to an attorney. It is generally wise to politely decline to answer questions about an alleged offense until you have spoken with a lawyer."],
  ["What should I bring to my consultation?", "Bring any paperwork you have — bond documents, citations, court notices, existing court orders, or petitions — along with a list of questions and relevant dates."],
  ["Can criminal charges be reduced or dismissed?", "Depending on the facts and the evidence, options may include dismissal, reduced charges, deferred adjudication, or trial. Every case is different, and no attorney can promise a particular outcome."],
  ["How long does a divorce take in Texas?", "Texas requires a 60-day waiting period after a divorce petition is filed in most cases. Many divorces take longer depending on whether the parties agree on property, custody, and support."],
  ["How is child custody decided?", "Texas courts make custody (conservatorship) decisions based on the best interest of the child, considering factors such as stability, each parent's involvement, and the child's needs."],
  ["Can a custody or support order be changed?", "Yes. Orders may be modified when there has been a material and substantial change in circumstances, among other grounds recognized by Texas law."],
  ["Where is the office located?", "The office is located at 3301 N 3rd St, Suite 102, Abilene, TX 79603. Please call ahead at (325) 676-5679 to schedule a time to meet."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta("Frequently Asked Questions | Abilene Criminal & Family Lawyer", "Answers to common questions about criminal charges, divorce, custody, and consultations with the Law Office of Kory G. Robinson in Abilene, TX."),
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      }),
    }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Answers to common questions." intro="General information to help you understand where you stand. For advice about your situation, please call the office." image={library} />
      <Section className="max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map(([q, a], i) => (
            <AccordionItem key={q} value={`q${i}`} className="border-border">
              <AccordionTrigger className="py-6 text-left font-serif text-xl hover:text-gold hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-10 text-sm text-muted-foreground">These answers are general information, not legal advice for your specific situation.</p>
      </Section>
      <CtaBand />
    </>
  );
}
