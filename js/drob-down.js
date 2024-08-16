document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.content__filter_select_btn1');
    const dropdownMenu = document.querySelector('.price__filter__box');
    const inputImg = document.querySelector(".input__img")

    dropdownToggle.addEventListener('click', function () {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        if (dropdownMenu.style.display === 'block') {
            inputImg.src = "./img/select-open.svg"
        }else{
            inputImg.src = "./img/select-bg.svg"
        }
       

    });
    dropdownToggle.addEventListener('click', function (event) {
        if (!event.target.matches('.content__filter_select_btn1')) {
            if (dropdownMenu.style.display === 'block') {
                dropdownMenu.style.display = 'none';
            }
            
        }
        
    });
   
});

