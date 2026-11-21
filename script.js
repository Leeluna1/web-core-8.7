if (window.innerWidth <= 480) {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1.5,
        spaceBetween: 16,
        loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

const button = document.querySelector('.details__expand');
const list = document.querySelector('.grid-container');
button.addEventListener('click', function(){
list.classList.toggle('grid-container--expanded');
if (list.classList.contains('grid-container--expanded')) {
button.textContent = 'Скрыть'
} else {
    button.textContent= 'Показать все'
}

});