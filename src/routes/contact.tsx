import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import hero from "@/assets/hero-courthouse.jpg";
import { CallButton, PageHero, Section } from "@/components/site/Layout";
import { FIRM, pageMeta } from "@/lib/firm";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta("Contact & Free Consultation Request | Kory G. Robinson, Abilene", "Request a consultation with Abilene attorney Kory G. Robinson. Call (325) 676-5679 or visit 3301 N 3rd St, Suite 102, Abilene, TX 79603."),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  area: z.enum(["Criminal Defense", "Family Law", "Other"]),
  message: z.string().trim().min(1, "Please briefly describe your matter").max(2000),
});

const field = "mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none";

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Request a consultation." intro="Tell us briefly about your situation, or call the office directly to speak with someone today." image={hero} />
      <Section className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-sm border border-border bg-card p-8 md:p-10">
          {sent ? (
            <div role="status" className="py-12 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-gold" aria-hidden />
              <h2 className="mt-6 text-3xl">Thank you.</h2>
              <p className="mt-3 text-muted-foreground">Your request has been received. For urgent matters, please call {FIRM.phone}.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <h2 className="text-3xl">Consultation Request</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name" error={errors.name}><input id="name" name="name" autoComplete="name" className={field} /></Field>
                <Field id="phone" label="Phone" error={errors.phone}><input id="phone" name="phone" type="tel" autoComplete="tel" className={field} /></Field>
              </div>
              <Field id="email" label="Email" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" className={field} /></Field>
              <Field id="area" label="Legal matter" error={errors.area}>
                <select id="area" name="area" className={field} defaultValue="Criminal Defense">
                  <option>Criminal Defense</option><option>Family Law</option><option>Other</option>
                </select>
              </Field>
              <Field id="message" label="Briefly describe your situation" error={errors.message}><textarea id="message" name="message" rows={5} className={field} /></Field>
              <p className="text-xs text-muted-foreground">Please do not include confidential details. Submitting this form does not create an attorney-client relationship.</p>
              <button type="submit" className="w-full rounded-sm bg-gold-gradient px-6 py-4 font-semibold text-primary-foreground shadow-gold transition hover:brightness-110">Submit Request</button>
            </form>
          )}
        </div>
        <div className="space-y-8">
          <div>
            <p className="eyebrow">Office</p>
            <p className="mt-4 flex gap-3 text-lg"><MapPin className="mt-1 h-5 w-5 text-gold" aria-hidden />{FIRM.street}<br />{FIRM.cityLine}</p>
            <a href={FIRM.phoneHref} className="mt-4 flex gap-3 text-lg hover:text-gold"><Phone className="mt-1 h-5 w-5 text-gold" aria-hidden />{FIRM.phone}</a>
            <CallButton className="mt-8" />
          </div>
          <iframe
            title="Map to the Law Office of Kory G. Robinson"
            src={`https://www.google.com/maps?q=${encodeURIComponent(FIRM.mapQuery)}&output=embed`}
            className="h-80 w-full rounded-sm border border-border grayscale-[40%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground/90">{label}</label>
      {children}
      {error && <p className="mt-1 text-sm text-destructive" role="alert">{error}</p>}
    </div>
  );
}
