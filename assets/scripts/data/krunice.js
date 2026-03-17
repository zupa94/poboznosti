export const rosaries = [
  {
    slug: "otajstva-krunice",
    title: "Klasična krunica",
    shortTitle: "Krunica",
    link: "../krunica/index.html",
    homeLink: "krunica/index.html",
    summary:
      "Cjeloviti redoslijed molitve krunice s početnim molitvama, otajstvima i završnim molitvama.",
    description:
      "Na jednoj stranici nalaze se uvod, redoslijed molitava, raspored otajstava po danima i završne molitve.",
    sections: [
      {
        title: "Redoslijed molitve",
        body:
          "Na vrhu su početne molitve, zatim slijedi pet desetica s pripadajućim otajstvima i zaključne molitve."
      },
      {
        title: "Raspored otajstava",
        body:
          "Uključen je podsjetnik koja se otajstva mole ponedjeljkom, utorkom, srijedom, četvrtkom, petkom, subotom i nedjeljom."
      }
    ]
  },
  {
    slug: "bozansko-milosrde",
    title: "Krunica Božanskom milosrđu",
    shortTitle: "Božansko milosrđe",
    link: "../krunice/bozansko-milosrde.html",
    homeLink: "krunice/bozansko-milosrde.html",
    summary:
      "Jednostavna i često tražena molitva koja dobro funkcionira kao zasebna kratka stranica s jasnim koracima.",
    description:
      "Ova krunica je idealna za vrlo preglednu stranicu: uvod, početne molitve, pet desetica i završna molitva.",
    sections: [
      {
        title: "Kako je posložiti",
        body:
          "Prikaži cijeli redoslijed u nekoliko kratkih blokova kako bi korisnik mogao moliti bez skrolanja kroz suvišan uvod."
      },
      {
        title: "Što je korisno dodati",
        body:
          "Vrijeme molitve u 15 sati, kratki uvod o pobožnosti i mogućnost brzog otvaranja sa same početne stranice."
      }
    ]
  }
];

export function getRosaryBySlug(slug) {
  return rosaries.find((rosary) => rosary.slug === slug);
}
