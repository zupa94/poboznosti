import { rosaries } from "../data/krunice.js";

const target = document.getElementById("rosary-list");

target.innerHTML = rosaries
  .map((rosary) => {
    const sections = rosary.sections.map((section) => `<li>${section.title}: ${section.body}</li>`).join("");

    return `
      <article class="info-card">
        <span class="card-kicker">Krunice</span>
        <h3>${rosary.title}</h3>
        <p>${rosary.summary}</p>
        <ul class="feature-list">${sections}</ul>
        <a class="card-footer-link" href="${rosary.link}">Otvori stranicu krunice</a>
      </article>
    `;
  })
  .join("");
