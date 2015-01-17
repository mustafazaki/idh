$(document).ready(function () {
    $(".scroll").click(function (event) {
//prevent the default action for the click event
        event.preventDefault();

//get the full url - like mysitecom/index.htm#home


//split the url by # and get the anchor target name - home in mysitecom/index.htm#home

//get the top offset of the target anchor

        var id = $(this).attr("href");
        var target_offset = $(id).offset();
        var target_top = target_offset.top - 77;

//goto that anchor by setting the body scroll top to anchor top
        $('html, body').animate({scrollTop: target_top}, 500);
    });
});
