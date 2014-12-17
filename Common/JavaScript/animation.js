var animation = {
    animate: $(".animation"),
    skrollr: null,
    animationEndKeyFrame: 0,
    scrollDirection: null,
    windowHeight: $(window).height(),
    scene: $(".scene"),


    setAttrOfAnimateAndScene: function () {
        console.log(animation.animationEndKeyFrame)

        animation.animate.css("height", (animation.animationEndKeyFrame + 600) + "px");
        var height = animation.scene.height(),

            top = (animation.windowHeight - height + $("#home nav").height());


        console.log(top)
        animation.scene.attr("data-0", "position:relative;top:0px;");
        animation.scene.attr("data-top", "position:fixed;top:" + top + "px;");
        animation.scene.attr("data--" + (animation.animationEndKeyFrame ) + "-top", "position:fixed;top:" + top + "px;");
       // animation.scene.attr("data--" + (animation.animationEndKeyFrame + 600 ) + "-top", "position:fixed;top:-" + (height + 1) + "px;");
        animation.scene.attr("data-top-bottom", "position:fixed;top:-" + (height + 1) + "px;");



        console.log(animation.animationEndKeyFrame - 600);

        //  console.log(animation.animationEndKeyFrame + top)

    },


    setAttrOfIpadImage: function () {
        var increment = 100,
            startingKeyFrame = 4600,
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
        //   console.log(startingKeyFrame)
        animation.animationEndKeyFrame = startingKeyFrame;
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
        );
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

    debug: function () {
        $(window).scroll(function () {

            $("#debug").show().text(animation.scene.offset().top - $(window).scrollTop())

        })


    },


    init: function () {
        animation.setAttrOfIpadImage();
        animation.setAttrOfAnimateAndScene();
        animation.initSkrollr();

        //animation.debug();
    }
};






