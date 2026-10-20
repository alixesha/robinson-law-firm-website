import { createFileRoute } from "@tanstack/react-router";
import library from "@/assets/law-library.jpg";
import { PracticePage } from "@/components/site/PracticePage";
import { pageMeta } from "@/lib/firm";

export const Route = createFileRoute("/family-law")({
  head: () => pageMeta("Family Law Attorney in Abilene, TX | Divorce & Custody", "Abilene family law attorney Kory G. Robinson helps with divorce, child custody, child support, and modifications. Call (325) 676-5679."),
  component: () => (
    <PracticePage
      eyebrow="Family Law"
      title="Guidance for your family through life's hardest transitions."
      intro="Divorce and custody matters are personal. You deserve an attorney who handles them with discretion, patience, and resolve."
      image={library}
      overview={[
        "Family law cases involve the people and things that matter most — your children, your home, and your financial security. Decisions made now can shape your family's life for years to come.",
        "Kory G. Robinson helps Abilene-area clients understand Texas family law, prepare for each step, and make informed decisions. Whether your matter can be resolved through agreement or must be decided in court, he works to protect your interests and your relationship with your children.",
      ]}
      steps={[
        "Listening first to understand your goals and concerns",
        "Clear explanation of Texas family law and the process",
        "Pursuing fair agreements whenever possible",
        "Prepared advocacy in court when agreement isn't possible",
      ]}
      services={[
        { title: "Divorce", text: "Contested and uncontested divorce, including division of property and debts." },
        { title: "Child Custody", text: "Conservatorship, possession, and access arrangements focused on your children." },
        { title: "Child Support", text: "Establishing and enforcing support under Texas guidelines." },
        { title: "Modifications", text: "Updating custody, visitation, or support orders when circumstances change." },
        { title: "Enforcement", text: "Addressing violations of existing court orders." },
        { title: "Protective Orders", text: "Seeking or responding to protective orders in family situations." },
      ]}
    />
  ),
});
