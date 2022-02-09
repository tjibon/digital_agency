(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        $('.testimonial-carousel').owlCarousel({
           
            items: 1,
            autoplay: false,
            margin:30,
            loop: true,
             dots:true,
        });
        $('.logo-carousel').owlCarousel({
           
            items: 6,
            autoplay: false,
            margin:50,
            loop: true,
             dots:false,
             nav:false,
        })


    });
  

    
    
  

    

}(jQuery));