'use strict';

$(document).ready(function() {
    stickyNav();
    smoothScroll();
    collapseMenu();
    displayGoToTopBtn()
    goToTopBtn();
});

$(window).scroll(function() {
    stickyNav();
    displayGoToTopBtn();
});

//Stick nav on top while scrolling 
function stickyNav() {

    var navTop = $('#main-nav').position().top;
    var scrolled = $(window).scrollTop();
    
    if(scrolled > navTop) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}

//Effect of smooth scroll for nav links
function smoothScroll() {
    
    $('a[href^="#"]:not([href="#"])').click(function(){ 
        
		$('html, body').animate( { 
            scrollTop: $(this.hash).position().top
        }, 800 );
	});
}

// Collapse menu on small devices 
function collapseMenu() {
    $('#toggle').click(function(e) {
        e.preventDefault();
        $('.bar').toggleClass('active');
        $('.nav').slideToggle(400);
    });
    
    $(window).resize(function () {
        var w = $(this).width();
        if (w > 992 && $('.nav').is(':hidden')) {
            $('.nav').removeAttr('style');
        }
    });
}

// Show go-to-top button on scroll 
function displayGoToTopBtn() {
    
    var menuHeight = $('#main-nav').height();
    var scrolled = $(window).scrollTop();
    
    if(scrolled >= menuHeight) {
        $('#btn__back-top').addClass('visible');
    } else {
        $('#btn__back-top').removeClass('visible');
    }
}

// Function go-to-top 
function goToTopBtn() {
    $('#btn__back-top').click(function(e) {
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0 },
            300
        );
    });
}




























