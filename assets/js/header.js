$(document).ready(function(){
    AOS.init();
    $('.clickBtn').on('click',function(e){
        change_color('#'+e.target.id);
    })
    $('.clickBtnSmallerScreen').on('click',function(e){
        change_color_small_screens('#'+e.target.id);
    })
    function change_color_small_screens(btName){
        $('.noneDesktopButtons button').css({
            'border-bottom':'0px',
            'color':'white'
        });
        $(btName).css({
            'border-bottom':'3px solid green',
            'color':'white'
        });
    }
    function change_color(btName){
        $('.mainButtons button').css({
            'color':'#777',
            'border':'none',
        });
        $(btName).css({
            'color':'black',
            'border-bottom':'3px solid green',
        });
    }

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height() +100;
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $(document).on('resize scroll', function() {
        if ($('#about').isInViewport()) {
            change_color('#aboutBtn');
            change_color_small_screens('#aboutBtnSmallerScreen');
        }
        if($('#home').isInViewport()){
            change_color('#homeBtn')
            change_color_small_screens('#homeBtnSmallerScreen')
        }
    });

    $('#menu').on('click',function(){
        $('.noneDesktopButtons').show('slide');
        $('#closeBtn').show('slide');
    })
    $('#closeBtn').on('click',function(){
        $('.noneDesktopButtons').hide('slide');
        $('#closeBtn').hide('slide');
    })
})