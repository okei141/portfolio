addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 1500,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 10000,
            stopOnLastSlide: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
}, false);
