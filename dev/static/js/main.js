$(function () {

    svg4everybody({});

    burgerMenu('.burger__menu');


    /* -------------- Burger Menu  -----------------*/
    function burgerMenu(selector) {
        let menu = $(selector);
        let button = $('.burger__menu__button');
        let links = $('.burger__menu__link');
        let ovelay = $('.burger__menu__overlay');

        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });

        links.on('click', () => toggleMenu());

        ovelay.on('click', () => toggleMenu());

        function toggleMenu() {
            menu.toggleClass('burger__menu__active');

            if (menu.hasClass('burger__menu__active')) {
                $('body').css('overflow', 'hidden');
            } else {
                $('body').css('overflow', 'visible');
            }
        }
    }

    
    /* -------------- Scroll button -----------------*/
    $('.button__arrow').on('click', function () {

        let definition = $('.definition').offset().top;

        $('html, body').animate({
            scrollTop: definition
        }, 1500);
    });

    /* -------------- slick slider -----------------*/

    /* -------------- slick slider -----------------*/
    $('.testimonials__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000
    });


    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        fade: true
    });


    $('.news__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        vertical: true
    });
});