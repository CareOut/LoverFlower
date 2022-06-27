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

// .....................Catalog...........

const buketList = [
  {
    id: 1,
    image: "img/catalog/flowers/image114.png",
    name: "Лучший день",
    price: 167.0,
    quantity: 1,
  },
  {
    id: 2,
    image: "img/catalog/flowers/image130.png",
    name: "Лучший день",
    price: 166.0,
    quantity: 1,
  },
  {
    id: 3,
    image: "img/catalog/flowers/image131.png",
    name: "Лучший день",
    price: 144.0,
    quantity: 1,
  },
  {
    id: 4,
    image: "img/catalog/flowers/image132.png",
    name: "Лучший день",
    price: 150.0,
    quantity: 1,
  },
  {
    id: 5,
    image: "img/catalog/flowers/image133.png",
    name: "Лучший день",
    price: 170.0,
    quantity: 1,
  },
  {
    id: 6,
    image: "img/catalog/flowers/image134.png",
    name: "Лучший день",
    price: 117.0,
    quantity: 1,
  },
  {
    id: 7,
    image: "img/catalog/flowers/image135.png",
    name: "Лучший день",
    price: 127.0,
    quantity: 1,
  },
  {
    id: 8,
    image: "img/catalog/flowers/image136.png",
    name: "Лучший день",
    price: 153.0,
    quantity: 1,
  },
  {
    id: 9,
    image: "img/catalog/flowers/image137.png",
    name: "Лучший день",
    price: 176.0,
    quantity: 1,
  },
  {
    id: 10,
    image: "img/catalog/flowers/image138.png",
    name: "Лучший день",
    price: 147.0,
    quantity: 1,
  },
  {
    id: 11,
    image: "img/catalog/flowers/image139.png",
    name: "Лучший день",
    price: 161.0,
    quantity: 1,
  },
  {
    id: 12,
    image: "img/catalog/flowers/image140.png",
    name: "Лучший день",
    price: 157.0,
    quantity: 1,
  },
];

function showCatalog() {
  const catalogEnd = document.querySelector(".catalog-images");
  const catalog = document.querySelector(".catalog-img");
  let buket = "";
  buketList.forEach((item) => {
    buket = `
    <div class="popular-card">
                  <div class="card__image">
                  <img src="${item.image}" alt="" />
                  </div>
                  <div class="popular_card__title">${item.name}</div>
                  <div class="popular-price">
                    <div class="card__price">${item.price} ₽</div>
                    <span class="card__sale"></span>
                  </div>

                  <div id='${item.id}' class="card__button">в корзину</div>
                </div>
              `;
    catalog.insertAdjacentHTML("afterBegin", buket);
  });
  const buttonUp = `
  <a class="catalog__button-up" href="#up">
              <div class="button__button-up">
                <img src="img/catalog/button_up.png" alt="" />
              </div>
            </a>`;
  catalogEnd.insertAdjacentHTML("beforeEnd", buttonUp);
}

window.onload = showCatalog();

//............cart..............

const cartList = [];
const button = document.querySelectorAll(".card__button");
button.forEach((item) => {
  item.addEventListener("click", (e) => {
    buketList.forEach((item) => {
      if (item.id == e.target.id) {
        if (cartList.includes(item)) {
          item.quantity += 1;
          localStorage.setItem("data", JSON.stringify(cartList));
        } else {
          cartList.push(item);
          localStorage.setItem("data", JSON.stringify(cartList));
        }
      }
    });
  });
});
