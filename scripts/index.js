$(document).ready(function(){
    $('.nav_menu').click(function(){
        var $icon = $('.nav_menu i');
        $icon.toggleClass('bi-chevron-double-left bi-chevron-double-right')
        $('.menu_text').toggleClass('collapsed expanded')
    });
});