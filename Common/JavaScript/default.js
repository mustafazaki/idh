var idh = {

    windowHeight: $(window).height(),
    windowWidth: $(window).width(),
    isMobile: false,

    bxSlider: null,
    resizeTimeoutID: null,
    quoteIndex: -1,
    isotopes: null,
    isTouch: false,


    removeFeatureImgWidthHeight: function () {
        console.log("removeFeatureImgWidthHeight");
        $(".ourClient .bx-wrapper img,.event .bx-wrapper img").removeAttr("height").removeAttr("width");
        // $(".event .bx-wrapper img").removeAttr("height").removeAttr("width");
    },


    initBxSlider: function (isResizing) {

        if ($(".portfolio").length === 0) {

            if (!idh.isMobile) {

                idh.bxSlider = $('.slider1').bxSlider({

                    slideWidth: 230,
                    minSlides: 4,
                    maxSlides: 4,
                    infiniteLoop: false,
                    slideMargin: 20

                });


            }
            else {

                idh.bxSlider = $('.slider1').bxSlider({

                    slideWidth: 230,
                    minSlides: 2,
                    maxSlides: 2,
                    infiniteLoop: false,
                    slideMargin: 10

                });
            }
        }
    },

    detectMobile: function () {
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                idh.isMobile = true;
            }
        })(navigator.userAgent || navigator.vendor || window.opera);

        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            idh.isTouch = true;

        }
        else {

        }

    },

    setHeightOfElements: function () {
        $('.contact,.home').height(idh.windowHeight);
        //$(".home").height(idh.windowHeight-185);


        // $('.home video').width(idh.windowWidth);
        var map = $(".contact .map");
        map.height(map.width());


    },

    innerVideoPlatPause: function () {
        //

        $(".column_video .play").click(function () {
                var $this = $(this),
                    video = document.querySelector(".topVideo");

                if ($this.hasClass("playing")) {
                    $this.removeClass("playing");
                    video.pause();

                    return;

                }

                $this.addClass("playing");
                video.play();
            }
        )
    },


    changeMenuStyleOnScroll: function () {
        if (!idh.isMobile) {
            var home = $(".home"),
                homeHeight = home.outerHeight(),
                logo = $("header .logo");

            var scroll = $(window).scrollTop();
            if (scroll >= 1) {
                logo.addClass("logoInner");
                $("header").find("nav").height(77);
                $("header").find(".sub-menu").css("top", "77px");

            } else {
                logo.removeClass("logoInner");
                $("header").find("nav").height(119);
                $("header").find(".sub-menu").css("top", "119px");


            }
            var c = (homeHeight - window.scrollY) / homeHeight;


            c >= 0 && ($("nav").css("background-color", "rgba(51,51,51," + (1.1 - c) + ")"));


        }
    },
    _windowResize: function () {


        idh.windowHeight = $(window).height();
        idh.windowWidth = $(window).width();
        idh.setHeightOfElements();

        if ($("#animation").length === 1) {
            animation.skrollr.refresh(animation.animate, animation.animate.find("div"), animation.animate.find("h1"));
        }
    },


    addEventListners: function () {
        $(window).scroll(function () {
            idh.changeMenuStyleOnScroll();
        });
        if (!idh.isMobile) {
            $(window).resize(function () {
                clearTimeout(idh.resizeTimeoutID);
                idh.resizeTimeoutID = setTimeout(idh._windowResize, 500);
            });
        }

        $(".about .services ul li").click(function () {
            var $this = $(this);
            if ($this.find("a").attr("href") != undefined) {
                window.location = $this.find("a").attr("href");
                return false;
            }
        });
        $(".portfolio .portfolio-item").click(function () {
            window.location = $(this).find("a").attr("href");
            return false;
        });

        $(".column_video .know-more").click(function () {

            $("body").animate({
                scrollTop: idh.windowHeight - 70
            })
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scrollToTop').click(function () {
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });


    },

    quotesAnimation: function () {
        var quotes = $(".quotes"),
            speed = 2000;
        idh.quoteIndex += 1;
        quotes.eq(idh.quoteIndex % quotes.length)
            .fadeIn(speed)
            .delay(speed)
            .fadeOut(speed, idh.quotesAnimation);
    },

    initNiceScroll: function () {
        if (!idh.isMobile) {
            var nice = $("html").niceScroll({
                scrollspeed: 120
            });
        }
    },

    dropDownMenu: function () {
        if (idh.isMobile || idh.windowWidth < 767) {
            return
        }


        $(".home nav > ul > li").hover(function () {
                var _this = $(this),
                    dropdown = _this.find(".dropdown");

                dropdown.stop().slideDown(350);
                if (dropdown.length > 0) _this.addClass("active");

            },
            function () {
                $(".dropdown").stop().slideUp(250);
                $(".home nav > ul > li").removeClass("active");

            }
        )

    },

    videoSrc: function () {
        if (!idh.isMobile) {
            var source = $(".content_video video source");
            source.attr("src", source.attr("data-src"));
        }
    },
    setAdminClass: function () {
        if (!idh.isMobile) {
            if ($("#wpadminbar").length > 0) {
                $("body").addClass("logged-in");
            }
        }
    },
    initIsotopes: function () {
        idh.isotopes = $('.portfolio_group');
// init
        idh.isotopes.isotope({
            // options
            itemSelector: '.portfolio-item',
            masonry: {
                columnWidth: 1,
                gutterWidth: 0

            }
        });


    },

    isotopeFilter: function () {
        var $optionSets = $('.categories li'),
            $optionLinks = $optionSets.find('a');
        $optionLinks.click(function () {
            var $this = $(this);
            // don't proceed if already selected
            if ($this.hasClass('selected')) {
                return false;
            }
            //    var $optionSet = $this.parents('.option-set');
            //  $optionSet.find('.selected').removeClass('selected');

            $optionSets = $('.categories li a').removeClass('selected');
            $this.addClass('selected');

            // make option object dynamically, i.e. { filter: '.my-filter-class' }
            //   key = $optionSet.attr('data-option-key'),
            var value = $this.attr('data-rel');
            // parse 'false' as false boolean
            //value = value === 'false' ? false : value;

            console.log(value);


            idh.isotopes.isotope({filter: value});
//alert("123")
            return false;
        });
    },

    toggleSizes: function () {
        var $optionSets = $('#toggle li')
        //    $optionLinks = $optionSets.find('a');
        $optionSets.click(function () {
            var $this = $(this);
            // don't proceed if already selected
            if ($this.hasClass('selected')) {
                return false;
            }
            //    var $optionSet = $this.parents('.option-set');
            //  $optionSet.find('.selected').removeClass('selected');

            $optionSets = $optionSets.removeClass('selected');
            $this.addClass('selected');

            // make option object dynamically, i.e. { filter: '.my-filter-class' }
            //   key = $optionSet.attr('data-option-key'),
            //   var value = $this.attr('data-rel');
            // parse 'false' as false boolean
            //value = value === 'false' ? false : value;

            var $class = $this.attr("data-size");
            $(".portfolio .portfolio-item").removeClass("small default");

            $(".portfolio .portfolio-item").addClass($class);

            idh.isotopes.isotope('layout');


            return false;
        });
    },

    accordion: function (elemhead, elembody, speed, flag, flag2, callback) {

        var Selected = 'active',
            isOpening = false;


        if (flag) {
            $(elembody).first().show();
            $(elemhead).first().addClass(Selected);
        }
        function clickEvent(elem, callback) {

            if ($(elem).hasClass(Selected)) {
                if (flag2) {
                    isOpening = true;
                    $(elembody).slideUp(speed);
                    $(elem).next(elembody).slideUp(speed, function () {
                        isOpening = false;
                        if (typeof (callback) === "function") {
                            callback();
                        }
                    });
                    $(elemhead).removeClass(Selected);
                    return false;
                }
            }
            else {
                if (!isOpening) {
                    $(elembody).slideUp(speed);
                    $(elem).next(elembody).slideDown(speed, function () {
                        if (typeof (callback) === "function") {
                            callback();
                        }
                    });
                }
            }
            $(elemhead).removeClass(Selected);
            $(elem).addClass(Selected);
        }

        $(elemhead).click(function () {
            clickEvent(this, callback);
        });

    },


    init: function () {
        idh.detectMobile();
        idh.setAdminClass();
        idh.initBxSlider();
        //idh.initNiceScroll();
        idh.setHeightOfElements();
        setTimeout(function () {
            idh.changeMenuStyleOnScroll();
        }, 100);
        idh.dropDownMenu();
        idh.addEventListners();
        idh.quotesAnimation();
       // idh.initIsotopes();
        //idh.isotopeFilter();
        idh.toggleSizes();
        idh.innerVideoPlatPause();
        idh.accordion(".accordion h5", ".accordion .answer", 500);
        $(".open1st h5:first-of-type").addClass("active")
        //   idh.videoSrc();
    }
};

$(document).ready(function () {
    idh.init();
    if (!idh.isTouch && $("#animation").length === 1) {
        animation.init();
    }
    else {
        $("#animation").hide();
    }
});

$(window).load(function () {
    // idh.removeFeatureImgWidthHeight();
});
