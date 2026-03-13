export const rosaries = [
  {
    slug: "otajstva-krunice",
    title: "Klasicna krunica",
    shortTitle: "Krunica",
    link: "../krunice/otajstva-krunice.html",
    homeLink: "krunice/otajstva-krunice.html",
    summary:
      "Stranica za otajstva krunice s jasnim redoslijedom molitve i rasporedom po danima u tjednu.",
    description:
      "Ovu cjelinu ima smisla voditi kao temeljnu molitvu na stranici. Na jednoj stranici imas uvod, redoslijed molitava i sva cetiri otajstva.",
    sections: [
      {
        title: "Kako je posloziti",
        body:
          "Na vrhu prikazi redoslijed molitve, zatim po karticama radosna, zalosna, slavna i svjetla otajstva."
      },
      {
        title: "Sto je korisno dodati",
        body:
          "Kratki podsjetnik koji se dan mole pojedina otajstva i sidra za brzo skakanje na trazeni dio stranice."
      }
    ]
  },
  {
    slug: "bozansko-milosrde",
    title: "Krunica Bozanskom milosrdu",
    shortTitle: "Bozansko milosrde",
    link: "../krunice/bozansko-milosrde.html",
    homeLink: "krunice/bozansko-milosrde.html",
    summary:
      "Jednostavna i cesto trazena molitva koja dobro funkcionira kao zasebna kratka stranica s jasnim koracima.",
    description:
      "Ova krunica je idealna za vrlo preglednu stranicu: uvod, pocetne molitve, pet desetica i zavrsna molitva.",
    sections: [
      {
        title: "Kako je posloziti",
        body:
          "Prikazi cijeli redoslijed u nekoliko kratkih blokova kako bi korisnik mogao moliti bez skrolanja kroz suvisan uvod."
      },
      {
        title: "Sto je korisno dodati",
        body:
          "Vrijeme molitve u 15 sati, kratki uvod o poboznosti i mogucnost brzog otvaranja sa same pocetne stranice."
      }
    ]
  }
];

export function getRosaryBySlug(slug) {
  return rosaries.find((rosary) => rosary.slug === slug);
}
