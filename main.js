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

let sweaters = [
  {
    id: 0,
    name: "Hoodies",
    price: 14.0,
    stock: 10,
    urlImage: "./src/img/featured1.png",
  },
  {
    id: 1,
    name: "Shirts",
    price: 24.0,
    stock: 15,
    urlImage: "./src/img/featured2.png",
  },
  {
    id: 2,
    name: "Sweartshirts",
    price: 54.0,
    stock: 20,
    urlImage: "./src/img/featured3.png",
  },
];

const contentSweater = document.querySelector(".content_cards_products");
const contentcartItem = document.querySelector(".contentcart_item");
const contentcartTotal = document.querySelector(".contentcart_total");
const countClothes = document.querySelector(".countClothes");

let objCartShop = {};

function countProduct() {
  const arrayCartShop = Object.values(objCartShop);

  let suma = arrayCartShop.reduce((acum, curr) => {
    acum += curr.amount;
    return acum;
  }, 0);

  countClothes.textContent = suma;
}

function printClothes() {
  let html = "";

  sweaters.forEach(({ id, name, price, stock, urlImage }) => {
    const btnBuy = stock
      ? ` <button class="plus" id="${id}">+</button>`
      : `<button class="btn_nodrop">+</button>`;

    html += `
  <div class="card ">
            <div class="product">
              <img src="${urlImage}" alt="" />
            </div>

            <div class="btn_plus">
              ${btnBuy}
            </div>

            <div class="footer_product">
              <div class="price_stock">
                <h3>$${price}.00</h3>
                <h4>|</h4>
                <p>stock:${stock}</p>
              </div>
              <div class="type">
                <p>${name}</p>
              </div>
            </div>
          </div>
  `;
  });

  contentSweater.innerHTML = html;
}

function printTotal() {
  const arrayCartShop = Object.values(objCartShop);

  if (!arrayCartShop.length)
    return (contentcartTotal.innerHTML = `<h3>Carrito vacio</h3>`);

  let total = arrayCartShop.reduce((acum, curr) => {
    acum += curr.price * curr.amount;
    return acum;
  }, 0);

  contentcartTotal.innerHTML = `
  <h3>${total}.00</h3>
  <button class="btn btn_buy">Comprar</button>
  `;
}

function printClothesInCart() {
  let html = "";

  const arrayCartShop = Object.values(objCartShop);

  arrayCartShop.forEach(({ id, name, price, stock, amount, urlImage }) => {
    html += `
          <div class="card ">
              <div class="product">
                <img src="${urlImage}" alt="" />
              </div>

              <div class="body_product">
                  <h4>${name}</h4>
                  <div class="price_stock">
                    <p>stock:${stock}</p>
                    <h5>|</h5>
                    <h3>$${price}.00</h3>
                  </div>
                  <h5>Subtotal: ${price}.00</h5>
              
                
                <div class="footer_product">
                    <button class="btn btn_rest" id="${id}">-</button>
                    <p>${amount} units</p>
                    <button class="btn btn_add" id="${id}">+</button>
                    <button class="btn btn_del" id="${id}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm8 16H7V8h10v12z"></path></svg></button>
                </div>
              </div>
          </div>
    `;
  });

  if (!arrayCartShop.length)
    return (contentcartItem.innerHTML = `
        <img src="./src/img/empty-cart.png" alt="" />
        <h3>Your cart is empty</h3>
        <p>
          You can add items to your cart by clicking on the "+" button on
          the product page.
        </p>
    `);
  contentcartItem.innerHTML = html;

  printTotal();
  countProduct();
}

printClothes();

contentSweater.addEventListener("click", (e) => {
  if (e.target.classList.contains("plus")) {
    const idClothes = Number(e.target.id);

    const currentClothes = sweaters.find(
      (sweaters) => sweaters.id === idClothes
    );

    if (objCartShop[currentClothes.id]) {
      if (currentClothes.stock === objCartShop[idClothes].amount)
        return alert("No hay mas produtos en el stock");
      objCartShop[currentClothes.id].amount++;
    } else {
      objCartShop[currentClothes.id] = { ...currentClothes };
      objCartShop[currentClothes.id].amount = 1;
    }
    printClothesInCart();
  }
});

contentcartItem.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn_add")) {
    const idClothe = Number(e.target.id);
    const currentClothes = sweaters.find(
      (sweaters) => sweaters.id === idClothe
    );

    if (currentClothes.stock === objCartShop[idClothe].amount)
      return alert("No hay mas produtos en el stock");

    objCartShop[idClothe].amount++;
  }

  if (e.target.classList.contains("btn_rest")) {
    const idClothe = Number(e.target.id);
    if (objCartShop[idClothe].amount === 1) {
      const op = confirm("Seguro que quieres eliminar?");

      if (op) {
        delete objCartShop[idClothe];
      }
    } else {
      objCartShop[idClothe].amount--;
    }
  }

  if (e.target.classList.contains("btn_del")) {
    const idClothe = Number(e.target.id);

    const op = confirm("Seguro que quieres eliminar?");

    if (op) {
      delete objCartShop[idClothe];
    }
  }

  printClothesInCart();
});

contentcartTotal.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn_buy")) {
    const op = confirm("Estás seguro de esto?");

    if (op) {
      sweaters = sweaters.map((sweaters) => {
        if (objCartShop[sweaters.id]?.id === sweaters.id) {
          return {
            ...sweaters,
            stock: sweaters.stock - objCartShop[sweaters.id].amount,
          };
        } else {
          return sweaters;
        }
      });
      objCartShop = {};
      printClothes();
      printClothesInCart();
    }
  }
});

//Darkmode

const iconToggle = document.querySelector(".iconToggle");

iconToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode")
    ? iconToggle.classList.add("bx_sun")
    : iconToggle.classList.remove("bx_sun");
});
