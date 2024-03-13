// var swiper = new Swiper(".teams__mySwiper", {
    //  pagination: {
       // el: ".swiper-pagination",
    //    type: "progressbar",
    //  },
    //  navigation: {
    //    nextEl: ".teams__swiper-button-next",
    //    prevEl: ".teams__swiper-button-prev",
    //  },
    //});

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('burger').addEventListener('click', function () {
            document.querySelector('header').classList.toggle('open')
            document.querySelector('.header-burger').classList.toggle('burger-position')
        })
    })