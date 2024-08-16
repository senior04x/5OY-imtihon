import { findElement } from "./helper.js";
import { products } from "./html.js";  

const elWrapperProducts = findElement(".content__product_box");
const elTemplate = findElement("#template");
const elPagination = findElement(".pagination");
const elPrevBtn = findElement(".pagination__btn--prev");
const elNextBtn = findElement(".pagination__btn--next");
const elCategorySelect = findElement("#category-select");
const elPriceInputs = findElement(".price__filter__box");
const elLengthProduct = findElement(".content__title_span");
elLengthProduct.textContent = products.length;

let pageCount = parseInt(localStorage.getItem('pageCount')) || 1;
const productsPerPage = 6;
let filteredProducts = [...products];
let selectedCategory = localStorage.getItem('selectedCategory') || '';
let minPrice = parseFloat(localStorage.getItem('minPrice')) || 0;
let maxPrice = parseFloat(localStorage.getItem('maxPrice')) || Infinity;

function createProductHTML(product) {
    const newTemplate = elTemplate.content.cloneNode(true);
    const elImg = findElement(".list__content_img", newTemplate);
    elImg.src = product.img;
    elImg.dataset.id = product.id;
    const elTitle = findElement(".product__title", newTemplate);
    elTitle.textContent = product.title;

    const elPriceNew = findElement(".price__new", newTemplate);
    elPriceNew.textContent = product.newPrice;

    const elPriceOld = findElement(".price__old", newTemplate);
    elPriceOld.textContent = product.olPrice;

    const elAddToBasketBtn = findElement(".add__bassket", newTemplate);
    elAddToBasketBtn.dataset.id = product.id;
    elAddToBasketBtn.addEventListener("click", () => addToBasket(product.id));

    return newTemplate;
}

function renderProducts() {
    const start = (pageCount - 1) * productsPerPage;
    const end = start + productsPerPage;
    const visibleProducts = filteredProducts.slice(start, end);

    elWrapperProducts.innerHTML = '';

    visibleProducts.forEach(product => {
        const productHTML = createProductHTML(product);
        elWrapperProducts.appendChild(productHTML);
    });

    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    elPagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.classList.add('pagination__number');
        if (i === pageCount) {
            button.classList.add('pagination__number--active');
        }
        button.dataset.page = i;
        button.textContent = i;
        elPagination.appendChild(button);
    }

    elPrevBtn.disabled = pageCount === 1;
    elNextBtn.disabled = pageCount === totalPages;
}

function handlePageChange(page) {
    pageCount = page;
    renderProducts();
}

function handlePaginationButtonClick(event) {
    if (event.target.classList.contains('pagination__number')) {
        handlePageChange(parseInt(event.target.dataset.page));
    }
}

function handlePrevNextButtonClick(event) {
    if (event.target === elPrevBtn && pageCount > 1) {
        handlePageChange(pageCount - 1);
    }
    if (event.target === elNextBtn) {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        if (pageCount < totalPages) {
            handlePageChange(pageCount + 1);
        }
    }
}

function handleCategoryChange(event) {
    selectedCategory = event.target.value;
    localStorage.setItem('selectedCategory', selectedCategory); 
    pageCount = 1;
    applyFilters();
}

function handlePriceChange() {
    const minPriceInput = findElement("input[type='number']:first-of-type", elPriceInputs).value;
    const maxPriceInput = findElement("input[type='number']:last-of-type", elPriceInputs).value;

    minPrice = parseFloat(minPriceInput) || 0;
    maxPrice = parseFloat(maxPriceInput) || Infinity;

    pageCount = 1;
    applyFilters();
}

function applyFilters() {
    filteredProducts = products.filter(product => 
        (!selectedCategory || product.categories.includes(selectedCategory)) &&
        (minPrice <= product.newPrice && product.newPrice <= maxPrice)
    );
    renderProducts();
}

function addToBasket(productId) {
    const basketProducts = JSON.parse(localStorage.getItem("products")) || [];
    const productIndex = basketProducts.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
        basketProducts[productIndex].addBasket = true;
        localStorage.setItem("products", JSON.stringify(basketProducts));
        alert('добавить в корзину');
        displayBasket();
    }
}

function removeFromBasket(productId) {
    const basketProducts = JSON.parse(localStorage.getItem("products")) || [];
    const productIndex = basketProducts.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
        basketProducts[productIndex].addBasket = false;
        localStorage.setItem("products", JSON.stringify(basketProducts));
        alert('удалить из корзины');
        displayBasket();
    }
}

function displayBasket() {
    const basketProducts = JSON.parse(localStorage.getItem("products")) || [];
    const basketItems = basketProducts.filter((item) => item.addBasket);

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
                        <p class="basket__product__text">+ Gift: <a class="basket__product__link" href="#">“Golden Service Lock Accessory”</a></p>
                        <div class="miqdor__box">
                            <button class="minus__button miqdor__btn">-</button>
                            <input class="miqdor__input" type="text" value="1">
                            <button class="plus__button miqdor__btn">+</button>
                        </div>
                    </div>
                    <div class="basket__remove_btn">
                        <button class="remove-from-basket" data-id="${product.id}"></button>
                        <h3 class="basket__product_price_title"><span class="basket__product_price">${product.newPrice}</span>₽</h3>
                    </div>
                </div>
                <div class="product__finely_price_box">
                    <p class="product__finely_price_text">Total:</p>
                    <h1 class="product__finely_price"><span class="product__finely_price">66 000</span>₽</h1>
                </div>
                <div class="zakaz__btn_box">
                    <button class="booking__btn1">Place Order</button>
                    <button class="booking__btn2">Continue Shopping</button>
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
}

// Event Listeners
elPagination.addEventListener("click", handlePaginationButtonClick);
elPrevBtn.addEventListener("click", handlePrevNextButtonClick);
elNextBtn.addEventListener("click", handlePrevNextButtonClick);
elCategorySelect.addEventListener("change", handleCategoryChange);
elPriceInputs.addEventListener("input", handlePriceChange);

// Initial Render
applyFilters();
displayBasket();
