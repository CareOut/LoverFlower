const acc = document.querySelectorAll(".accordeon-title");

acc.forEach((el) => {
  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("show");
    if (el.nextElementSibling.classList.contains("show")) {
      el.querySelector(".acc__img").src = "./img/faq/minus.png";
    } else {
      el.querySelector(".acc__img").src = "./img/faq/plus.png";
    }
  });
});

const handBag = document.querySelector(".header__handbag");
const cart = document.querySelector(".cart");
const close = document.querySelector(".cart__close");

handBag.addEventListener("click", () => {
  cart.style.display = "flex";
});

close.addEventListener("click", () => {
  cart.style.display = "none";
});
