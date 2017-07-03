$(document).ready(function(){
//navbar

jQuery(document).on('click', '.mega-dropdown', function(e) {
  e.stopPropagation()
})

//dropdown hover
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
//slider
      $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });

    //top button
    $(window).scroll(function(){

if ($(this).scrollTop()>=400)
{
  $(".topbutton").show();
}

else

{
  $(".topbutton").hide();
}

})

$(".topbutton").click(function(){

$("html,body").animate({scrollTop:0},600);
})

    //ing
    $(".in").click(function(){

$(".ing").show();
$(".met").hide();

    });

    $(".me").click(function(){
$(".ing").hide();
$(".met").show();
    })
});