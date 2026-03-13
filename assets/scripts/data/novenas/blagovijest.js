export const blagovijestNovena = {
  slug: "blagovijest",
  title: "Devetnica za Blagovijest",
  shortTitle: "Blagovijest",
  feastTitle: "Svetkovina Blagovijesti",
  feast: { month: 3, day: 25 },
  summary:
    "Devetnica usmjerena na Marijin pristanak, povjerenje i otvorenost Bozjem pozivu.",
  theme:
    "Dobro pristaje kao druga ozujaska devetnica jer odmah nakon sv. Josipa zadrzava ritam kalendara.",
  intro:
    "Ovdje je pripremljena zasebna stranica za devetnicu Blagovijesti. Tekstovi su trenutno postavljeni kao uredna struktura koju poslije mozes dopuniti punim molitvama.",
  pageTitle: "Kako moliti devetnicu za Blagovijest",
  pageDescription:
    "Predlozak s danima devetnice i prostorom za potpune tekstove molitve.",
  link: "../devetnice/blagovijest.html",
  homeLink: "devetnice/blagovijest.html",
  details: [
    "Pocinje 16. ozujka i traje do uoci svetkovine.",
    "Dobra je za prikaz kako kalendar moze nositi vise paralelnih devetnica u istom mjesecu.",
    "Kasnije se moze obogatiti citanjima i marijanskim zazivima."
  ],
  days: Array.from({ length: 9 }, (_, index) => ({
    day: index + 1,
    title: `Dan ${index + 1}`,
    intention: "Mjesto za nakanu toga dana devetnice.",
    prayer:
      "Ovdje dolazi puni tekst molitve dana. Struktura je namjerno odvojena od dizajna kako bi kasnije bilo lako urediti sadrzaj."
  }))
};
