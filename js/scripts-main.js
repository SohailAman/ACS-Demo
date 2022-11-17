var $ = jQuery;

$(window).load(function() {
    $('body').css('display', 'block');
});

$(function() {
    popups();
    //$('.banner--carousel').owlCarousel();
    $('.banner--carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $('.slider-section__carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
    });
});

$(window).load(function() {
    $('.company-logo--slider').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: true,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        }
    });

    $('.certificate-logo--slider').owlCarousel({
        center: true,
        loop: false,
        margin: 30,
        nav: false,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
});

$(function() {
    $('.client-say--slider').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            991: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
});

$(window).load(function() {
    var winWidth = $(window).width();

    if (winWidth < 768) {
        $('header .navbar .navbar-toggler').attr('data-toggle', '');
    }

    $(window).on('resize', function() {
        if (winWidth < 768) {
            $('header .navbar .navbar-toggler').attr('data-toggle', '');
        }
    });
});

$(window).load(function() {
    $('.navbar-toggler').on('click', function() {
        $('#menu-left, #menu').fadeToggle();
    });
});

$(document).ready(function() {
    $('.calculate .calculate--wrap-calculate table a').click(function(e) {
        e.preventDefault();

        var numValue = $(this).closest('td').find('.num-value');
        var numText = parseInt(numValue.text());

        if ($(this).hasClass('add')) {
            numValue.text(numText + 1);
        } else if ($(this).hasClass('minus')) {
            if (numText !== 0) {
                numValue.text(numText - 1);
            }
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var headerTop = $(document).scrollTop();

        if (headerTop > 0) {
            $('nav.navbar').addClass('scrolled');
        } else {
            $('nav.navbar').removeClass('scrolled');
        }
    });
});

$(document).ready(function() {
    var arr = [];
    var i = 0;

    $('.calculate .col-md-6').each(function() {
        arr[i] = "\n" + $(this).find('.calculate--wrap-title').text() + "\n";
        i++;
        $(this).find('tr').each(function() {
            $(this).find('td').each(function() {
                if ($(this).find('span').is('span')) {
                    arr[i] = $(this).find('span').text() + "\n";
                    i++;
                } else {
                    if ($(this).text() != "") {
                        arr[i] = $(this).text() + ": ";
                        i++;
                    }
                }
            });
        });
    });

    $('.hidden-calculated textarea').text(arr.join(""));
    arr = [];

    $('.calculate .calculate--wrap-calculate table a').click(function() {
        var arr = [];
        var i = 0;

        $('.hidden-calculated textarea').text('');
        $('.calculate .col-md-6').each(function() {
            arr[i] = "\n" + $(this).find('.calculate--wrap-title').text() + "\n";
            i++;
            $(this).find('tr').each(function() {
                $(this).find('td').each(function() {
                    if ($(this).find('span').is('span')) {
                        arr[i] = $(this).find('span').text() + "\n";
                        i++;
                    } else {
                        if ($(this).text() != "") {
                            arr[i] = $(this).text() + " ";
                            i++;
                        }
                    }
                });
            });
        });

        $('.hidden-calculated textarea').text(arr.join(""));
        var arr = [];
    });
})

$(window).load(function() {
    var arr = [];
    var i = 0;

    $('.pricing-rates__table .button').each(function() {

        arr[i] = $(this).text() + " for 1 months with 0 discount : \n";
        i++;
    });

    var currentDiscount = arr.join("");
    $('.hidden-calculated textarea').text(currentDiscount);

    $('.pricing-rates__timeline .t-container .discount-slide-btn').on('click', function() {
        i = 0;
        var currentDiscount = $(this).text();
        var indexCurrency = currentDiscount.indexOf('€') + 2;
        var indexSep = currentDiscount.indexOf(',- p/u') - indexCurrency;
        var valueStr = currentDiscount.substr(indexCurrency, indexSep);
        var discountRate = $('.pricing-rates__timeline .t-container.active .content.left.show h5').text().replace("%", "");
        var durationSpan = $('.pricing-rates__timeline .t-container.active .content.left.show').parent().find('b').text();

        $('.pricing-rates__table .button').each(function() {

            var currentDiscount = $(this).text();
            var indexCurrency = currentDiscount.indexOf('€') + 2;
            var indexSep = currentDiscount.indexOf(',- p/u') - indexCurrency;
            var valueStr = Number(currentDiscount.substr(indexCurrency, indexSep)).toFixed(2);

            if (discountRate.length == 1) {
                var discountInt = "0.0" + discountRate;
                Number(discountInt).toFixed(2);
            } else if (discountRate.length == 2) {
                var discountInt = "0." + discountRate;
                Number(discountInt).toFixed(2);
            }

            var totalDiscount = Number(valueStr * discountInt);

            arr[i] = $(this).text() + " for " + durationSpan + " with " + discountRate + "% discount :  € " + Number(valueStr - totalDiscount) + ",- p/u \n";
            i++;
        });

        var currentDiscount = arr.join("");
        $('.hidden-calculated textarea').text(currentDiscount);
    });
});

$(document).ready(function() {
    $(window).on('resize', function() {
        var winWidth = $(window).width();
        var yellowCard = $('.developers .col-12.d-md-none').find('.developers--wrap-yellow').parent().html();
        if (winWidth < 768) {
            $('.developers .people--carousel .col-md-3').find('.developers--wrap-yellow').parent().remove();
        } else if ($('.developers .people--carousel .col-md-3 .developers--wrap-yellow').length == 0) {
            $('.developers .people--carousel').append('<div class="col-md-3">' + yellowCard + '</div>');
        }
    });

    var winWidth = $(window).width();
    if (winWidth < 768) {
        $('.developers .people--carousel .col-md-3').find('.developers--wrap-yellow').parent().remove();
    }
});

$(window).on('resize', function() {
    var winWidth = $(window).width();
    var yellowCard = $('.developers .col-12.d-md-none').find('.developers--wrap-yellow').parent().html();
    if (winWidth < 768) {
        $('.developers .people--carousel .col-md-3').find('.developers--wrap-yellow').parent().remove();
    } else if ($('.developers .people--carousel .col-md-3 .developers--wrap-yellow').length == 0) {
        $('.developers .people--carousel').append('<div class="col-md-3">' + yellowCard + '</div>');
    }
});

var winWidth = $(window).width();
if (winWidth < 768) {
    $('.developers .people--carousel .col-md-3').find('.developers--wrap-yellow').parent().remove();
}

/**
 * On mobile slider
 */

$(function() {
    if ($(document).width() <= 767) {
        $('.remote-team-steps--slide').addClass('owl-carousel');
        $('.remote-team-steps--slide').owlCarousel({
            loop: true,
            margin: 10,
            center: true,
            nav: true,
            responsive: {
                0: {
                    items: 2
                },
                767: {
                    items: 2
                },
                1000: {
                    items: 1
                }
            }
        });


        $('.technologies--slide').addClass('owl-carousel');
        $('.technologies--slide').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                575: {
                    items: 3
                },
                767: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.banner--bottom__carousel').addClass('owl-carousel');
        $('.banner--bottom__carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $('.perks--carousel').addClass('owl-carousel');
        $('.perks--carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $('.people--carousel').addClass('owl-carousel');
        $('.people--carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            center: true,
            responsive: {
                0: {
                    items: 2
                },
                767: {
                    items: 2
                },
                1000: {
                    items: 1
                }
            }
        });

        $('.featured--logos__carousel').addClass('owl-carousel');
        $('.featured--logos__carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }

    $(window).on('resize', function() {
        if ($(document).width() <= 767) {
            $('.remote-team-steps--slide').addClass('owl-carousel');
            $('.remote-team-steps--slide').owlCarousel({
                loop: true,
                margin: 10,
                center: true,
                nav: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    767: {
                        items: 2
                    },
                    1000: {
                        items: 1
                    }
                }
            });


            $('.technologies--slide').addClass('owl-carousel');
            $('.technologies--slide').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                center: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    575: {
                        items: 3
                    },
                    767: {
                        items: 3
                    },
                    1000: {
                        items: 3
                    }
                }
            });

            $('.banner--bottom__carousel').addClass('owl-carousel');
            $('.banner--bottom__carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                center: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });

            $('.perks--carousel').addClass('owl-carousel');
            $('.perks--carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                center: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });

            $('.people--carousel').addClass('owl-carousel');
            $('.people--carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                center: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    767: {
                        items: 2
                    },
                    1000: {
                        items: 1
                    }
                }
            });

            $('.featured--logos__carousel').addClass('owl-carousel');
            $('.featured--logos__carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                center: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });

            $('.company-logo-mobile-destroy').addClass('owl-carousel');
            $('.company-logo-mobile-destroy').owlCarousel({
                center: true,
                loop: true,
                margin: 20,
                nav: true,
                autoWidth: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 7
                    }
                }
            });
        } else {
            $('.remote-team-steps--slide').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.remote-team-steps--slide').find('.owl-stage-outer').children().unwrap();

            $('.technologies--slide').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.technologies--slide').find('.owl-stage-outer').children().unwrap();

            $('.banner--bottom__carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.banner--bottom__carousel').find('.owl-stage-outer').children().unwrap();

            $('.perks--carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.perks--carousel').find('.owl-stage-outer').children().unwrap();

            $('.people--carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.people--carousel').find('.owl-stage-outer').children().unwrap();

            $('.featured--logos__carousel').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.featured--logos__carousel').find('.owl-stage-outer').children().unwrap();
        }
    });

    $(window).load(function() {
        if ($(document).width() <= 767) {
            $('.company-logo-mobile-destroy').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.company-logo-mobile-destroy').find('.owl-stage-outer').children().unwrap();
        }
    });

    $(window).on('resize', function() {
        if ($(document).width() <= 767) {
            $('.company-logo-mobile-destroy').trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
            $('.company-logo-mobile-destroy').find('.owl-stage-outer').children().unwrap();
        } else {
            $('.company-logo-mobile-destroy').addClass('owl-carousel');
            $('.company-logo-mobile-destroy').owlCarousel({
                center: true,
                loop: true,
                margin: 20,
                nav: true,
                autoWidth: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 7
                    }
                }
            });
        }
    });
});

$(window).load(function() {
    var menuLeft = $('header .navbar .menu-left').height();
    $('header .navbar .menu-right').css('top', 'calc(70px + ' + menuLeft + 'px)');

    $('#main-menu-left *').on('click', function() {
        var newMenuLeft = $('header .navbar .menu-left').height();
        console.log(newMenuLeft);
        console.log('clicked');
        $('header .navbar .menu-right').css('top', 'calc(70px + ' + newMenuLeft + 'px)');
    });
});

$(document).ready(function() {

    $('.pricing-rates__timeline .t-container .discount-slide-btn, .pricing-rates__timeline .t-container .discount-slide-txt').click(function() {
        $('.pricing-rates__timeline .t-container').removeClass('active');
        $(this).parent().addClass('active');

        $('.pricing-rates__timeline .t-container .content.left').removeClass('show');
        $(this).parent().find('.left').addClass('show');

        var dataNumberSlide = $(this).parent().data('index');
        var discCount = $('.pricing-rates__timeline .t-container').length + 1;
        var ctr = 0;

        //console.log(dataNumberSlide);

        while (ctr < discCount) {

            //console.log('first val ctr: ' + ctr);

            if (dataNumberSlide <= ctr) {
                ctr++

                //console.log('value after entering the condition: ' + ctr);
                $('.pricing-rates__timeline .t-container:nth-child(' + ctr + ')').addClass('active');

                //console.log(ctr);
                ctr--;

                //console.log('value leaving the condition: ' + ctr);
            }

            ctr++;

            //console.log('value after the loop: ' + ctr);

        }
    });

    $('.pricing-rates__timeline .t-container .discount-slide-btn button, .pricing-rates__timeline .t-container .discount-slide-txt p b').trigger('click');
});

//start of drag and drop function in pricing-rates__timeline
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("dragRate", ev.target.id);
}

function drop(ev, target) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("dragRate");

    if (ev.target.id == '') {
        return false;
    }

    var from_id = data.replace('drag_', '');
    var to_id = ev.target.id.replace('drop_', '');

    $('.pricing-rates__timeline .t-container').removeClass('active');
    $('#drop_' + to_id).addClass('active');

    $('.pricing-rates__timeline .t-container .content.left').removeClass('show');
    $('#drop_' + to_id).find('.left').addClass('show');

    var dataNumberSlide = $('#drop_' + to_id).data('index');
    var discCount = $('.pricing-rates__timeline .t-container').length + 1;
    var ctr = 0;

    while (ctr < discCount) {
        if (dataNumberSlide <= ctr) {
            ctr++;
            $('.pricing-rates__timeline .t-container:nth-child(' + ctr + ')').addClass('active');
            ctr--;
        }
        ctr++;
    }
}
//end of drag and drop function in pricing-rates__timeline

/**
 * Company logo
 */

$(document).ready(function() {
    $('.company-logo.mobile-display .show-more-btn').click(function(e) {
        e.preventDefault();
        $('.company-logo.mobile-display .company-logo--slider .logo-slide').fadeIn();
        $('.company-logo.mobile-display .company-logo--slider .logo-slide').addClass('show');

        $(this).css('display', 'none');
    });
});

$(window).load(function() {
    $('.company-logo--slider .logo-slide img').each(function() {
        if ($(this).width() > 150) {
            $(this).css('width', '150px');
        }
    });
});

/**
 * Smooth scroll
 */

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

//GlobalFunctions
function popups() {
    $('a[href="#getquote"]').click(function(e) {
        e.preventDefault();

        $('.popup--rquote').addClass('show');
    });

    $('a[href="#getcalcquote"]').click(function(e) {
        e.preventDefault();

        $('.popup--rcalc').addClass('show');
    });

    $('a[href="#apply"]').click(function(e) {
        e.preventDefault();

        var vacaturesVal = $(this).attr('vacTitle');

        $('#input_5_16').val(vacaturesVal);

        $('.popup--vacatures').addClass('show');
    });

    $('.js-close-popup').click(function(e) {
        e.preventDefault();

        $(this).closest('.popup').removeClass('show');
    });
}

$(document).ready(function() {

    let params = (new URL(document.location)).searchParams;
    if (window.location.href.indexOf("country") > -1) {
        let country = params.get("country");
        if (country !== '') {
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "/nl/wp-admin/admin-ajax.php",
                data: {
                    action: "country_filter",
                    filterVal: country
                },
                beforeSend: function() {
                    $('.team-section').html('');
                    $('.cc-loader').show();
                },
                success: function(response) {
                    $('.cc-loader').hide();
                    $('.team-section').html(response.content);
                    // $('html, body').animate({
                    //     scrollTop: $(".job-openings-wrap").offset().top
                    // }, 500);
                    //applyNowBtn();
                }
            });
        }
    }
    // Filter Select Function
    $('.button-nav a').click(function() {
        $('.button-nav a').removeClass('active');
        $(this).addClass('active');
        let country = $(this).attr('datacountry'),
            cName = $(this).text(),
            pageID = $('.team-section').attr('pageid');
        console.log(cName);
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "/nl/wp-admin/admin-ajax.php",
            data: {
                action: "country_filter",
                filterVal: country,
                filterPage: pageID,
                filterCname: cName
            },
            beforeSend: function() {
                $('.team-section').html('');
                $('.cc-loader').show();
            },
            success: function(response) {
                $('.cc-loader').hide();
                $('.team-section').html(response.content);
                // $('html, body').animate({
                //     scrollTop: $(".job-openings-wrap").offset().top
                // }, 500);
                //applyNowBtn();
            }
        });
    });

});