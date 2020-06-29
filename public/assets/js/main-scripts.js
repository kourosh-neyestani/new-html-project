(function ($) {
    "use strict";
    var AFRA = {};

    /*====== Test ======*/
    AFRA.Test = function () {
        console.log("It's Works!")
    };

    $(window).on("load", function () {
        AFRA.Preloader();
    });

    $(document).ready(function () {
        AFRA.Test();
    });
})(jQuery);
