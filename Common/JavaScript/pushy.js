/*! Pushy - v0.9.1 - 2013-9-16
 * Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.
 * https://github.com/christophery/pushy/
 * by Christopher Yee */

$(function () {
    var pushy = $('nav'), //menu css class
        body = $('body'),
        container = $('.Wrapper'), //container css class
        push = $('.push'), //css class to add pushy capability
        siteOverlay = $('.site-overlay'), //site overlay
        pushyClass = "pushy-left pushy-open", //menu position & menu open class
        pushyActiveClass = "pushy-active", //css class to toggle site overlay
        containerClass = "container-push", //container open class
        pushClass = "push-push", //css class to add pushy capability
        menuBtn = $('.bt-menu-trigger'), //css classes to toggle the menu
        menuBtnActiveClass = 'bt-menu-open', //css classes to toggle the menu
        menuSpeed = 200, //jQuery fallback menu speed
        menuWidth = pushy.width() + "px"; //jQuery fallback menu width

    function togglePushy() {
        body.toggleClass(pushyActiveClass); //toggle site overlay
        pushy.toggleClass(pushyClass);
        container.toggleClass(containerClass);
        push.toggleClass(pushClass); //css class to add pushy capability
    }

    function openPushyFallback() {
        body.addClass(pushyActiveClass);
        pushy.animate({left: "0px"}, menuSpeed);
        container.animate({left: menuWidth}, menuSpeed);
        push.animate({left: menuWidth}, menuSpeed); //css class to add pushy capability
    }

    function closePushyFallback() {
        body.removeClass(pushyActiveClass);
        pushy.animate({left: "-" + menuWidth}, menuSpeed);
        container.animate({left: "0px"}, menuSpeed);
        push.animate({left: "0px"}, menuSpeed); //css class to add pushy capability
    }

    if (Modernizr.csstransforms3d) {
        //toggle menu
        menuBtn.click(function () {
            togglePushy();

            menuBtn.addClass(menuBtnActiveClass)
        });
        //close menu when clicking site overlay
        siteOverlay.add(pushy.find("a")).click(function () {
            if ($(window).width() < 767) {
                togglePushy();
                menuBtn.removeClass(menuBtnActiveClass)
            }

        });
    } else {
        //jQuery fallback
        pushy.css({left: "-" + menuWidth}); //hide menu by default
        container.css({"overflow-x": "hidden"}); //fixes IE scrollbar issue

        //keep track of menu state (open/close)
        var state = true;

        //toggle menu
        menuBtn.click(function () {
            if (state) {
                openPushyFallback();
                menuBtn.addClass(menuBtnActiveClass)
                state = false;
            } else {
                closePushyFallback();
                menuBtn.removeClass(menuBtnActiveClass)
                state = true;
            }
        });

        //close menu when clicking site overlay
        siteOverlay.add(pushy).click(function () {
            if (state) {
                console.log(state);
                openPushyFallback();
                state = false;
            } else {
                console.log(state);
                closePushyFallback();
                state = true;
            }
        });
    }
});