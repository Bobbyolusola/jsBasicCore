$(document).ready(function () {
    //Hidden menu
    $('.btn-menu, .top-menu-hidden ul a').click(function () {
        if ($('.top-menu-hidden').is(':hidden')) {
            $('.top-menu-hidden').show();
            $('body').css('overflow', 'hidden')
        } else {
            $('.top-menu-hidden').hide();
            $('body').css('overflow', 'visible')
        }
    });

    //Page scroll
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: 0
    });

    $('.first-project').click(function () {
        $('.modal-container').fadeIn("slow", "linear").removeClass("visible");
        $("body").css("overflow-y", "hidden");
    });
    $('.fa-times').click(function () {
        $('.modal-container').css("display", "none");
        $("body").css("overflow-y", "visible");
    });

    //Preloader
    $(window).on('load', function () {
        var $preloader = $('.box-preloader'),
            $spinner   = $preloader.find('.loader');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });

    function text() {
        $("#messageTitle").animate({top: '30vh'}, 1000, 'easeOutBack');
        $("#messageText").animate({left: '0'}, 1000, 'easeOutBack');
        $("#canvas").animate({opacity: "1"}, 1000);
    }
    //Main page animate
    // function aboutMe() {
    //     $(".section-item-left").animate({right: '0'}, 1000, 'easeOutBack');
    //     $(".section-item-right").animate({left: '0'}, 1000, 'easeOutBack');
    // }
    // //Button scroll
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $('.scrollup').fadeIn();
    //     } else {
    //         $('.scrollup').fadeOut();
    //     }
    // });
    // $('.scrollup').click(function () {
    //     $("html, body").animate({scrollTop: 0}, 800);
    //     return false;
    // });
    //AboutMe page animate
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 400) {
    //         var aboutMeAnimate = setTimeout(aboutMe, 1000);
    //     } else {
    //         $('.scrollup').fadeOut();
    //     }
    // });
    var startAnimate = setTimeout(text, 1000);
});
