(function ($) {
    "use strict";
    var AFRA = {};

    /*====== Test ======*/
    AFRA.Test = function () {
        console.log("It's Works!");
    };

    /*====== Test ======*/
    AFRA.MegaMenu = function () {
        var link = $(".app-header .has-menu");
        var header = $(".app-header");
        var overlay = $(".mega-menu-overlay");
        var megamenu = $(".app-header .mega-menu");
        link.hover(
            function () {
                header.addClass("header-shadow");
                overlay.addClass("active");
                megamenu.addClass("active");
            },
            function () {
                header.removeClass("header-shadow");
                overlay.removeClass("active");
                megamenu.removeClass("active");
            }
        );
    };

    $(window).on("load", function () {});

    $(document).ready(function () {
        AFRA.MegaMenu(), AFRA.Test();
    });
})(jQuery);
