$(function(){
    var $page = $('html, body');
    $('.main-menu a[href*="#"]').click(function(){ 
        $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 99
    }, 700);
    return false;
});

})


