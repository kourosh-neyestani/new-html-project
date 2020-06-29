(function ($) {
    "use strict";
    var AFRA = {};

    /*====== Preloader ======*/
    AFRA.Test = function () {
        alert("Tested");
    };

    $(window).on("load", function () {
        AFRA.Preloader();
    });

    $(document).ready(function () {
        AFRA.Test();
    });
})(jQuery);
