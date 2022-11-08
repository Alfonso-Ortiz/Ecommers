const iconMenu = document.querySelector(".menu_hamburguesa");
const menu = document.querySelector(".menu-ham");

iconMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const exitMenu = document.querySelector(".exit");
const unShowMenu = document.querySelector(".menu-ham");

exitMenu.addEventListener("click", () => {
  unShowMenu.classList.toggle("unShow");
});
