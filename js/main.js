var delayFadeIn = function($elem, time) {
	$elem.delay(time).queue(function(){
		$elem.addClass('fadeIn');
	})
}

$(document).ready(function(){
	delayFadeIn($('.developer'), 1000);
	delayFadeIn($('.designer'), 1500);
	delayFadeIn($('.adventurer'), 2000);
});