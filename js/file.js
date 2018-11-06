$(document).ready(function () {
    $(".hoverSel").mouseover(function () {
        $(".selList").slideUp(700);
        $(this).next().slideDown(700);
    });
    $(".navbar-nav").on("mouseleave", function () {
        $(this).find(".selList").slideUp(700);
    });
    $('[data-fancybox="gallery"]').fancybox({
        zoom: false,
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1,
    });
    $(".btn").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
    $(document).scroll(function () {
        if ($(document).scrollTop() > 1000) {
            $(".reset").css("opacity", "1");
        } else if ($(document).scrollTop() < 600) {
            $(".reset").css("opacity", "0");
        }
    });
});

