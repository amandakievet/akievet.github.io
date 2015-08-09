var delayFadeIn = function($elem, time) {
	$elem.delay(time).queue(function(){
		$elem.addClass('fadeIn');
	})
}


$(document).ready(function(){
	delayFadeIn($('.developer'), 1000);
	delayFadeIn($('.designer'), 1500);
	delayFadeIn($('.adventurer'), 2000);

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