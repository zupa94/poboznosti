export const rosaries = [
  {
    slug: "otajstva-krunice",
    title: "Klasicna krunica",
    shortTitle: "Krunica",
    link: "../krunica/index.html",
    homeLink: "krunica/index.html",
    summary:
      "Cjeloviti redoslijed molitve krunice s pocetnim molitvama, otajstvima i zavrsnim molitvama.",
    description:
      "Na jednoj stranici nalaze se uvod, redoslijed molitava, raspored otajstava po danima i zavrsne molitve.",
    sections: [
      {
        title: "Redoslijed molitve",
        body:
          "Na vrhu su pocetne molitve, zatim slijedi pet desetica s pripadajucim otajstvima i zakljucne molitve."
      },
      {
        title: "Raspored otajstava",
        body:
          "Ukljucen je podsjetnik koja se otajstva mole ponedjeljkom, utorkom, srijedom, cetvrtkom, petkom, subotom i nedjeljom."
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
