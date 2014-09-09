var idh = {

    windowHeight: $(window).height(),
    windowWidth: $(window).width(),

    initBxSlider: function () {
        $('.slider1').bxSlider({
            slideWidth: 230,
            minSlides: 4,
            maxSlides: 4,
            infiniteLoop: false,
            slideMargin: 20
        });
    },

    setHeightOfSections: function () {
        $('.home, .contact').height(idh.windowHeight);
        $('.home video').width(idh.windowWidth);
    },
    changeMenuStyleOnScroll: function () {
        var home = $(".home"),
            homeHeight = home.outerHeight(),
            logo = home.find(".logo");
        var scroll = $(window).scrollTop();
        scroll >= 1 ? logo.addClass("logoInner") : logo.removeClass("logoInner");
        var c = (homeHeight - window.scrollY) / homeHeight;

        c >= 0 && ($("nav").css("background-color", "rgba(51,51,51," + (1.1 - c) + ")"));
    },

    init: function () {
        idh.initBxSlider();
        idh.setHeightOfSections();
        idh.changeMenuStyleOnScroll();
    }



};

$(document).ready(function () {
    idh.init();

    // On scroll Logo change

//    changeMenuStyleOnScroll();

    // Home height 100%


});

// On scroll nav bg color change


$(document).scroll(function () {
    // changeMenuStyleOnScroll();
});


// remove video functionality for mobile
if (Modernizr.appleios) {
    $('video').remove();
    $('.videoOverlay').remove();
}

(function () {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }

    showNextQuote();

})();
