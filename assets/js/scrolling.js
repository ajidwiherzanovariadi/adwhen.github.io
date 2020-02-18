$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll > 785) {
        $("#myNav").show();
    } else {
        $("#myNav").hide();
    }
})