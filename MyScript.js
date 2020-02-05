$(document).ready(function() {

    $('.js--section_features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {

            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    $('.js--scroll_to_plan').click(function() {
        $('html, body').animate({ scrollTop: $('.js--plan_section').offset().top }, 1000);
    });

    $('.js--scroll_to_start').click(function() {
        $('html, body').animate({ scrollTop: $('.js--section_features').offset().top }, 1000);
    });


    $('a[href*="#"]')

    .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });


    $('.js--wp1').waypoint(function(direction) {
        $('.js--wp1').addClass('animated swing');
    }, {
        offset: '53%'
    })

    $('.js--wp2').waypoint(function(direction) {
        $('.js--wp2').addClass('animated fadeIn');
    }, {
        offset: '53%'
    })

    $('.js--wp3').waypoint(function(direction) {
        $('.js--wp3').addClass('animated fadeInUp');
    }, {
        offset: '53%'
    })

    $('.js--wp4').waypoint(function(direction) {
        $('.js--wp4').addClass('animated pulse');
    }, {
        offset: '53%'
    })

    /*MOIBLE NAV */
    $('.js--nav_icon').click(function() {
        var nav = $('.js--main_nav');
        var icon = $('.js--nav_icon i');
        nav.slideToggle(200);

        if (icon.hasClass('icon ion-md-menu')) {
            icon.removeClass('icon ion-md-menu');
            icon.addClass('icon ion-md-close');

        } else {
            icon.removeClass('icon ion-md-close');
            icon.addClass('icon ion-md-menu');

        }

    })
});