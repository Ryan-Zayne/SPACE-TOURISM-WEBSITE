const navBar = document.querySelector(".nav-bar");
const hamburgerToggle = document.querySelector(".hamburger");
const mainContent = document.querySelector(".main-container");

hamburgerToggle.addEventListener("click", () => {
  navBar.classList.toggle("menu-toggle");
  hamburgerToggle.classList.toggle("close");
});

// This block is to make the hamburger disappear if user clicks outside the navigation block
mainContent.addEventListener("click", () => {
  if (navBar.classList.contains("menu-toggle") && hamburgerToggle.classList.contains("close")) {
    navBar.classList.remove("menu-toggle");
    hamburgerToggle.classList.remove("close");
  }
});


