'use strict';

$(document).ready(function() {
    scrollMenu();
    goTopButton();
    goTopFunction();
    smoothScroll();
    addLink();
    formValidation();
});

$(window).scroll(function() {
    scrollMenu();
    goTopButton();
});

function smoothScroll() {
    
    $('a[href^="#"]:not([href="#"])').click(function(){ 
		$('html, body').animate( { 
            scrollTop: $(this.hash).offset().top
        }, 800 );
	});
}

function scrollMenu() {
    
    var menuHeight = $('#main-nav').height();
    var scrolled = $(window).scrollTop();
    
    if(scrolled >= menuHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}

function goTopButton() {
    
    var menuHeight = $('#main-nav').height();
    var scrolled = $(window).scrollTop();
    
    if(scrolled >= menuHeight) {
        $('#btn__back-top').addClass('visible');
    } else {
        $('#btn__back-top').removeClass('visible');
    }
}

function goTopFunction() {
    
    $('#btn__back-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0 },
            300
        );
    });
}

function addLink() {
    $('.portfolio__item').click(function() {
        if ($(this).attr('id') == "pomodoro-app") {
            window.open('portfolio-section/pomodoro-app/index.html', '_blank');   
        }
        else if ($(this).attr('id') == "site-template") {
            window.open('portfolio-section/website-template/index.html', '_blank');   
        }
        else if ($(this).attr('id') == "todo-app") {
            window.open('portfolio-section/todo-app/index.html', '_blank');   
        } 
    });
}

function formValidation() {
    
    $('form').submit(function(e) {
    
        var userName = $("#userName").val();
        var userEmail = $("#userEmail").val();

        if(!userName){
            e.preventDefault();  
            return false;
        } 

        if(!userEmail) {
            e.preventDefault();
            return false;
        }
        return true;
    });
}





























