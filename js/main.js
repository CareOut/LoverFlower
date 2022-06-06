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

//..........burger....................

const burger = document.querySelector(".header__burger");
const closeBurger = document.querySelector(".menu__close");
const menu = document.querySelector(".menu-burger");

burger.addEventListener("click", () => {
  menu.style.display = "flex";
});
closeBurger.addEventListener("click", () => {
  menu.style.display = "none";
});
