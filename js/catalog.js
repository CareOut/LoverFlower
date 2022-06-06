//............cart..............

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

//...................................фильтры..........................................

const filterGoods = document.querySelector(".filter-goods__title");
const sortGoods = document.querySelector(".sort-goods__title");
const categoryGoods = document.querySelector(".categories-goods__title");

filterGoods.addEventListener("click", () => {
  filterGoods.nextElementSibling.classList.toggle("show");
  if (filterGoods.nextElementSibling.classList.contains("show")) {
    filterGoods.querySelector("img").src = "./img/catalog/green_arrow.png";
    filterGoods.querySelector(".filt__text").style.color = "#43FFD2";
  } else {
    filterGoods.querySelector(".filt__text").style.color = "#D978AC";
    filterGoods.querySelector("img").src = "./img/catalog/pink_arrow.png";
  }
});

sortGoods.addEventListener("click", () => {
  sortGoods.nextElementSibling.classList.toggle("show");

  if (sortGoods.nextElementSibling.classList.contains("show")) {
    sortGoods.querySelector("img").src = "./img/catalog/green_arrow.png";
    sortGoods.querySelector(".filt__text").style.color = "#43FFD2";
  } else {
    sortGoods.querySelector(".filt__text").style.color = "#D978AC";
    sortGoods.querySelector("img").src = "./img/catalog/pink_arrow.png";
  }
});

categoryGoods.addEventListener("click", () => {
  categoryGoods.nextElementSibling.classList.toggle("show");
  if (categoryGoods.nextElementSibling.classList.contains("show")) {
    categoryGoods.querySelector("img").src = "./img/catalog/green_arrow.png";
    categoryGoods.querySelector(".filt__text").style.color = "#43FFD2";
  } else {
    categoryGoods.querySelector(".filt__text").style.color = "#D978AC";
    categoryGoods.querySelector("img").src = "./img/catalog/pink_arrow.png";
  }
});

// ................range

for (let e of document.querySelectorAll(
  'input[type="range"].slider-progress'
)) {
  e.style.setProperty("--value", e.value);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}

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
