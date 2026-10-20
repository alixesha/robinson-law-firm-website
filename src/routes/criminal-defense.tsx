import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-courthouse.jpg";
import { PracticePage } from "@/components/site/PracticePage";
import { pageMeta } from "@/lib/firm";

export const Route = createFileRoute("/criminal-defense")({
  head: () => pageMeta("Criminal Defense Lawyer in Abilene, TX | Kory G. Robinson", "Charged with a crime in Abilene or Taylor County? Attorney Kory G. Robinson defends DWI, drug, assault, theft, and felony cases. Call (325) 676-5679."),
  component: () => (
    <PracticePage
      eyebrow="Criminal Defense"
      title="Protecting your rights, your record, and your future."
      intro="An arrest is not a conviction. You have the right to a defense — and the sooner you have an attorney, the more options you may have."
      image={hero}
      overview={[
        "A criminal charge in Texas can affect your freedom, your job, your driver's license, and your reputation. Prosecutors begin building their case right away. Having an attorney in your corner early can make a meaningful difference in how your case proceeds.",
        "Kory G. Robinson represents people charged with misdemeanor and felony offenses in Abilene, Taylor County, and surrounding courts. He reviews the facts, examines how the evidence was gathered, identifies potential defenses, and explains every option — from dismissal and reduced charges to trial.",
        "If you or a family member has been arrested or is under investigation, avoid discussing the case with law enforcement until you have spoken with a lawyer.",
      ]}
      steps={[
        "Confidential review of your charges and the evidence",
        "Close examination of the stop, search, and arrest",
        "Plain-language explanation of possible outcomes",
        "Firm negotiation and readiness to go to trial",
      ]}
      services={[
        { title: "DWI / DUI", text: "First-offense and repeat DWI charges, including license-related issues." },
        { title: "Drug Offenses", text: "Possession, possession with intent, and related charges." },
        { title: "Assault & Family Violence", text: "Assault, aggravated assault, and family violence allegations." },
        { title: "Theft & Property Crimes", text: "Shoplifting, theft, burglary, and criminal mischief." },
        { title: "Felony Charges", text: "Serious charges carrying the potential for state jail or prison time." },
        { title: "Probation Violations", text: "Motions to revoke and adjudicate probation or community supervision." },
      ]}
    />
  ),
});
