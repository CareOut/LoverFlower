import { cartList } from "./catalog";
const handBag = document.querySelectorAll(".header__handbag");
const cart = document.querySelector(".cart");
const close = document.querySelector(".cart__close");

handBag.forEach((el) => {
  el.addEventListener("click", () => {
    cart.style.display = "flex";
  });
});

close.addEventListener("click", () => {
  cart.style.display = "none";
});

const cartContent = document.querySelector(".cart-items");

let cartItem = "";
if (cartList.length) {
  cartList.forEach((item) => {
    cartItem = `<div class="cart__item">
    <div class="item__left">
      <div class="item__img">
        <img src="${item.image}" alt="" />
      </div>
      <div class="item-description">
        <div class="item__title">${item.name}</div>
        <div class="item-quantity">
          <div class="item__minus">
            <img src="img/cart/minus.png" alt="" />
          </div>
          <div class="item__quantity">1</div>
          <div class="item__plus">
            <img src="img/cart/plus.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="item__right">
      <div class="item__price">${item.price} ₽</div>
      <div class="item__delete">Удалить</div>
    </div>
  </div>`;
    cartContent.insertAdjacentHTML("afterbegin", cartItem);
  });
}
