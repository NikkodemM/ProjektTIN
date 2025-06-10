document.addEventListener("DOMContentLoaded", function () {
  // --- LOGIKA DYNAMICZNEGO ROKU (z poprzedniego zadania) ---
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- NOWA LOGIKA DLA HAMBURGER MENU ---
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mainNav = document.getElementById("main-nav");

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener("click", function () {
      mainNav.classList.toggle("nav-active");

      const icon = hamburgerBtn.querySelector("i");
      if (mainNav.classList.contains("nav-active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        hamburgerBtn.setAttribute("aria-label", "Zamknij menu");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        hamburgerBtn.setAttribute("aria-label", "Otwórz menu");
      }
    });
  }
});
