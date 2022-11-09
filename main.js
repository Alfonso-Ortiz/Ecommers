// Menú hamburguesa
const iconMenu = document.querySelector(".menu_hamburguesa");
const menu = document.querySelector(".menu-ham");
// Exit menu hamburguesa
const exitMenu = document.querySelector(".exit");
const unShowMenu = document.querySelector(".menu-ham");
// Carrito
const bag = document.querySelector(".bag");
const showCart = document.querySelector(".cart");
// Exit carrito
const exitCart = document.querySelector(".exit_cart");
const unShowCart = document.querySelector(".cart");
// Carrito en el menu hamburguesa
const menuBag = document.querySelector(".menu_bag");
const showCartMenu = document.querySelector(".cart_menu");
// Exit carrito menu hamburguesa
const exitCartMenu = document.querySelector(".exit_cart_menu");
const unShowCartMenu = document.querySelector(".cart_menu");
// Carrito menu hamburguesa desde el
// const bagHome = document.querySelector(".bag");
// const showCartHome = document.querySelector(".cart-menu");

iconMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});

exitMenu.addEventListener("click", () => {
  unShowMenu.classList.toggle("show");
});

bag.addEventListener("click", () => {
  showCart.classList.toggle("cart_show");
});

exitCart.addEventListener("click", () => {
  unShowCart.classList.toggle("cart_show");
});

menuBag.addEventListener("click", () => {
  showCartMenu.classList.toggle("cart_menu_show");
});

exitCartMenu.addEventListener("click", () => {
  unShowCartMenu.classList.toggle("cart_menu_show");
});

// bagHome.addEventListener("click", () => {
//   showCartHome.classList.toggle("cart_show");
// });

import "./js/mixitup.js";

const clothes = [{}];
