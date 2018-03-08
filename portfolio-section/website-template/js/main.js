'use strict';


$(document).ready(function() {
    scrollMenu();
    smoothScroll();

});

$(window).scroll(function() {
    scrollMenu();
});

function smoothScroll() {
    
    $('a[href^="#"]:not([href="#"])').click(function(){
        
        var navHeight = $('#main-nav').outerHeight();
        
		$('html, body').animate( { 
            scrollTop: $(this.hash).offset().top - navHeight
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

