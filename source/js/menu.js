const button = document.querySelector(".nav__menu");
const buttonHover = document.querySelector(".nav__menu_hover")
const menu = document.querySelector(".nav__list");


button.addEventListener("click", () => {
  buttonHover.classList.add("nav__menu_hover_active");
  button.classList.add("nav__menu_disable")
  menu.classList.add("nav__list_active")
})

buttonHover.addEventListener("click", () => {
  buttonHover.classList.remove("nav__menu_hover_active");
  button.classList.remove("nav__menu_disable")
  menu.classList.remove("nav__list_active")
})
