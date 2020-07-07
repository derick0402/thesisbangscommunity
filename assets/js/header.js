$(document).ready(function(){
    AOS.init();
    check_url();
    function check_url(){
        if (window.location.href.indexOf("#home") > -1) {
            animate_onclick_scroll($('#home'));
        }
        if (window.location.href.indexOf("#contacts") > -1) {
            animate_onclick_scroll($('#contact'));
        }
        if (window.location.href.indexOf("#safety") > -1) {
            animate_onclick_scroll($('#safety'));
        }
        if (window.location.href.indexOf("#about") > -1) {
            animate_onclick_scroll($('#about'));
        }
        if(window.location.href.indexOf("hazard_map") > -1){
            change_color('#hazardBtn');
            change_color_small_screens('#hazardBtnSmallerScreen');
        }
        if(window.location.href.indexOf("evacuation") > -1){
            change_color('#evacuationBtn');
            change_color_small_screens('#evacuationBtnSmallerScreen');
        }
    }
    
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
        $('.noneDesktopButtons a').css({
            'border-bottom':'0px',
            'color':'white'
        });
        $(btName).css({
            'border-bottom':'3px solid green',
            'color':'white'
        });
    }
    function change_color(btName){
        $('.mainButtons a').css({
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