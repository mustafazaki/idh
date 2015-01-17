var animation = {
    animate: $(".animation"),
    skrollr: null,
    animationEndKeyFrame: 0,
    scrollDirection: null,
    windowHeight: $(window).height(),
    scene: $(".scene"),


    setAttrOfAnimateAndScene: function () {
        animation.animate.css("height", animation.animationEndKeyFrame + "px");
        var height = animation.scene.height(),
            top = (animation.windowHeight - height) / 2;
        animation.scene.attr("data-0", "position:relative;top:0px;");
        animation.scene.attr("data-top", "position:fixed;top:" + top + "px;");
        animation.scene.attr("data--" + (animation.animationEndKeyFrame - height) + "-top", "position:fixed;top:" + top + "px;");
        animation.scene.attr("data--" + animation.animationEndKeyFrame + "-top", "position:fixed;top:-" + (height + 1) + "px;");
    },


    setAttrOfIpadImage: function () {
        var increment = 100,
            startingKeyFrame = 3100,
            ipadImg = $(".ipad-image"),
            delay = 0.1;
        for (var i = 0; i < 13; i++) {
            ipadImg.eq(i).attr("data--" + startingKeyFrame + "-bottom", "display:none");
            ipadImg.eq(i).attr("data--" + (startingKeyFrame + delay) + "-bottom", "display:block");
            if (i != 12) {
                ipadImg.eq(i).attr("data--" + (startingKeyFrame + increment) + "-bottom", "display:none");
            }
            startingKeyFrame = startingKeyFrame + increment;
        }
        animation.animationEndKeyFrame = startingKeyFrame;
    },
    initNiceScroll: function () {
        var nice = $("html").niceScroll({
            scrollspeed: 120

        });
    },
    addEventListner: function () {

        var top = animation.animate.offset().top,
            height = animation.animate.height() - 600,
            scene = $(".scene"),
            sceneHeight = scene.height();
        top = (animation.windowHeight - sceneHeight) / 2;

        $(window).scroll(function () {

                if ($(window).scrollTop() <= top + height && $(window).scrollTop() >= top) {
                    console.log("if");
                    scene.css({
                        "position": "fixed",
                        "margin-top": top + "px"

                    })
                }
                else {
                    console.log("else");
                    scene.css({
                        "position": "relative"
                    });

                }
            }
        )
        ;
    },


    initSkrollr: function () {


        animation.skrollr = skrollr.init({
            edgeStrategy: 'set',
            forceHeight: false,
            easing: {
                vibrate: function (p) {
                    return Math.sin(p * 10 * Math.PI);
                }
            },
            keyframe: function (element, name, direction) {
            }
        });
    },

    init: function () {
        animation.setAttrOfIpadImage();
        animation.setAttrOfAnimateAndScene();
//        animation.initNiceScroll();
        animation.initSkrollr();


        //     animation.addEventListner();
    }
};


$(document).ready(function () {
    animation.init();
});



