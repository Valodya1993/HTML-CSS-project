$(document).scroll(function (e) {
            $(window).scrollTop() > 100 ? $('header').addClass('bg-orange') : $('header').removeClass('bg-orange');
        });
        var swiper = new Swiper(".mySwiper", {
            pagination: {
                el: ".swiper-pagination",
            },
        });
        var swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });