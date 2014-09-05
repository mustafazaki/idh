$(document).ready(function(){
  	
	$('.slider1').bxSlider({
		slideWidth: 230,
		minSlides: 1,
		maxSlides: 4,
		infiniteLoop: false
  	});
	// On scroll Logo change	
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		scroll >= 1 ? $(".home .logo").addClass("logoInner") : $(".home .logo").removeClass("logoInner")
	});
	// Home height 100%
	$('.home, .contact').height($(window).height());
	$('.home video').width($(window).width());

});

// On scroll nav bg color change			
var a = $(".home"), b = a.outerHeight();
 $(document).scroll(function() {
      var c = (b - window.scrollY) / b;
        c >= 0 && ($("nav").css("background-color", "rgba(51,51,51," + (1.1 - c) + ")"));
});

// remove video functionality for mobile
if(Modernizr.appleios) {
	$('video').remove();
	$('.videoOverlay').remove();
}

(function() {

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
