import { novenas } from "../data/novenas/index.js";

const monthNames = [
  "sijecanj",
  "veljaca",
  "ozujak",
  "travanj",
  "svibanj",
  "lipanj",
  "srpanj",
  "kolovoz",
  "rujan",
  "listopad",
  "studeni",
  "prosinac"
];

const weekdayNames = ["Pon", "Uto", "Sri", "Cet", "Pet", "Sub", "Ned"];

function createDate(year, month, day) {
  return new Date(year, month - 1, day);
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return startOfDay(next);
}

function diffInDays(from, to) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  return Math.round((startOfDay(to) - startOfDay(from)) / millisecondsPerDay);
}

function getOccurrence(novena, year) {
  const feastDate = createDate(year, novena.feast.month, novena.feast.day);
  const startDate = addDays(feastDate, -9);
  const endDate = addDays(startDate, 8);

  return { feastDate, startDate, endDate };
}

export function formatDate(date) {
  return `${date.getDate()}. ${monthNames[date.getMonth()]} ${date.getFullYear()}.`;
}

export function getNovenaStatus(novena, referenceDate = new Date()) {
  const today = startOfDay(referenceDate);
  let occurrence = getOccurrence(novena, today.getFullYear());

  if (today < occurrence.startDate) {
    return {
      state: "future",
      dayNumber: null,
      daysUntilStart: diffInDays(today, occurrence.startDate),
      ...occurrence
    };
  }

  if (today <= occurrence.endDate) {
    return {
      state: "active",
      dayNumber: diffInDays(occurrence.startDate, today) + 1,
      daysUntilStart: 0,
      ...occurrence
    };
  }

  occurrence = getOccurrence(novena, today.getFullYear() + 1);

  return {
    state: "complete",
    dayNumber: null,
    daysUntilStart: diffInDays(today, occurrence.startDate),
    ...occurrence
  };
}

export function getMonthLabel(date = new Date()) {
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}.`;
}

export function buildCalendarModel(referenceDate = new Date()) {
  const month = referenceDate.getMonth();
  const year = referenceDate.getFullYear();
  const firstDay = new Date(year, month, 1);
  const totalDays = new Date(year, month + 1, 0).getDate();
  const offset = (firstDay.getDay() + 6) % 7;
  const cells = [];

  for (let index = 0; index < offset; index += 1) {
    cells.push({ empty: true });
  }

  for (let day = 1; day <= totalDays; day += 1) {
    const date = new Date(year, month, day);
    const dayNovenas = novenas
      .map((novena) => {
        const occurrence = getOccurrence(novena, year);
        const isStart = startOfDay(date).getTime() === occurrence.startDate.getTime();
        const isActive =
          startOfDay(date) >= occurrence.startDate && startOfDay(date) <= occurrence.endDate;

        if (!isStart && !isActive) {
          return null;
        }

        return {
          novena,
          isStart,
          isActive,
          dayNumber: isActive ? diffInDays(occurrence.startDate, date) + 1 : null
        };
      })
      .filter(Boolean);

    cells.push({
      date,
      day,
      isToday: startOfDay(date).getTime() === startOfDay(referenceDate).getTime(),
      novenas: dayNovenas
    });
  }

  return {
    weekdayNames,
    monthLabel: getMonthLabel(referenceDate),
    cells
  };
}

export function getHomeFocus(referenceDate = new Date()) {
  const statuses = novenas.map((novena) => ({ novena, status: getNovenaStatus(novena, referenceDate) }));
  const active = statuses.filter((item) => item.status.state === "active");

  if (active.length > 0) {
    const current = active.sort((left, right) => left.status.dayNumber - right.status.dayNumber)[0];
    return {
      title: `${current.novena.title} je aktivna`,
      body: `Danas je ${current.status.dayNumber}. dan. Devetnica je pocela ${formatDate(current.status.startDate)}.`
    };
  }

  const next = statuses.sort((left, right) => left.status.daysUntilStart - right.status.daysUntilStart)[0];

  return {
    title: `Sljedeca devetnica je ${next.novena.shortTitle}`,
    body: `Pocinje ${formatDate(next.status.startDate)} i vodi prema blagdanu: ${next.novena.feastTitle}.`
  };
}

export function renderTopNavCurrentPage() {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll(".top-nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) {
      return;
    }

    const normalizedHref = href.replace(/^\.\.\//, "/");
    if (path.endsWith(href) || path.endsWith(normalizedHref)) {
      link.setAttribute("aria-current", "page");
    } else if (link.getAttribute("aria-current") === "page" && !path.endsWith(href)) {
      link.removeAttribute("aria-current");
    }
  });
}
