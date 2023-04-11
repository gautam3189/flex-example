$(document).ready(function(){
$('.nav-icon').click(function(){
    $elem_icon = $('.nav-icon i');
    $elem_icon.toggleClass('bi-chevron-double-left bi-chevron-double-right');
    $('.menu-texts').toggleClass('collapsed expanded');
    $('.main-content').toggleClass('lm-pos-abs');
});
$('#sub-menu').click(function(){
    $('.sub-menu').toggleClass('collapsed expanded');
})
});
function open_sub_menu(){
     $('.sub-menu').toggleClass('collapsed expanded');
    // $('.main-content').toggleClass('lm-pos-abs');
}