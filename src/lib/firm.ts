export const FIRM = {
  name: "Law Office of Kory G. Robinson",
  attorney: "Kory G. Robinson",
  phone: "(325) 676-5679",
  phoneHref: "tel:+13256765679",
  street: "3301 N 3rd St, Suite 102",
  cityLine: "Abilene, TX 79603",
  mapQuery: "3301 N 3rd St Suite 102, Abilene, TX 79603",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/criminal-defense", label: "Criminal Defense" },
  { to: "/family-law", label: "Family Law" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function pageMeta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
