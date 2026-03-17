export const blagovijestNovena = {
  slug: "blagovijest",
  title: "Devetnica za Blagovijest",
  shortTitle: "Blagovijest",
  feastTitle: "Svetkovina Blagovijesti",
  feast: { month: 3, day: 25 },
  summary:
    "Devetnica usmjerena na Marijin pristanak, povjerenje i otvorenost Božjem pozivu.",
  theme:
    "Dobro pristaje kao druga ožujska devetnica jer odmah nakon sv. Josipa zadržava ritam kalendara.",
  intro:
    "Ovdje je pripremljena zasebna stranica za devetnicu Blagovijesti. Tekstovi su trenutno postavljeni kao uredna struktura koju poslije možeš dopuniti punim molitvama.",
  pageTitle: "Kako moliti devetnicu za Blagovijest",
  pageDescription:
    "Predložak s danima devetnice i prostorom za potpune tekstove molitve.",
  link: "../devetnice/blagovijest.html",
  homeLink: "devetnice/blagovijest.html",
  details: [
    "Počinje 16. ožujka i traje do uoči svetkovine.",
    "Dobra je za prikaz kako kalendar može nositi više paralelnih devetnica u istom mjesecu.",
    "Kasnije se može obogatiti čitanjima i marijanskim zazivima."
  ],
  days: Array.from({ length: 9 }, (_, index) => ({
    day: index + 1,
    title: `Dan ${index + 1}`,
    intention: "Mjesto za nakanu toga dana devetnice.",
    prayer:
      "Ovdje dolazi puni tekst molitve dana. Struktura je namjerno odvojena od dizajna kako bi kasnije bilo lako urediti sadržaj."
  }))
};
