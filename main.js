const hamburgerOpenBtn = document.querySelector(".header-burgerOpen-btn");
const hamburgerCloseBtn = document.querySelector(".header-burgerClose-btn");
const hamburgerMenu = document.querySelector(".header-hamburger-container");

hamburgerOpenBtn.addEventListener("click", () => {
  hamburgerMenu.classList.add("active");
  hamburgerOpenBtn.classList.remove("active");
  hamburgerCloseBtn.classList.add("active");})

hamburgerCloseBtn.addEventListener("click", () => {
  hamburgerMenu.classList.remove("active");
  hamburgerCloseBtn.classList.remove("active");
  hamburgerOpenBtn.classList.add("active");
});

