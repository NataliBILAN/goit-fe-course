'use strict'
$(function(){
    var $page = $('html, body');
    $('.main-menu a[href*="#"], .to-page-nav').click(function(){ 
        $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 99
    }, 900);
    return false;
});
    $('#nav-toggle, .main-menu li a').click(function(){
     $('.main-menu').toggleClass('menu-open');
    });  
    $(document).click(function(event) {
        if ($(event.target).closest("#nav-toggle").length ) return;
        $('.main-menu').removeClass('menu-open');
        event.stopPropagation();
    });
})(jQuery);