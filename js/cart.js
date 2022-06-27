const cartContent = document.querySelector(".cart-items");
const totalSum = document.querySelector(".total__value");

function renderCart() {
  let list = JSON.parse(localStorage.getItem("data"));
  totalSum.innerHTML = "";
  cartContent.innerHTML = "";
  let total = 0;
  let cartItem = "";
  if (list.length) {
    list.forEach((item) => {
      cartItem = `<div class="cart__item">
    <div class="item__left">
      <div class="item__img">
        <img class="cart__img" src="${item.image}" alt="" />
      </div>
      <div class="item-description">
        <div class="item__title">${item.name}</div>
        <div class="item-quantity">
          <div class="item__minus">
            <img src="img/cart/minus.png" alt="" />
          </div>
          <div class="item__quantity">${item.quantity}</div>
          <div class="item__plus">
            <img src="img/cart/plus.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="item__right">
      <div class="item__price">${item.price} ₽</div>
      <div id='${item.id}' class="item__delete">Удалить</div>
    </div>
  </div>`;
      total += item.price * item.quantity;
      cartContent.insertAdjacentHTML("afterbegin", cartItem);
      totalSum.insertAdjacentText("afterbegin", `${total} руб.`);
      const plusQuant = document.querySelectorAll(".item__plus");
      const minusQuant = document.querySelectorAll(".item__minus");
      const removeItem = document.querySelectorAll(".item__delete");
      plusQuant.forEach((el) => {
        el.addEventListener("click", () => {
          console.log("clicked");
          item.quantity += 1;
        });
      });

      minusQuant.forEach((item) => {
        item.addEventListener("click", () => {
          item.quantity -= 1;
        });
      });

      removeItem.forEach((item) => {
        item.addEventListener("click", (e) => {
          console.log("opa");
          list.filter((cart) => cart.id !== e.target.id);
        });
      });
    });
  }
}

const handBag = document.querySelectorAll(".header__handbag");
const cart = document.querySelector(".cart");
const close = document.querySelector(".cart__close");

handBag.forEach((el) => {
  el.addEventListener("click", () => {
    cart.style.display = "flex";
    renderCart();
  });
});

close.addEventListener("click", () => {
  cart.style.display = "none";
});

window.onload = renderCart();
