$(function(){
    
    
    "use strict"

    /* offset header top */

    $('.header').offset({
        top: $('.nav-bar').height() +$('.hr').height()
    })
    $('.hr').offset({
        top: $('.nav-bar').height()
    })

    /* width hr for navbar on scroll */

    $(window).on('scroll', function(){
        var scrolling = $(window).scrollTop()
        var HR = $('.nav-bar .hr')
        var precent = (scrolling/($(document).height()-$(window).height())*100)* 100/100
        var width = precent 
        HR.width(`${precent}`+"%")
    })
    
    /* toggle active nav  */

    $("#toggle-menu").click(function(){
        $('.nav-bar nav').toggleClass('active');
    });

    /* active links of navbar */
    var li =  $('#nav-ul li')
    li.on('click', function(e){
        const anchor = $('#nav-ul li > a');
        $(this).addClass('links-active').siblings().removeClass('links-active');
        anchor.removeClass('active');
        $(this.firstChild).addClass('active')

        /* Scroll To eg */

        $("html, body").animate({
            scrollTop:$("#" + $(this).data(('scroll'))).offset().top - $('.nav-bar').height()
        },1000)
}) 
    
    /* special follower  cursor */
    var $features = $('.features');
    var $box = $('.features .box');
    var mouse = $('#mouseMove');
    $features.on({
        mousemove: function(e){
            var x = e.pageX - 40;
            var y = e.pageY - 40;
            mouse.addClass('mouse-move').offset({top: y, left: x}).css({
                "display": "block",
                "position": "absolute"
            });
        },
        mouseleave: function(){
            mouse.removeClass('mouse-move')
        }
    });
    
})
