const navToggle = document.querySelector(".nav-bar"),
  menuToggle = document.querySelector(".hamburger"),
  mainContent = document.querySelector(".main-container");

menuToggle.addEventListener("click", () => {
  navToggle.classList.toggle("menu-toggle");
  menuToggle.classList.toggle("close");
});

// This block is to make the hamburger disappear if user clicks outside the navigation block
mainContent.addEventListener("click", () => {
  if (navToggle.classList.contains("menu-toggle") && menuToggle.classList.contains("close")) {
    navToggle.classList.remove("menu-toggle");
    menuToggle.classList.remove("close");
  }
});
