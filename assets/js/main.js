/**
* slick
* https://github.com/kenwheeler/slick
*/
$(document).ready(function() {
    $('#fullpage').fullpage();
});

/**
* totop
*/
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });
    $('.totop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});

/**
* slick
* https://github.com/kenwheeler/slick
*/
$(document).ready(function() {
    $('.your-class').slick({
        dots: true
    });
});

