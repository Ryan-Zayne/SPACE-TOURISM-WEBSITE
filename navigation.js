const navBar = document.querySelector(".nav-bar");
const hamburgerToggle = document.querySelector(".hamburger");

hamburgerToggle.addEventListener("click", () => {
  navBar.classList.toggle("menu-toggle");
  hamburgerToggle.classList.toggle("close");
});