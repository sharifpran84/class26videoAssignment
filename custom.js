$(" #first .owl-carousel").owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 30,
    smartSpeed: 1200,
    active: true,
});
$(" #secound .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 5000,
    smartSpeed: 1200,
    responsiveClass: true,
    active: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 1,
            nav: true,
            loop: false,
        },
    },
});
