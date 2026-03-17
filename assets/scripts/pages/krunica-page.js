import { getRosaryBySlug } from "../data/krunice.js";

const slug = document.body.dataset.slug;
const rosary = getRosaryBySlug(slug);

if (!rosary) {
  throw new Error(`Nepostojeća krunica: ${slug}`);
}

document.title = `${rosary.title} | Poboznosti`;

document.getElementById("detail-eyebrow").textContent = "Krunica";
document.getElementById("detail-title").textContent = rosary.title;
document.getElementById("detail-lead").textContent = rosary.summary;
document.getElementById("detail-intro").textContent = rosary.description;

document.getElementById("detail-meta").innerHTML = `
  <span class="mini-badge">Zasebna stranica molitve</span>
  <span class="mini-badge">Prikladno za kratki i jasni raspored</span>
`;

document.getElementById("detail-sidebar").innerHTML = `
  <div class="meta-panel">
    <div class="meta-box">
      <p class="meta-label">Predloženi raspored</p>
      <ul class="meta-list">
        <li>Uvod i kratko objašnjenje kada se moli.</li>
        <li>Redoslijed molitava po koracima.</li>
        <li>Zasebni blokovi za otajstva ili desetice.</li>
      </ul>
    </div>
    <div class="meta-box">
      <p class="meta-label">Zašto ovako</p>
      <p>
        Krunicu ima smisla odvojiti od devetnica jer je to trajna molitva koju korisnik često
        otvara neovisno o datumu. Tako navigacija ostaje čista i logična.
      </p>
    </div>
  </div>
`;

document.getElementById("detail-days").innerHTML = rosary.sections
  .map(
    (section, index) => `
      <article class="day-card">
        <span class="day-number">${index + 1}</span>
        <div class="day-copy">
          <h3>${section.title}</h3>
          <p>${section.body}</p>
        </div>
      </article>
    `
  )
  .join("");
