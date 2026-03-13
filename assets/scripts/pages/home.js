import { novenas } from "../data/novenas/index.js";
import { rosaries } from "../data/krunice.js";
import {
  buildCalendarModel,
  formatDate,
  getHomeFocus,
  getNovenaStatus
} from "./shared.js";

function renderFocus() {
  const target = document.getElementById("today-focus");
  const focus = getHomeFocus(new Date());

  target.innerHTML = `
    <p class="meta-label">Pregled za danas</p>
    <h3>${focus.title}</h3>
    <p>${focus.body}</p>
  `;
}

function renderCalendar() {
  const title = document.getElementById("calendar-title");
  const grid = document.getElementById("calendar-grid");
  const { weekdayNames, monthLabel, cells } = buildCalendarModel(new Date());

  title.textContent = monthLabel;

  const namesMarkup = weekdayNames
    .map((name) => `<div class="calendar-day-name">${name}</div>`)
    .join("");

  const cellsMarkup = cells
    .map((cell) => {
      if (cell.empty) {
        return '<div class="calendar-cell empty" aria-hidden="true"></div>';
      }

      const classes = [
        "calendar-cell",
        cell.novenas.some((item) => item.isStart) ? "has-start" : "",
        cell.novenas.some((item) => item.isActive) ? "has-active" : "",
        cell.isToday ? "is-today" : ""
      ]
        .filter(Boolean)
        .join(" ");

      const notes = cell.novenas
        .map((item) => {
          if (item.isStart) {
            return `<span class="mini-badge"><strong>${item.novena.shortTitle}</strong><br>Pocetak</span>`;
          }

          return `<span class="mini-badge"><strong>${item.novena.shortTitle}</strong><br>${item.dayNumber}. dan</span>`;
        })
        .join("");

      return `
        <div class="${classes}">
          <div class="calendar-cell-head">
            <span class="calendar-date">${cell.day}</span>
            ${cell.isToday ? '<span class="today-badge">Danas</span>' : ""}
          </div>
          <div class="calendar-notes">${notes}</div>
        </div>
      `;
    })
    .join("");

  grid.innerHTML = namesMarkup + cellsMarkup;
}

function renderActiveNovenas() {
  const target = document.getElementById("active-novenas");
  const items = novenas
    .map((novena) => ({ novena, status: getNovenaStatus(novena, new Date()) }))
    .sort((left, right) => left.status.daysUntilStart - right.status.daysUntilStart);

  target.innerHTML = items
    .map(({ novena, status }) => {
      let stateText = "";

      if (status.state === "active") {
        stateText = `Danas je ${status.dayNumber}. dan devetnice.`;
      } else if (status.state === "future") {
        stateText = `Pocinje za ${status.daysUntilStart} dana, ${formatDate(status.startDate)}.`;
      } else {
        stateText = `Sljedeci ciklus pocinje ${formatDate(status.startDate)}.`;
      }

      return `
        <article class="stack-item">
          <strong>${novena.title}</strong>
          <p>${stateText}</p>
        </article>
      `;
    })
    .join("");
}

function renderNovenaCards() {
  const target = document.getElementById("novena-cards");

  target.innerHTML = novenas
    .map((novena) => {
      const status = getNovenaStatus(novena, new Date());
      const statusClass =
        status.state === "active" ? "active" : status.state === "future" ? "future" : "";
      const statusText =
        status.state === "active"
          ? `${status.dayNumber}. dan devetnice`
          : status.state === "future"
            ? `Pocinje ${formatDate(status.startDate)}`
            : `Sljedeca devetnica ${formatDate(status.startDate)}`;

      return `
        <article class="info-card">
          <span class="card-kicker">${novena.feastTitle}</span>
          <h3>${novena.title}</h3>
          <p>${novena.summary}</p>
          <span class="status-pill ${statusClass}">${statusText}</span>
          <a class="card-footer-link" href="${novena.homeLink}">Otvori devetnicu</a>
        </article>
      `;
    })
    .join("");
}

function renderRosaryCards() {
  const target = document.getElementById("rosary-cards");

  target.innerHTML = rosaries
    .map(
      (rosary) => `
        <article class="info-card">
          <span class="card-kicker">Krunice</span>
          <h3>${rosary.title}</h3>
          <p>${rosary.summary}</p>
          <span class="status-pill future">Zasebna stranica</span>
          <a class="card-footer-link" href="${rosary.homeLink}">Otvori krunicu</a>
        </article>
      `
    )
    .join("");
}

renderFocus();
renderCalendar();
renderActiveNovenas();
renderNovenaCards();
renderRosaryCards();
