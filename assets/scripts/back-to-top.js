const button = document.createElement("button");

button.type = "button";
button.className = "back-to-top";
button.setAttribute("aria-label", "Povratak na vrh stranice");
button.title = "Povratak na vrh";
button.textContent = "↑";

function updateVisibility() {
  if (window.scrollY > 240) {
    button.classList.add("is-visible");
  } else {
    button.classList.remove("is-visible");
  }
}

button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(button);
  updateVisibility();
});

window.addEventListener("scroll", updateVisibility, { passive: true });
