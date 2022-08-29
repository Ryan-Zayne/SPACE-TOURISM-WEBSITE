const navToggle = document.querySelector(".nav-bar");
const menuToggle = document.querySelector(".hamburger");

menuToggle.addEventListener("click", () => {
  navToggle.classList.toggle("menu-toggle");
  menuToggle.classList.toggle("close");
});
