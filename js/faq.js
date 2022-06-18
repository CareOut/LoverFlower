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
