(function () {

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
           $("nav").css("background","#fff");
        }
        else {
           $("nav").css("background","none");
        }
    });
    
    // article metainfo
    $('#imageMetainfo').on('click', function(){
        $('#metainfoWrapper').toggle();
    });

    //tooltips
    $('[data-toggle="tooltip"]').tooltip();


    // include footer
    $('.include-footer').load('footer.html');
})();

+function ($) {
    // basic toggle navigation menu

    $('#searchbar').hide();
    $('#buttonCloseSearchbar').hide();

    $('#buttonOpenSearchbar').on('click', function(){
        $('#helpText, #buttonOpenSearchbar').hide();
        $('#searchbar, #buttonCloseSearchbar').removeClass('hide').addClass('show')();
    });

    $('#buttonCloseSearchbar').on('click', function(){
        $('#helpText, #buttonOpenSearchbar').show();
        $('#searchbar, #buttonCloseSearchbar').removeClass('show').addClass('hide');

    });

    $('#buttonOpenSearchbarMobile').on('click', function () {
        $('.fly-searchbar').fadeIn(200);
    });

    $('#buttonCloseSearchbarMobile').on('click', function(){
        $('.fly-searchbar').fadeOut(200);
    });

}(jQuery);


+function ($) {
    // tipue search
    $('#tipue_search_input').tipuesearch();
}(jQuery);

+function ($) {
    
    $('.homepage-slider').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    // categories carousel
    $('.small-slider').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        responsive:{
            0:{
                items:3.5
            },
            600:{
                items:4
            },
            1000:{
                items:10
            }
        }
    });


    // featured channel carousel
    $('.tab-product-slider').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        stagePadding: 80,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:6
            },
            1000:{
                items:4
            }
        }
    });


}(jQuery);




























