
(function(){
  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;
  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){
      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
      el.style.backgroundPosition = elBackgrounPos;
    });
  };
})();

        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(4000); // will first fade out the loading animation
            $('#preloader').delay(4000).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(4000).css({'overflow':'visible'});
        })

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


  var $animation_elements = $('.animation-element');
var $window = $(window);
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}


$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
    
    
  $(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".ps").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});


    
$(document).ready(function(){
    $(".btn-info").click(function(){
        $(".collapse").collapse('toggle');
    });
    $(".btn-success").click(function(){
        $(".collapse").collapse('show');
    });
    $(".btn-warning").click(function(){
        $(".collapse").collapse('hide');
    });
});


