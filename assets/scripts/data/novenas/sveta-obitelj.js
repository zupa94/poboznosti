export const svetaObiteljNovena = {
  slug: "sveta-obitelj",
  title: "Devetnica Svetoj Obitelji",
  shortTitle: "Sveta Obitelj",
  feastTitle: "Blagdan Svete Obitelji",
  feast: { month: 12, day: 30 },
  summary:
    "Primjer devetnice za kraj godine koja otvara prostor za obiteljske nakane i blagoslov doma.",
  theme:
    "Korisna je kao pokazatelj da sustav podržava devetnice i izvan aktualnog mjeseca bez dodatnih izmjena strukture.",
  intro:
    "Ova stranica je još jedan primjer kako svaku devetnicu držiš u vlastitoj datoteci i kako kasnije možeš uredno rasporediti tekstove.",
  pageTitle: "Kako moliti devetnicu Svetoj Obitelji",
  pageDescription:
    "Predložak za obiteljsku devetnicu s jasno odvojenim danima i nakanama.",
  link: "../devetnice/sveta-obitelj.html",
  homeLink: "devetnice/sveta-obitelj.html",
  details: [
    "Počinje 21. prosinca.",
    "Na početnoj stranici je prikazana kao buduća ili prošla, ovisno o mjesecu.",
    "Dobra je podloga za kasnije sezonske pobožnosti."
  ],
  days: Array.from({ length: 9 }, (_, index) => ({
    day: index + 1,
    title: `Dan ${index + 1}`,
    intention: "Mjesto za nakanu vezanu uz dom, obitelj i zajedništvo.",
    prayer:
      "Ovdje se kasnije može upisati puni tekst molitve za taj dan devetnice."
  }))
};
