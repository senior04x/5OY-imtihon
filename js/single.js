function findElement(selector) {
  return document.querySelector(selector);
}

function addToBasket(productId) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productIndex = products.findIndex((item) => item.id === productId);

  if (productIndex !== -1) {
    products[productIndex].addBasket = true;
    localStorage.setItem("products", JSON.stringify(products));
    alert("добавить в корзину");
    displayBasket();
  }
}

function removeFromBasket(productId) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productIndex = products.findIndex((item) => item.id === productId);

  if (productIndex !== -1) {
    products[productIndex].addBasket = false;
    localStorage.setItem("products", JSON.stringify(products));
    alert("удалить из корзины");
    displayBasket();
  }
}

function updateTotalPrice(quantity, price, totalPriceElement) {
  const totalPrice = quantity * parseFloat(price);
  totalPriceElement.textContent = `${totalPrice} ₽`;
}

function displayBasket() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const basketItems = products.filter((item) => item.addBasket);

  const basketContainer = findElement("#basket-items");
  basketContainer.innerHTML = basketItems
    .map(
      (product) => `
      <div class="basket__card_box container">
        <div class="title__basket_box">
          <h2 class="basket__title">Basket</h2>
        </div>
        <div class="basket__product_box">
          <img class="basket__img" src="${product.img}" alt="img">
          <div class="basket__product_title_box">
            <h2 class="basket__product_title">${product.title}</h2>
            <p class="basket__product__text">+ Подарок: <a class="basket__product__link" href="#">“Приложение к замкам Golden Service”</a></p>
            <div class="miqdor__box">
              <button class="minus__button miqdor__btn">-</button>
              <input class="miqdor__input" type="text" value="1">
              <button class="plus__button miqdor__btn">+</button>
            </div>
          </div>
          <div class="basket__remove_btn">
            <button class="remove-from-basket" data-id="${product.id}"></button>
            <h3 class="basket__product_price">
              <span class="basket__product_price">${product.newPrice}</span>₽
            </h3>
          </div>
        </div>
        <div class="product__finely_price_box">
          <p class="product__finely_price_text">Итого:</p>
          <h1 class="product__finely_price"><span class="product__finely_price">${product.newPrice}</span> ₽</h1>
        </div>
        <div class="zakaz__btn_box">
          <button class="booking__btn1">Оформить заказ</button>
          <button class="booking__btn2">Продолжить покупки</button>
        </div>
      </div>
    `
    )
    .join("");

  document.querySelectorAll(".remove-from-basket").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = +e.target.getAttribute("data-id");
      removeFromBasket(productId);
    });
  });

  document.querySelectorAll(".miqdor__box").forEach((box) => {
    const minusButton = box.querySelector(".minus__button");
    const plusButton = box.querySelector(".plus__button");
    const quantityInput = box.querySelector(".miqdor__input");
    const productPriceElement = box
      .closest(".basket__product_box")
      .querySelector(".basket__product_price");
    const totalPriceElement = box
      .closest(".basket__card_box")
      .querySelector(".product__finely_price");

    minusButton.addEventListener("click", () => {
      let quantity = parseInt(quantityInput.value, 10);
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
        updateTotalPrice(
          quantity,
          productPriceElement.textContent,
          totalPriceElement
        );
      }
    });

    plusButton.addEventListener("click", () => {
      let quantity = parseInt(quantityInput.value, 10);
      quantity++;
      quantityInput.value = quantity;
      updateTotalPrice(
        quantity,
        productPriceElement.textContent,
        totalPriceElement
      );
    });
  });
}

function initProductPage() {
  const mainContent = findElement(".main__box");
  const id = +localStorage.getItem("id") || 1;
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const product = products.find((item) => item.id === id);

  if (mainContent) {
    if (product) {
      const mainProductHtml = `
        <div class="single__content_block">
          <img class="single__content_img" id="single__content_img" src="${product.img}" alt="${product.title}">
          <div class="single__content_box">
            <h1 class="single__content_title">${product.title}</h1>
            <p class="single__content_description">Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.</p>
            <p class="single__content_install">Подходит для установки на деревянную/межкомнатную дверь.</p>
            <p class="single__content_price_text">Цена</p>
            <div class="single__content_price_box">
              <p class="single__price__new_text">
                <span class="price__new">${product.newPrice}</span> ₽
              </p>
              <p class="single__price__old_text">
                <span class="price__old">${product.olPrice}</span> ₽
              </p>
            </div>
            <button class="single__content_bassket" id="add-basket">КОРЗИНКА</button>
          </div>
        </div>
      `;
      mainContent.innerHTML = mainProductHtml;

      document.getElementById("add-basket").addEventListener("click", () => {
        addToBasket(product.id);
      });
    } else {
      mainContent.innerHTML = "<p>Product not found.</p>";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initProductPage();
  displayBasket();
});
