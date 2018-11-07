$(document).ready(function () {
    if (document.cookie.indexOf('collapsed_Nodes') >= 0) {
        var getCollapsed = Cookies.get('collapsed_Nodes');
        var checkCollapsed = getCollapsed.split('|');
        var arrayLength = checkCollapsed.length;
        for (var i = 0; i < arrayLength; i++) {
            $('[data-node="#' + checkCollapsed[i] + '"]').next('.accordion_body').addClass('hide');
            $('[data-node="#' + checkCollapsed[i] + '"]').children('.plusminus').children('img').attr('src', './icon/plus.svg');
        }
    }

    $('.accordion_head').click(function () {
        if (!$(this).next('.accordion_body').hasClass('hide')) {
            $(this).next('.accordion_body').slideDown(300);
            $(this).next('.accordion_body').addClass('hide');
            $(this).css({
                "background-color": "#f2963f",
            });
            if ($(this).parents().hasClass('serviceAcc')) {
                $(this).css({
                    "background-color": "#7fc540",

                });
                $(this).find('p').css({
                    "color": "#444444",
                });
            };
            $(this).find(".plusminus").text("-");
            if ($(this).parent().siblings().find(".hide")) {
                $(this).parent().siblings().find(".accordion_body").slideUp(300);
                $(this).parent().siblings().find(".plusminus").text("+");
                $(this).parent().siblings().find(".accordion_head").css({
                    "background-color": "#444444",
                });
                if ($(this).parents().hasClass('serviceAcc')) {
                    $(this).parent().siblings().find(".accordion_head").css({
                        "background-color": "#7fc540",
                    });
                    $(this).parent().siblings().find(".accordion_head").find("p").css({
                        "color": "white",
                    });
                };
            }
        } else {
            $(this).next('.accordion_body').slideUp(300);
            $(this).next('.accordion_body').removeClass('hide');
            $(this).find(".plusminus").text("+");
            $(this).css({
                "background-color": "#444444",
                "color": "white"
            });
            if ($(this).parents().hasClass('serviceAcc')) {
                $(this).css({
                    "background-color": "#7fc540",
                });
                $(this).find('p').css({
                    "color": "white",
                });
            };

        }

    });
});