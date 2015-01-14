triggerParallaxAnimation = function( startAnimation, percentage, element ){
	if ( scrollY > startAnimation ){
		var u = ( startAnimation - scrollY ) * percentage;
		$(element).css({
			transform: "translate3d(0," + u + "px,0)",
			transition: "transform .5s easeOutQuad",
			"-webkit-transform": "translate3d(0," + u + "px,0)",
			"-moz-transform": "translate3d(0," + u + "px,0)",
			"-o-transform": "translate3d(0," + u + "px,0)",
			"-ms-transform": "translate3d(0," + u + "px,0)"
		});
	};
}

triggerPlaneAnimation = function( startAnimation, percentage, element ){
	if ( scrollY > startAnimation ){
		var u = ( scrollY - startAnimation ) * percentage;
		$(element).css({
			transform: "translate3d(" + u + "px, 0 ,0)",
			transition: "transform .5s easeOutQuad",
			"-webkit-transform": "translate3d(" + u + "px, 0 ,0)",
			"-moz-transform": "translate3d(" + u + "px, 0 ,0)",
			"-o-transform": "translate3d(" + u + "px, 0 ,0)",
			"-ms-transform": "translate3d(" + u + "px, 0 ,0)"
		});
	};
}

showCarousel = function(place){
	var $carousel = $('#' + place + '-carousel');
	
	if ($('#lightbox').length > 0) {
		$carousel.css({'display': 'block'});
		$('#lightbox').show();	
	} else {
		var lightbox = '<div id="lightbox"></div>';
		$('body').append(lightbox);
		$carousel.css({'display': 'block'});
	};

	$('#lightbox').on('click', function(){
		$carousel.css({'display': 'none'});
		this.remove();
	});
}

$(document).ready(function(){

	$('.carousel').Zippy(args);

	$(window).scroll(function(){
		$.easing.def = "easeOutQuad";
		var wHeight = $(window).height();
		var scrollY = $(window).scrollTop();
		
		var startAnim1 = $('.macbook').offset().top - wHeight;
		var endAnim1 = startAnim1 + wHeight;

		var startAnim2 = $('.moleskine').offset().top - wHeight;
		var endAnim2 = startAnim2 + wHeight;

		var startAnim3 = $('.airplane').offset().top - wHeight;
		var endAnim3 = startAnim3 + wHeight;



		triggerParallaxAnimation(startAnim1, 0.15, '.macbook');
		triggerParallaxAnimation(startAnim2, 0.15, '.moleskine');
		triggerPlaneAnimation(startAnim3, 1.0, '.airplane');
	
	});

	$('.project').on('click', function(e){
		var itemClass = e.target.id;
		$('.' + itemClass).slideToggle();
	});

	$('.project img').mouseover(function(e){
		var src = $(e.target).attr("src").match(/[^\.]+/) + "color.jpg";
		$(e.target).attr("src", src);
	}).mouseout(function(e){
		var src = $(e.target).attr("src").replace("color.jpg", ".jpg");
		$(e.target).attr("src", src);
	});

	$('circle').on('click', function(e){
		var place = e.target.id;
		showCarousel(place);
	});

})