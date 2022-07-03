window.onload = function () {
  document.addEventListener("click", documentAction);
  function documentAction(e) {
    const elementTarget = e.target;
    if (elementTarget.classList.contains("burger__item")) {
      document.querySelector(".menu-burger").style.display = "flex";
    }

    if (elementTarget.classList.contains("burger__cross")) {
      document.querySelector(".menu-burger").style.display = "none";
    }

    if (elementTarget.classList.contains("head__handbag")) {
      document.querySelector(".cart").style.display = "flex";
      renderCart();
    }

    if (elementTarget.classList.contains("cart__cross")) {
      document.querySelector(".cart").style.display = "none";
    }

    if (
      elementTarget.classList.contains("item__title") ||
      elementTarget.classList.contains("acc_img")
    ) {
      elementTarget.parentElement.nextElementSibling.classList.toggle("show");
      if (
        elementTarget.parentElement.nextElementSibling.classList.contains(
          "show"
        )
      ) {
        elementTarget.parentElement.querySelector(".acc__img").src =
          "./img/faq/minus.png";
      } else {
        elementTarget.parentElement.querySelector(".acc__img").src =
          "./img/faq/plus.png";
      }
    }

    if (elementTarget.classList.contains("item__delete")) {
      let list = JSON.parse(localStorage.getItem("data"));
      list.forEach((item, i) => {
        if (item.id == elementTarget.id) {
          list.splice(i, 1);
          localStorage.setItem("data", JSON.stringify(list));
          renderCart();
        }
      });
    }

    // if (elementTarget.classList.contains("plus")) {
    //   let list = JSON.parse(localStorage.getItem("data"));
    //   list.forEach((item, i) => {
    //     if (item.id == elementTarget.id) {
    //       list.splice(i, 1);
    //       localStorage.setItem("data", JSON.stringify(list));
    //       renderCart();
    //     }
    //   });
    // }
  }

  function renderCart() {
    const cartContent = document.querySelector(".cart-items");
    const totalSum = document.querySelector(".total__value");
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
              <img class="minus" src="img/cart/minus.png" alt="" />
            </div>
            <div class="item__quantity">${item.quantity}</div>
            <div class="item__plus">
              <img class="plus" src="img/cart/plus.png" alt="" />
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
      });
    }
  }
};
