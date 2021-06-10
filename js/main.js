/*------------------------------------------------------------------
Theme Name: Noori - Responsive Multipurpose Template
Version: 1.0
Author: Thememor
Author URL: http://www.bootstrapmb.com
-------------------------------------------------------------------*/
  
$(window).load( function() {
  $('body').imagesLoaded( function() { 
    setTimeout(function() {
      $("#noori-preloader").addClass("preloaded");
    },0);
  });
}); 

$(document).ready(function() {
    "use strict";

    // Anchor Smooth Scroll
    $('body').on('click', '.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 80)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    
    
    
    // Quote
    $('.quote').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });

    // Quote
    $('.quote2').slick({
        arrows: false,
        autoplay: false,
        dots: true
    });

    // Quote
    $('.quote3').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    // Video Lightbox
    $('.swipebox-video').swipebox();

    // Scrollspy
    $('body').scrollspy({
        target: ".navbar",
        offset: 105
    })

    // Stellar
    $.stellar({
        horizontalOffset: 50,
        verticalOffset: 50,
        responsive: true
    });

     // Fixed Header
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 80)
            $(".navbar-inverse").css("background", "#fff");
        else
            $(".navbar-inverse").css("background", "transparent");
    });
	
	// Fixed Header
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 80)
            $(".navbar-lg .navbar-nav > li > a").css("color", "rgba(0,0,0,.9)" );
        else
            $(".navbar-lg .navbar-nav > li > a").css("color", "rgba(0,0,0,.9)");
    });
	
	// Fixed Header
    $(window).scroll(function() {
        var value = $(this).scrollTop();
        if (value > 80)
            $(".navbar-inverse").css("box-shadow", " 11px 15px 29px 0 rgba(48,48,48,0.07)" );
        else
            $(".navbar-inverse").css("box-shadow", "none" );
    });



// Product Filter
$(window).load(function() {
    "use strict";
    var $container = $('.portfolio-grid');
    $container.isotope({
        layoutMode: "masonry",
        masonry: {
            columnWidth: 5
        },
        itemSelector: '.portfolio-item',
        transitionDuration: '0.8s'
    });
    var $optionSets = $('.portfolio-filter'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('active')) {
            return false;
        }
        var $optionSet = $this.parents('.portfolio-filter');
        $optionSet.find('.active').removeClass('active');
        $this.addClass('active');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');

        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            changeLayoutMode($this, options);
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
});


});

$(function() {
    $('.btn-circle').on('click', function() {
        $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
        $(this).addClass('btn-info').removeClass('btn-default').blur();
    });
});





$(function(){
    "use strict";
    
    $(document).on('mousemove', function(e){
  var width = $(document).width();
  var height = $(document).height();


  if(width > 990) {
      $('#cursor').css({'display':'block','left': Number((e.pageX)-10),'top': Number((e.pageY)-10),'z-index': '9999999'});
      if(Number((e.pageX)+24) > width) { $('#cursor').css({'display': 'none'}); }
      if(Number((e.pageX)) < 10) { $('#cursor').css({'display': 'none'}); }
      if(Number((e.pageY)+24) > height) { $('#cursor').css({'display': 'none'}); }
      if(Number((e.pageY)) < 10) { $('#cursor').css({'display': 'none'}); }

      $('a, .favorite, button, .menu-icon, .vertical-menu i, .close-icon').on('mouseenter',
        function(event) {
          $('#cursor').css({'transform':'scale(2.5)','border':'none','background':'rgba(0,0,0,0.1)'});
        }).on('mouseleave', function() {
          $('#cursor').css({'transform':'scale(1)','border':'1px #111 solid','background':'none'});
        }
      );
    }
  });

});

