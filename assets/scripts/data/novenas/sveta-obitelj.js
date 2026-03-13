export const svetaObiteljNovena = {
  slug: "sveta-obitelj",
  title: "Devetnica Svetoj Obitelji",
  shortTitle: "Sveta Obitelj",
  feastTitle: "Blagdan Svete Obitelji",
  feast: { month: 12, day: 30 },
  summary:
    "Primjer devetnice za kraj godine koja otvara prostor za obiteljske nakane i blagoslov doma.",
  theme:
    "Korisna je kao pokazatelj da sustav podrzava devetnice i izvan aktualnog mjeseca bez dodatnih izmjena strukture.",
  intro:
    "Ova stranica je jos jedan primjer kako svaku devetnicu drzis u vlastitoj datoteci i kako kasnije mozes uredno rasporediti tekstove.",
  pageTitle: "Kako moliti devetnicu Svetoj Obitelji",
  pageDescription:
    "Predlozak za obiteljsku devetnicu s jasno odvojenim danima i nakanama.",
  link: "../devetnice/sveta-obitelj.html",
  homeLink: "devetnice/sveta-obitelj.html",
  details: [
    "Pocinje 21. prosinca.",
    "Na pocetnoj stranici je prikazana kao buduca ili prosla, ovisno o mjesecu.",
    "Dobra je podloga za kasnije sezonske poboznosti."
  ],
  days: Array.from({ length: 9 }, (_, index) => ({
    day: index + 1,
    title: `Dan ${index + 1}`,
    intention: "Mjesto za nakanu vezanu uz dom, obitelj i zajednistvo.",
    prayer:
      "Ovdje se kasnije moze upisati puni tekst molitve za taj dan devetnice."
  }))
};
