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

         (function() {
                let header = ('.header');

                (window).scroll(function() {
                    if((this).scrollTop() > 1) {
                        header.addClass('header_fixed');
                    } else {
                        header.removeClass('header_fixed');
                    }
                });
            });

            (function() {
                let header = ('.header');
                let hederHeight = header.height(); // вычисляем высоту шапки

                $(window).scroll(function() {
                    if((this).scrollTop() > 1) {
                        header.addClass('header_fixed');
                        ('body').css({
                            'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
                        });
                    } else {
                        header.removeClass('header_fixed');
                        ('body').css({
                            'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
                        })
                    }
                });
            });
    })