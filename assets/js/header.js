$(document).ready(function(){
    AOS.init();
    $('.clickBtn').on('click',function(e){
        var id = e.target.id;
        change_color('#'+id);
        var target ="";
        if(id == "homeBtn"){
            target = $('#home');
        }
        else if(id == "contactsBtn"){
            target = $('#contact');
        }
        else if(id == "safetyBtn"){
            target = $('#safety');
        }
        else if(id == "aboutBtn"){
            target = $('#about');
        }
        animate_onclick_scroll(target)
    })
    $('.clickBtnSmallerScreen').on('click',function(e){
        var id = e.target.id;
        change_color_small_screens('#'+id);
        var target ="";
        if(id == "homeBtnSmallerScreen"){
            target = $('#home');
        }
        else if(id == "contactsBtnSmallerScreen"){
            target = $('#contact');
        }
        else if(id == "safetyBtnSmallerScreen"){
            target = $('#safety');
        }
        else if(id == "aboutBtnSmallerScreen"){
            target = $('#about');
        }
        animate_onclick_scroll(target)
    })
    function animate_onclick_scroll(target){
        $('html, body').stop().animate({
            scrollTop: target.offset().top-100
        }, 1000);
    }
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
    
        var viewportTop = $(window).scrollTop() + 100;
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    $(document).on('resize scroll', function() {
        
        if($('#home').isInViewport()){
            change_color('#homeBtn')
            change_color_small_screens('#homeBtnSmallerScreen')
        }
        else if($('#contact').isInViewport()){
            change_color('#contactsBtn')
            change_color_small_screens('#contactsBtnSmallerScreen')
        }
        else if($('#safety').isInViewport()){
            change_color('#safetyBtn')
            change_color_small_screens('#safetyBtnSmallerScreen')
        }
        else if ($('#about').isInViewport()) {
            change_color('#aboutBtn');
            change_color_small_screens('#aboutBtnSmallerScreen');
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