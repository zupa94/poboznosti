import { novenas } from "../data/novenas/index.js";
import { buildCalendarModel, formatDate, getNovenaStatus } from "./shared.js";

let currentViewDate = new Date();

function shiftMonth(baseDate, offset) {
  return new Date(baseDate.getFullYear(), baseDate.getMonth() + offset, 1);
}

function renderCalendar() {
  const title = document.getElementById("calendar-title");
  const grid = document.getElementById("calendar-grid");
  const { weekdayNames, monthLabel, cells } = buildCalendarModel(currentViewDate);

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
            return `<a class="mini-badge mini-badge-link" href="${item.novena.link}"><strong>${item.novena.shortTitle}</strong><br>Pocetak</a>`;
          }

          return `<a class="mini-badge mini-badge-link" href="${item.novena.link}"><strong>${item.novena.shortTitle}</strong><br>${item.dayNumber}. dan</a>`;
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

function setupCalendarControls() {
  const prevButton = document.getElementById("calendar-prev");
  const nextButton = document.getElementById("calendar-next");

  prevButton.addEventListener("click", () => {
    currentViewDate = shiftMonth(currentViewDate, -1);
    renderCalendar();
  });

  nextButton.addEventListener("click", () => {
    currentViewDate = shiftMonth(currentViewDate, 1);
    renderCalendar();
  });
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
          <strong><a href="${novena.link}">${novena.title}</a></strong>
          <p>${stateText}</p>
        </article>
      `;
    })
    .join("");
}

renderCalendar();
setupCalendarControls();
renderActiveNovenas();
