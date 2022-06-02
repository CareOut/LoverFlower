const handBag = document.querySelector(".header__handbag");
const cart = document.querySelector(".cart");
const close = document.querySelector(".cart__close");

handBag.addEventListener("click", () => {
  cart.style.display = "flex";
});

close.addEventListener("click", () => {
  cart.style.display = "none";
});
