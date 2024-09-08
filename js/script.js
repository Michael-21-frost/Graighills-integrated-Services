/**GRAIGHILLS INTEGRATED SERVICES LIMITED (GIS)
8th September, 2024
All rights reserved. 
Developer | Michael Otote CEO OTOTECH INDUSTRIES */


(function ($) {
    "use strict";

 
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
  



    
})(jQuery);

