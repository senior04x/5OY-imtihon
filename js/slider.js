import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";


const swiper = new Swiper(".swiper", {
    loop: true,
    effect: 'slide',
    slidesPerView: 4,
    spaceBetween: 5,

    pagination: {
        el: ".swiper-pagination",
        clickable: true, 
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

 

 
});

async function fetchProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];

    const swiperWrapper = document.querySelector('.swiper-wrapper');

    swiperWrapper.innerHTML = '';

    products.forEach(product => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        
        slide.innerHTML = `
        <div class="content__list_block">
        <div class="content__img_box">
          <a href="./single.html">
            <img
              class="list__content_img"
              src="${product.img}"
              alt="img"
            />
          </a>
          <p class="img__gift_text1">
            <img
              class="img__gift"
              src="./img/product-sale.svg"
              alt=""
            />
            В наличии
          </p>
          <p class="img__gift_text">
            <img src="./img/product-gift.svg" alt="" />Подарок
          </p>
          <h4 class="img__gift_title">SALE</h4>
        </div>
        <div class="content__info_box">
         
          <h3 class="product__title">
            Вариативный замок Golden Soft для отеля
          </h3>
          <div class="price__box" style="justify-content: start";>
            <p class="price__new_text">
              <span class="price__new">${product.newPrice}</span> ₽
            </p>
            <p class="price__old_text" style="margin-left: 10px;">
              <span class="price__old" >${product.olPrice}</span> ₽
            </p>
          </div>
        </div>
      </div>
        `;
        
        swiperWrapper.appendChild(slide);
    });

    
    swiper.update();
}


document.addEventListener('DOMContentLoaded', fetchProducts);
