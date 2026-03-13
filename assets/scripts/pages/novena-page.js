import { getNovenaBySlug } from "../data/novenas/index.js";
import { formatDate, getNovenaStatus } from "./shared.js";

const slug = document.body.dataset.slug;
const novena = getNovenaBySlug(slug);

if (!novena) {
  throw new Error(`Nepostojeca devetnica: ${slug}`);
}

const status = getNovenaStatus(novena, new Date());

document.title = `${novena.title} | Poboznosti`;

document.getElementById("detail-eyebrow").textContent = novena.feastTitle;
document.getElementById("detail-title").textContent = novena.title;
document.getElementById("detail-lead").textContent = novena.pageDescription;
document.getElementById("detail-intro-inline").innerHTML = `
  <div class="meta-box">
    <p class="hero-panel-label">Napomena</p>
    <p>${novena.intro}</p>
    <div class="meta-panel meta-panel-inline">
      <div class="meta-box">
        <p class="meta-label">Status</p>
        <h3>${
          status.state === "active"
            ? "Devetnica je u tijeku"
            : status.state === "future"
              ? "Devetnica tek dolazi"
              : "Ciklus za ovu godinu je prosao"
        }</h3>
        <p>${
          status.state === "active"
            ? `Danas je ${status.dayNumber}. dan devetnice.`
            : `Sljedeci pocetak je ${formatDate(status.startDate)}.`
        }</p>
      </div>
      <div class="meta-box">
        <p class="meta-label">Sadrzaj</p>
        <ul class="meta-list">
          <li>Na vrhu je pripravna molitva.</li>
          <li>Zatim slijedi devet dana devetnice i zavrsna molitva.</li>
          <li>Litanije sv. Josipa nalaze se pri dnu stranice.</li>
        </ul>
      </div>
    </div>
  </div>
`;

document.getElementById("detail-meta").innerHTML = `
  <span class="mini-badge">Pocetak: ${formatDate(status.startDate)}</span>
  <span class="mini-badge">Uocnica blagdana: ${formatDate(status.endDate)}</span>
  ${
    status.state === "active"
      ? `<span class="mini-badge">Danas je ${status.dayNumber}. dan</span>`
      : `<span class="mini-badge">Blagdan: ${novena.feast.day}. ${novena.feast.month}.</span>`
  }
`;

const preparationMarkup = novena.preparation
  ? `
    <article class="prayer-section">
      <div class="prayer-section-header">
        <span class="day-number">0</span>
        <div class="day-copy">
          <h3>Pripravna molitva</h3>
          ${novena.preparation.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
      </div>
    </article>
  `
  : "";

const daysMarkup = novena.days
  .map(
    (day) => `
      <article class="prayer-section">
        <div class="prayer-section-header">
          <span class="day-number">${day.day}</span>
          <div class="day-copy">
            <h3>${day.title}</h3>
            ${day.subtitle ? `<p class="day-subtitle">${day.subtitle}</p>` : ""}
          </div>
        </div>
        <div class="day-copy">
          ${day.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
        <div class="prayer-callouts">
          ${day.prayers.map((line) => `<span class="prayer-pill">${line}</span>`).join("")}
        </div>
        <a class="prayer-link" href="#litanije-svetog-josipa">Litanije sv. Josipa</a>
      </article>
    `
  )
  .join("");

const closingMarkup = (novena.closingSections || [])
  .map(
    (section, index) => `
      <article class="prayer-section">
        <div class="prayer-section-header">
          <span class="day-number">${index + 10}</span>
          <div class="day-copy">
            <h3>${section.title}</h3>
            ${section.intro ? `<p>${section.intro}</p>` : ""}
          </div>
        </div>
        <div class="day-copy">
          ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
      </article>
    `
  )
  .join("");

const litanyMarkup = novena.days[0]?.litany
  ? `
    <article id="litanije-svetog-josipa" class="prayer-section">
      <div class="prayer-section-header">
        <span class="day-number">L</span>
        <div class="day-copy">
          <h3>Litanije sv. Josipa</h3>
          <p>Ovaj dio je izdvojen na jednom mjestu kako se litanije ne bi ponavljale nakon svakoga dana.</p>
        </div>
      </div>
      <div class="litany-lines">
        ${novena.days[0].litany
          .map((line) => (line ? `<p>${line}</p>` : '<div class="litany-space"></div>'))
          .join("")}
      </div>
    </article>
  `
  : "";

document.getElementById("detail-days").innerHTML =
  preparationMarkup + daysMarkup + litanyMarkup + closingMarkup;
