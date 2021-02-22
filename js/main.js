$(document).ready(function(){

    /*nav-toggle*/
    $('#nav-toggle').on('click', function(){
        $('#nav').slideToggle(500);
    });

    /*fixed header*/
    let $scrolPos = $(window).scrollTop();
    let $headerH = $('#header').innerHeight();

    $(window).on('scroll load resize', function(){
        $scrolPos = $(this).scrollTop();

        if($scrolPos > $headerH){
            $('#header-inner').addClass('fixed');
        } else{
            $('#header-inner').removeClass('fixed');
        }
    });

    /*Smooth Scroll*/
    $('[data-scroll]').on('click', function(event){
        event.preventDefault();

        let $elemID = $(this).data('scroll');
        let $elemOffset = $($elemID).offset().top;

        $('html, body').animate({
            scrollTop: $elemOffset + 10
        }, 700);
    });

    /*Accordion*/
    $('[data-accordion]').on('click', function(){
        let $elemID = $(this).data('accordion');

        $($elemID).slideToggle();
    });

    /*Slider https://kenwheeler.github.io/slick/*/
    $('#slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });
});
